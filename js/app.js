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

      location.replace("./home.html"); 
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

  
    function validar_email (usuario){
      return usuario.email === inputEmail;
    }

    function validar_contraseña (usuario){
      return usuario.constraseña === inputContraseña;
    }

    if (usuarios.find(validar_email)) {
      if (usuarios.find(validar_contraseña)) {
        
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


