class shoppingCart {
    constructor(selectedProducts) {
        var subtotal = 0
        this.productos = infoJSON;
        this.carrito = selectedProducts
        this.verTotales = function(grillaTotales) {         
            let grilla = `<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog" role="document">
                              <div class="modal-content">
                                <div class="modal-header">
                                  <h5 class="modal-title" id="exampleModalLabel">Pedido</h5>
                                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                  </button>
                                </div>
                                <div class="modal-body">                                 
                                  <p>El subtotal  es:                      $ ${this.subtotal().toFixed(0)}</p>
                                  <p>Tiene un descuento de:                $ ${this.aplicoDescuento()}</p>
                                  <p>El total     es:                      $ ${this.total()}</p>
                                </div>
                                <div class="modal-footer">
                                  <button type="button" class="btn btn-secondary" data-dismiss="modal">Seguir Comprando</button>
                                  <button type="button" class="btn btn-primary" onClick="confirmarCompra()">Enviar pedido</button>
                                </div>
                              </div>
                            </div>
                          </div>`
                //grillaTotales.innerHTML = grilla;
                grillaTotales.html(grilla);  
        }

//-----------------------------------------------------------------

        this.subtotal = function() {               
             for (let i in this.carrito) {
             let r = this.productos.find(c => c.id === this.carrito[i])
                 subtotal += r.price
              }
              return subtotal;
        }
        
//-----------------------------------------------------------------        
        this.aplicoDescuento = function() {

          if (this.carrito.length > 2) {
            return (subtotal - (subtotal * 0.95))
          } else if (this.carrito.length > 5) {
             return (subtotal - (subtotal * 0.90))
          } else{
              return 0;
          }

        }

        this.total = function() {
          if (this.carrito.length < 2) {
            return subtotal;
          }else {
            return Number(subtotal - this.aplicoDescuento())
          }
        }
    }
}