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

    let sueldoBaseStr = componenteSueldoBase.value;
    let numeroVentasStr = componenteVentas.value;
    let precioProductoStr = componentePrecio.value;

    let sueldoBase = parseFloat(sueldoBaseStr);
    let numeroVentas = parseInt(numeroVentasStr);
    let precioProducto = parseFloat(precioProductoStr);
    
    let comision = calcularComision(numeroVentas, precioProducto);

    let total = sueldoBase + comision;
    
    let spSueldoBase = document.getElementById("spSueldoBase");
    let spComision = document.getElementById("spComision");
    let spTotal = document.getElementById("spTotal");

    spSueldoBase.textContent = sueldoBase.toFixed(2);
    spComision.textContent = comision.toFixed(2);
    spTotal.textContent = total.toFixed(2);
}