//-----------------------------------REGISTRO
class Usuario {
  constructor(nombre, username, email, contraseña) {
    this.nombre = nombre;
    this.username = username;
    this.email = email;
    this.constraseña = contraseña;
  }
}


let usuarios = [];


const agregarUsuario = function () {
    

    let inputEmail = document.querySelector("#input_email").value;
    let inputUsername= document.querySelector("#input_username").value;
    let inputPassword = document.querySelector("#input_contraseña").value;

    if(inputEmail.search('@') != -1) // devuelve -1 solo si no lo encuentra
    {
      let datos = {
        email: inputEmail,
        username: inputUsername,
        constraseña: inputPassword
      };


      if(localStorage.usuarios != null)
      {
        usuarios = JSON.parse(localStorage.usuarios);
      }

      usuarios.push(datos);

      localStorage.setItem("usuarios", JSON.stringify(usuarios));

      location.replace("../index.html"); 
    }
    else
    {
      alert("Debe ingresar un email válido");
    }
  };


  if(document.getElementById("formulario") != null)
  {
    document.querySelector("#formulario").addEventListener("submit", function (e) {
      e.preventDefault();
      agregarUsuario();
    });
  }

//-----------------------------------LOGIN

  const validarDatos = function () {
    let inputEmail = document.querySelector("#input_email").value;
    let inputContraseña= document.querySelector("#input_contraseña").value; //le cambio la ññññ?????, tambien podria ser input password 
  
    usuarios = JSON.parse(localStorage.usuarios);

  
    function validar_email (usuario){ // deberia hacer estas dos funciones anonimas?
      return usuario.email === inputEmail;
    }

    function validar_contraseña (usuario){ // deberia hacer estas dos funciones anonimas?
      return usuario.constraseña === inputContraseña;
    }

    if (usuarios.find(validar_email)) { 
      if (usuarios.find(validar_contraseña)) {
        
        let result = usuarios.filter(obj => { //Google tkm
          return obj.email === inputEmail //filtra en base a los us que ya tengo. Encuentra obj cuyo mail === input. Devuelve usuario completo
        });


        localStorage.setItem("usuarioLogeado", JSON.stringify(result[0].username)); //resultado unico


        location.replace("./pages/home.html");
        
      } else {
        alert("Email o contraseña incorrecto, HOLI"); //puse holi y dowow para identificar donde saltaba el error
      }
    } else {
      alert("Email o contraseña incorrecto, DOWOW");
    }
  };

  if(document.getElementById("formularioDelIndex") != null)
  {
    document.querySelector("#formularioDelIndex").addEventListener("submit", function (e) {
      e.preventDefault();
      validarDatos();
    });
  }


//-------------------MOVIMIENTOS

class Movimiento {
  constructor(tipo, concepto, fecha, monto) {
    this.tipo = tipo;
    this.concepto = concepto;
    this.fecha = fecha;
    this.monto = monto;
  }
}

let movimientos = [];

const agregarMovimiento = function () {
    let inputTipo = document.querySelector("#input_tipo").value;
    let inputConcepto= document.querySelector("#input_concepto").value;
    let inputFecha = document.querySelector("#input_fecha").value;
    let inputMonto = document.querySelector("#input_monto").value;


if(localStorage.movimientos != null){
movimientos = JSON.parse(localStorage.movimientos);
}

let cuenta ={
  tipo: inputTipo,
  concepto: inputConcepto,
  fecha: inputFecha,
  monto: inputMonto
}

if(inputConcepto == "" || inputFecha == "" || inputMonto == ""){
  alert ("Debe completar todos los campos");
}else {
  movimientos.push(cuenta);

  localStorage.setItem("movimientos", JSON.stringify(movimientos));

  location.replace("./home.html");
}

}

if(document.getElementById("formularioMovimiento") != null){
  document.querySelector("#formularioMovimiento").addEventListener("submit", function (e) {
    e.preventDefault();
    agregarMovimiento();
  });
}

//  aaaaaaaaaaaaaaaaaaaaaaaa mi cerebro aaaaaaaaaaaaaaaaa

//-------------------HISTORIAL o sea Home


let historial = JSON.parse(localStorage.movimientos) || [];


if (document.URL.includes("home.html") ) {
  console.log("Estoy en el home");

  for (let i = 0; i < historial.length; i++) {
 
    const holi = historial[i].tipo;
    const holi2 = historial[i].concepto;
    const holi3 = historial[i].monto;
    const holi4 = historial[i].fecha;
  
  
    console.log(holi, holi2, holi3, holi4);

    let div = document.createElement("div"); //crea un elemento div

    div.id = "Tarjeta" + i; //Asigna un id diferente a cada div

    div.classList.add('card', 'mb-3');

    document.getElementById("contenedorHistorial").appendChild(div); //Selecciona como se llama el elemento por ese id, y el appenchild agrega un hijo

   
   
    let div1 = document.createElement("div"); 

    div1.id = "Fila" + i; 

    div1.classList.add('row', 'g-0');

    document.getElementById("Tarjeta"+i).appendChild(div1); // busco el elemento anterior
    
    
    
    let div2 = document.createElement("div"); 

    div2.id = "Columna" + i;

    div2.classList.add('col-md-12');

    document.getElementById("Fila"+i).appendChild(div2); 



    let div3 = document.createElement("div"); 

    div3.id = "Cuerpo" + i;

    div3.classList.add('card-body');

    div3.innerHTML = 
    "<h5 class='card-title'>"+ "$" + holi3 + "</h5>" +
    "<p class='card-text'>"+ holi + "</p>" +
    "<p class='card-text'>" + holi2 +"</p>" +
    "<p class='card-text'><small class='text-muted'>" + holi4 + "</small></p>";
    
    document.getElementById("Columna"+i).appendChild(div3); 
  
  }

  let NombreDeUsuario = document.getElementById('NombreDeUsuario');

  NombreDeUsuario.innerHTML += " " + JSON.parse(localStorage.usuarioLogeado) + "!";


}







// const crearCards = function () {
//   //limpiamos ontenedor
//   contenedor_cards.innerHTML = "";

//   datos.map(function (movimientos) {
//     let card = document.createElement("div");
//     card.classList = "card mb-3";

//     let contenido_card = `
//         <div class="card-body">
//           ${movimientos.tipo}
//           ${movimientos.concepto}
//           ${movimientos.fecha}
//           ${movimientos.monto}
//         </div> `;

//     card.innerHTML = contenido_card;
//     contenedor_cards.appendChild(card);
//   });
// };

