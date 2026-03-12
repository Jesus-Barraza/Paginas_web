/*
function calcularCobro(horas) {
    return 0
};
*/

/*
function calcularCobro(horas) {
    if (horas > 0) {
        return 30 * horas
    } else {
        return 0
    } 
};
*/

/*
function calcularCobro(horas) {
    if (horas > 0 && horas <= 2) {
        return 30 * horas
    } else if (horas > 2) {
        return 25 * horas
    } else {
        return 0
    } 
};
*/

/*
function calcularCobro(horas) {
    if (horas > 0 && horas <= 2) {
        return 30 * horas
    } else if (horas > 2 && horas <= 5) {
        return 25 * horas
    } else if (horas > 5) {
        return 20 * horas
    } else {
        return 0
    } 
};
*/

/*
function calcularCobro(horas) {
    if (horas > 0 && horas <= 2) {
        return 30 * horas
    } else if (horas > 2 && horas <= 5) {
        return 25 * horas
    } else if (horas > 5) {
        return 20 * horas
    } else if (horas == 0) {
        return 0
    } else {
        return "Error: no se puede hacer horas negativas"
    }
};
*/

function calcularCobro(horas) {
    if (horas > 0 && horas <= 2) {
        return 30 * horas
    } else if (horas > 2 && horas <= 5) {
        return 25 * horas
    } else if (horas > 5) {
        return 20 * horas
    } else if (horas == 0) {
        return 0
    } else {
        throw new Error("no se puede hacer horas negativas")
    }
};

module.exports = {calcularCobro};