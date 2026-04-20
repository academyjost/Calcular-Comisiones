const VENTAS_BASEE = 5;

function calcularComision(numeroVentas,PrecioProducto){
    let comision = 0;
    if (numeroVentas > VENTAS_BASEE) {
        let ventasExtra = numeroVentas - VENTAS_BASEE;
        comision = ventasExtra * (PrecioProducto * 0.1); // 10% de comisión por cada venta extra
    }
    return comision;
}

function calcular(){
    let componenteSueldoBase = document.getElementById("txtSueldoBase");
    let componenteVentas = document.getElementById("txtVentas");
    let componentePrecio = document.getElementById("txtPrecio");

    let sueldoBaseStr = parseFloat(componenteSueldoBase.value);
    let numeroVentasStr = parseInt(componenteVentas.value);
    let precioProductoStr = parseFloat(componentePrecio.value);
}