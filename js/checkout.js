function muestroCheckout() {
    if (selectedProducts.length === 0) {
        alert("Todavía no realizó ninguna compra.")
    } else {
        cart = new shoppingCart(selectedProducts)
        cart.verTotales(totales)  
    }
}


function confirmarCompra() {
    document.body.style.cursor  = "wait"
    setTimeout(() => {
        carrito = []
 		alert("Su pedido fue procesado, puede pasar a retirar en 45 minutos.")
        reload();
        document.body.style.cursor  = "default"
    }, 2500);
       
}


function reload(){
	location.reload();
}

