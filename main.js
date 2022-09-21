let formulario = document.getElementById("login");
let formRegistro = document.getElementById("registro");
let edad = document.getElementById("edad");
let errorRegistro =  document.getElementById("error");
errorRegistro.style.color ='red';

// constructor

class Usuario{ 
    constructor(user, password, edad){
        this.user = user;
        this.password = password;
        this.edad = edad;
    }
}



let usuarios =[];
let usuario = new Usuario("Juancarlo", "3210", "58");



usuarios.push(usuario);


formRegistro.addEventListener("submit",(e) => {
    e.preventDefault();
    let userLogin = document.getElementById("userRegister").value;
    let passwordLogin = document.getElementById("passRegister").value;
    let edadLogin = document.getElementById("edadRegister").value;
    

    const regPermiso = (edadLogin >=18) ? true : false

    regPermiso ? swal() : swal ("Sos menor  no podes ingresar")
   

    if (edadLogin >=18 ) {
        if(userLogin && passwordLogin){
            let nuevoUsuario = new Usuario (userLogin, passwordLogin); 
    
            usuarios.push(nuevoUsuario)
            swal(`Estás registrado ${userLogin}, podés loguearte para comprar`)
        
        }

    }
})



formulario.addEventListener("submit", (e) =>{
    e.preventDefault();
    let userLogin = document.getElementById("user").value;
    let passwordLogin = document.getElementById("pass").value;

    for (let user of usuarios) {
        if (user.user == userLogin && user.password == passwordLogin ) {
              swal("Bienvenido a nuestro carrito de bebidas");
              window.location.href = "carrito.html"
              localStorage.setItem("usuario", user.user);
        } else if ((user.user =! userLogin) && (user.password =! passwordLogin) || 
        (user.user =! userLogin) || (user.password =! passwordLogin) ) {
            errorRegistro.innerHTML = `<p> Datos Erróneos</p>`
        }
    }

    

})
