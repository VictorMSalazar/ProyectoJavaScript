//const products = '[{"id" : "AAA001", "name" : "Pan de Jamon", "description" : "Masa hojaldrada relleno de jamon ahumado, panceta ahumada, aceituna y uvas pasas", "img" : "images/pandejamon.jpg", "price" : 700, "available" : true, "tags" : ["pan", "jamon", "panceta"] },{ "id" : "BBB002", "name" : "Tequeños", "description" : "Masa semi-hojaldrada rellena de queso venezolano, con salsa para dipear", "img" : "image/tequeño.jpg", "price" : 30, "available" : true, "tags" : ["tequeño", "queso"] },{ "id" : "CCC003", "name" : "Pan de Guayaba", "description" : "Pan de masa suave, relleno de dulce de guayaba y queso venezolano", "img" : "image/panguayaba.jpg", "price" : 600, "available" : true, "tags" : ["pan", "guayaba", "queso"] }]';

document.addEventListener("DOMContentLoaded", function() {
	const productsJSON = JSON.parse(products);
    const productContainer = document.getElementById("mercaderia");

    productsJSON.forEach(function(product){
        if(product.avaliable){
               const cardProduct = buildProductCard(product);
               productContainer.innerHTML += cardProduct;
            }

        })
})


//const productContainer = document.getElementById("mercaderia");
//    productsJSON = JSON.parse(products)
//    productsJSON.forEach(function(product){
//      const htmlCard=
//         `<div class="col-lg-4 mercaderia__card">
//                <div class="card" style="width: 18rem;">
//                    <img src="${product.img}" class="card-img-top" alt="img">
//                    <div class="card-body">
//                        <h5 class="card-title">${product.name}</h5>
//                        <p class="card-text">${product.description}</p>
//                        <p class="card-text">${product.price}</p>
//                        <a href="#" class="btn btn-primary">Agregar</a>
//                    </div>
//                </div>
//            </div>`;
//            document.write(htmlCard)
//})
