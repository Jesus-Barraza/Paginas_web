function calcularCobro(horas) {
    if (horas > 0) {
        return 30 * horas
    } else {
        return 0
    } 
};

module.exports = {calcularCobro};