//DOM BUILDER PRODUCTS

function buildProductCard(product){
    const htmlCard=
         `<div class="col-lg-4 mercaderia__card">
                <div class="card" style="width: 18rem;">
                    <img src="${product.image}" class="card-img-top" alt="img">
                    <div class="card-body">
                        <h5 class="card-title">${product.name}</h5>
                        <p class="card-text">${product.description}</p>
                        <p class="card-text">${product.price}</p>
                        <a href="#" class="btn btn-primary">Agregar al pedido</a>
                    </div>
                </div>
            </div>`;

            return htmlCard;
}
