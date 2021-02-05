
let selectedProducts = []; //Arreglo done iran los productos
let btnPedir = document.getElementById("btnPedido"); //Boton que agrega el pedido
let merc = document.getElementById("mercaderia");
let totales = document.getElementById("totales")

function crearTarjeta(merc) {
 
    let filas = "No tiene productos en el carrito";
        if (products.length > 0) {
            filas = ""
            for (let i in products) {
                filas += `	<div class="col-lg-4 mercaderia__card mb-5">
          		      		      <div class="card" style="width: 18rem;">
          		      	 	       <img src="${products[i].img}" class="card-img-top" alt="img">
          		          	     <div class="card-body d-flex justify-content-center flex-column">
          		                 <h5 class="card-title">${products[i].name}</h5>
          		                 <p class="card-text">${products[i].description}</p>
                               <p class="card-text">$ ${products[i].price}</p>
          		                 <a href="#" class="btn btn-primary btnAgr mb-2" data-id="${products[i].id}" onclick="agregarProducto()">Agregar</a>                               
          		                 </div>
          		                </div>
          		              </div>`          		
            }            
        }
        merc.innerHTML = filas      
    }

document.addEventListener("DOMContentLoaded", crearTarjeta(merc))


function agregarProducto() {      
      event.preventDefault();

      const idProduct = event.target.dataset.id;
      let recoveredData = localStorage.getItem('codigo')
      if(recoveredData == null){
          
        localStorage.setItem('codigo', JSON.stringify(selectedProducts))
      }      

       if(recoveredData === idProduct){
         console.log("Ya agrego este producto");
         }else{
        let data = JSON.parse(recoveredData)
        selectedProducts.push(idProduct)
        localStorage.setItem('codigo', JSON.stringify(selectedProducts))
      } 

      console.log(selectedProducts);
}











