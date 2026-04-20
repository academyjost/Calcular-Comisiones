function recuperarTexto(idComponente) {
    let componente = document.getElementById(idComponente);
    let valor = componente.value;
    return valor;
}

function recuperarFloat(idComponente) {
    let valorTexto = recuperarTexto(idComponente);
    let valorFloat = parseFloat(valorTexto);
    return valorFloat;
}
function mostrarError(idComponente, mensaje) {
    let componente = document.getElementById(idComponente);
    // Elimina mensaje previo si existe
    let errorPrevio = componente.nextSibling;
    if (errorPrevio && errorPrevio.className === "error-mensaje") {
        errorPrevio.remove();
    }
    
    if (mensaje) {
        let spanError = document.createElement("span");
        spanError.className = "error-mensaje";
        spanError.textContent = mensaje;
        componente.insertAdjacentElement("afterend", spanError);
    }
}