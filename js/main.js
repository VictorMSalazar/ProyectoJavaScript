
function onSelectClick(event) { 
  const idProduct = event.target.dataset.id;
  localStorage.setItem("codigo",idProduct);
}


document.addEventListener("DOMContentLoaded", function () {
 
  const productContainer = document.getElementById("mercaderia");
  products.forEach(function (product) {
    if (product.available) { 
      const cardProduct = buildProductCard(product);
      productContainer.innerHTML += cardProduct;
    }
  });

 
 	products.forEach(function (product) {
    if (typeof(Storage) !== 'undefined') {
  		 aux = localStorage.getItem('codigo');
  		if (aux === product.id) {
  			nom = product.name;
  			window.alert(`Su ultima selección fue ${nom}`);
  		} 
	}
  });


    // DOM 
  const btnProducts = document.querySelectorAll('.btn');
  btnProducts.forEach(function(btnProduct) {
    btnProduct.addEventListener('click', onSelectClick);
  })

});