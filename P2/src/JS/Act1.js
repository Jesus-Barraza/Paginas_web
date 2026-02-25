// Detect environment (Node vs browser)
const _isNode = (typeof window === 'undefined') && (typeof process !== 'undefined') && (process.versions != null && process.versions.node != null);

class Calculadora {
    #n1;
    #n2;

    constructor (num1, num2) {
        if ((typeof num1 !== "number") || (typeof num2 !== "number")) {
            console.error("Los números deben de ser solo numéricos decimales. ");
        }
        this.#n1 = num1;
        this.#n2 = num2;
    }

    get n1() {
        return this.#n1
    }

    set n1(num1) {
        if (typeof num1 !== "number") {
            console.error("El número debe de ser solo número decimal");
            return;
        }
        this.#n1 = num1;
    }

    get n2() {
        return this.#n2
    }

    set n2(num2) {
        if (typeof num2 !== "number") {
            console.error("El número debe de ser solo número decimal");
            return;
        }
        this.#n2 = num2;
    }

    sumar() {
        if ((typeof this.#n1 !== "number") || (typeof this.#n2 !== "number")) {
            return false
        } else {
            return this.#n1 + this.#n2;
        }
    }

    restar() {
        if ((typeof this.#n1 !== "number") || (typeof this.#n2 !== "number")) {
            return false
        } else {
            return this.#n1 - this.#n2;
        }
    }

    multiplicar() {
        if ((typeof this.#n1 !== "number") || (typeof this.#n2 !== "number")) {
            return false
        } else {
            return this.#n1 * this.#n2;
        }
    }

    dividir() {
        if (this.#n2 === 0) {
            console.error("El resultado trasciende hasta el infinito (no se puede dividir entre 0)");
            return false
        } else if ((typeof this.#n1 == "number") || (typeof this.#n2 == "number")) {
            return this.#n1 / this.#n2;
        } else {
            return false
        }
    }
}

/*
// Node-only CLI behaviour (run only when executed directly with Node)
if (_isNode && typeof require !== 'undefined' && require.main === module) {
    let num1 = 6, num2 = 8;
    let calc = new Calculadora(num1, num2);
    let opc = 1;

    let init = true;
    while (init) {
        //num1=0;
        //num2=0
        let resultado = 0;

        //num1 = prompt("Inserta el primer número: ");
        //num2 = prompt("Inserta el Segundo número: ");
        //calc.n1 = num1;
        //calc.n2 = num2;
        //let opc = prompt("Inserta una opción \n (1) Sumar \n (2) Restar \n (3) Multiplicar \n (4) Dividir \n (5) Salir \n (1-5): ");

        if (opc === 1) {
            resultado = calc.sumar();
            opc = opc + 1;
            console.log("El resultado es:", resultado)
        } else if (opc === 2) {
            resultado = calc.restar();
            opc++;
            console.log("El resultado es:", resultado)
        } else if (opc === 3) {
            resultado = calc.multiplicar();
            opc++;
            console.log("El resultado es:", resultado)
        } else if (opc === 4) {
            resultado = calc.dividir();
            opc++;
            console.log("El resultado es:", resultado)
        } else if (opc === 5) {
            console.log("Termina la ejecución del sistema")
            init = false;
        } else {
            console.error("Opción no válida, inténtelo de nuevo");
        }
    }
}

// Export for Node (CommonJS) and expose to browser global
if (typeof module !== 'undefined' && module.exports) {
    module.exports = Calculadora;
}
if (typeof window !== 'undefined') {
    window.Calculadora = Calculadora;
} 
*/ 
// Export for Node (CommonJS) and expose to browser global
if (typeof module !== 'undefined' && module.exports) {
    module.exports = Calculadora;
}
