class Producto{
    constructor(bebida,precio){
        this.bebida = bebida;
        this.precio = Number(precio);
    }
}


const compra = []



let form = document.getElementById('form')
let inputBebida = document.getElementById('bebida')
let inputPrecio = document.getElementById('precio') 

let mostrarProdSolos = document.getElementById('mostrarProdSolos')
let mostrarTodosProd = document.getElementById('mostrarTodosProd')
let btnMostrarProd = document.getElementById('btnMostrar')
let validacion = false 




let bebida = form.children[1].value;
let precio = form.children[5].value;


form.addEventListener('submit', agregarProd)
btnMostrarProd.addEventListener('click', mostrarTodosLosProd)


inputBebida.focus()


function validarDatos() {
    bebida = form.children[1].value;
    precio = form.children[5].value;
    console.log(bebida)
    console.log(precio)

    if(bebida == '' || precio == ''){
        swal("Se debe completar todos los campos para continuar")
        inputBebida.focus()
        validacion = false;
         
    } else {
        validacion = true;
    }

}



function agregarProd(e){
    e.preventDefault()
    validarDatos();
    if(validacion == true){
        let confirmar = confirm("Desea agregar el producto?")
        if(confirmar==  true){
            let datos = e.target
            compra.push(new Producto(bebida,precio))

            datos.children[1].value = "";
            datos.children[5].value = "";
    
           // bebida = document.getElementById('iprod').bebida; 

            mostrarProdSolos.innerHTML = ""
            mostrarUnProd()
            inputBebida.focus()    


        }else{
            swal("No se agregó el producto")
        }
        
        } else{
            inputBebida.focus
        }
    

}

const mostrarUnProd = () =>{
    mostrarProdSolos.innerHTML =
    `<h3>Bebida ingresada:</h3>
    <p><strong>Producto: </strong>${bebida}</p>
    <p><strong>Precio: </strong>${precio}</p>`
}


function mostrarTodosLosProd (e){
    e.preventDefault(); 
    mostrarTodosProd.innerHTML = '<h3>Bebidas Acumuladas</h3>';
    for(const datos of compra){
        mostrarTodosProd.innerHTML += 
        `<p><strong>Producto: </strong>${datos.bebida}</p>
        <p><strong>Precio: </strong>${datos.precio}</p> `
    }
}
