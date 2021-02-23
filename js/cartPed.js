
let selectedProducts = [];
let HTMLCard = "";
let merc = $("#mercaderia");
let totales = $("#totales");
let infoJSON = [];

function crearTarjeta() {
   
   $.ajax({            
      url: "js/info.json",
      dataType: "json",
      success: function(data) {
         infoJSON = data;
         $.each(infoJSON, function(i) {
            HTMLCard += `<div class="col-lg-4 mercaderia__card mb-5">
                              <div class="card" style="width: 18rem;">
                               <img src="${infoJSON[i].img}" class="card-img-top" alt="img">
                               <div class="card-body d-flex justify-content-center flex-column">
                               <h5 class="card-title">${infoJSON[i].name}</h5>
                               <p class="card-text">${infoJSON[i].description}</p>
                               <p class="card-text">$ ${infoJSON[i].price}</p>
                               <a href="#" class="btn btn-primary btnAgr mb-2" data-id="${infoJSON[i].id}" onclick="agregarProducto()">Agregar</a>                               
                               </div>
                              </div>
                            </div>`
         })
         $("#mercaderia").html(HTMLCard)
      },
      error: function() {        
         HTMLCard = `<div>                               
                     <h5>Ha Ocurrido Un Error</h5>                              
                     </div>`
         $("#mercaderia").html(HTMLCard)
      } 
   })
}

$(document).ready(crearTarjeta());

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











