const VENTAS_BASEE = 5;

// Nueva función para manejar el teclado
function evaluarEnter(event) {
    if (event.key === "Enter") {
        calcular();
    }
}

function calcularComision(numeroVentas, PrecioProducto) {
    let comision = 0;
    if (numeroVentas > VENTAS_BASEE) {
        let ventasExtra = numeroVentas - VENTAS_BASEE;
        // 10% de comisión por cada venta extra
        comision = ventasExtra * (PrecioProducto * 0.10); 
    }
    return comision;
}

function validarCampo(id) {
    let valor = recuperarTexto(id);
    let esValido = true;
    let mensaje = "";

    if (valor.trim() === "") {
        mensaje = "Requerido";
        esValido = false;
    } else if (isNaN(valor)) {
        mensaje = "Solo números";
        esValido = false;
    }

    mostrarError(id, mensaje);
    return esValido;
}

function mostrarEnSpan(id, texto) {
    let componente = document.getElementById(id);
    if (componente) {
        componente.textContent = texto;
    }
}

function calcular() {
    let v1 = validarCampo("txtSueldoBase");
    let v2 = validarCampo("txtVentas");
    let v3 = validarCampo("txtPrecio");

    if (!v1 || !v2 || !v3) return;

    let sueldoBase = recuperarFloat("txtSueldoBase");
    let numeroVentas = recuperarFloat("txtVentas");
    let precioProducto = recuperarFloat("txtPrecio");

    let comision = calcularComision(numeroVentas, precioProducto);
    let total = sueldoBase + comision;

    // Formateo de moneda
    mostrarEnSpan("spSueldoBase", `$${sueldoBase.toFixed(2)}`);
    mostrarEnSpan("spComision", `$${comision.toFixed(2)}`);
    mostrarEnSpan("spTotal", `$${total.toFixed(2)}`);
}