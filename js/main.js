document.addEventListener("DOMContentLoaded", function() {

    const productContainerPasteleria = document.getElementById("mercaderia");

        products.forEach(function(product){
        if(products.avaliable){
                const cardProduct = buildProductCard(product);
                productContainer.innerHTML += cardProduct;
            }

        })

})