function act3(word) {
    if (typeof word == "string" || typeof word == "number") {
        let palabra = word.toString().trim()
        if (/^[a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ\s]+$/.test(palabra)) {
            palabra = palabra.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, "").toLowerCase();
            if (palabra.length !== 0) {
                if (/^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]+$/.test(palabra) || /^[0-9]+$/.test(palabra)) {
                    let invertida = palabra.split("").reverse().join("");
                    return palabra === invertida
                } else {
                    return false
                }
            } else {
                return false
            }
        } else {
            return false
        }
    } else {
        return false
    }
}

module.exports = {act3};

//replace
//split
//join
//reverse