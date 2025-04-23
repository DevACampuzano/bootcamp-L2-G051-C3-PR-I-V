/*// tipos de variables (number, bool, string) let, const
let nombre  = "Juan";
let edad = 30;
let esMayorDeEdad = true; 

console.log(nombre);
console.log(edad);
console.log(esMayorDeEdad);

console.log("___________________"); // string
nombre = "Pedro";

console.log(typeof nombre);
console.log(typeof edad);
console.log(typeof esMayorDeEdad);

const user = {
    nombre, 
    edad,
    esMayorDeEdad,
}

console.log(user);
console.log(typeof user);
const listNumer = [1, 2, 3, 4, 5];

console.log(listNumer);
console.log( typeof listNumer);

// funciones
const suma =  (numero1, numero2)=>{
    const resultado = numero1 + numero2;
    return resultado;
}

const rest =  suma(e// tipos de variables (number, bool, string) let, const
    let nombre  = "Juan";
    let edad = 30;
    let esMayorDeEdad = true; 
    
    console.log(nombre);
    console.log(edad);
    console.log(esMayorDeEdad);
    
    console.log("___________________"); // string
    nombre = "Pedro";
    
    console.log(typeof nombre);
    console.log(typeof edad);
    console.log(typeof esMayorDeEdad);
    
    const user = {
        nombre, 
        edad,
        esMayorDeEdad,
    }
    
    console.log(user);
    console.log(typeof user);
    const listNumer = [1, 2, 3, 4, 5];
    
    console.log(listNumer);
    console.log( typeof listNumer);
    
    // funciones
    const suma =  (numero1, numero2)=>{
        const resultado = numero1 + numero2;
        return resultado;
    }
    
    const rest =  suma(edad, 5)
    
    console.log("Respuesta de la suma: ",rest);
    
    a suma: ",rest);

*/

const formulario = document.getElementById("formulario")

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    const op = document.getElementById("operacion").value
    const numero1 = parseInt(document.getElementById("numero-1").value)
    const numero2 = parseInt(document.getElementById("numero-2").value)

    try {
        const resultado = Operaciones(op, numero1, numero2)
        const p = document.getElementById("resultado")

        p.innerHTML = "El resultado de la operacion es: " + resultado
    } catch (error) {
        alert(error.message)
    } finally {
        document.getElementById("operacion").value = "+";
        document.getElementById("numero-1").value = "0"
        document.getElementById("numero-2").value = "0"
    }

})

const Operaciones = (op = "+", numero1, numero2) => {
    switch (op) {
        case "+":
            return numero1 + numero2
        case "-":
            return numero1 - numero2
        case "*":
            return numero1 * numero2
        case "/":
            if (numero2 === 0) {
                throw new Error("El numero 2 no puede ser un 0")
            }
            const respuesta = numero1 / numero2
            return respuesta;
    }
}