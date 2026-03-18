/*
function calcularTotal(car) {

};
*/

/*
function calcularTotal(car) {
    return 0
};
*/

/*
function calcularTotal(car) {
    if (car.length > 0) {
        return car[0].precio;
    } else {
        return 0;
    }
};
*/

/*
function calcularTotal(car) {
    if (car.length > 0) {
        let total = 0;
        for (let i = 0; i < car.length; i++) {
            total += car[i].precio;
        };
        return total;
    } else {
        return 0;
    }
};
*/


function calcularTotal(car) {
    if (car.length > 0) {
        let total = 0;
        for (let i = 0; i < car.length; i++) {
            if (typeof(car[i].precio) == "number") {
                total += car[i].precio;
            } else {
                throw new Error("el precio del producto POR ALGÚN MOTIVO no es numérico");
            }
        };
        return total;
    } else {
        return 0;
    }
};

/*
function calcularTotal(car) {
    if (car.length > 0) {
        let total = 0;
        for (let i = 0; i < car.length; i++) {
            if (typeof(car[i].precio) == "number") {
                total += car[i].precio;
            } else {
                return "Error"
            }
        };
        return total;
    } else {
        return 0;
    }
};
*/

module.exports = {calcularTotal};