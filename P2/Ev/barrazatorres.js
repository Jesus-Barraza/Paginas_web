/* Función 1
function CalcularDescuento(num) {
    return false;
}; 
*/

/* Función 2
function CalcularDescuento(num) {
    return 0;
};
*/

/* Función 3
function CalcularDescuento(num) {
    return num-(num/10);
};
*/

/* Función 4
function CalcularDescuento(num) {
    if (num <= 1000) {
        return num-(num/10);
    } else {
        return num-(num/5);
    }
};
*/

//Función 5
function CalcularDescuento(num) {
    if (num <= 1000) {
        return num-(num/10);
    }
    if (num > 1000 && num <= 5000) {
        return num-(num/5);
    } else {
        return num-((num*3)/10)
    }
};

module.exports = {CalcularDescuento};