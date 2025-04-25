console.log("Hola mundo");

const suma = (a,b)=>{
    return a+b;
}

const resultado = suma(10, 20);
console.log(resultado);

const SaludarPersona = (persona)=>{

    console.log(`hola ${persona.name} ${persona.lastname}`);
}

SaludarPersona({name: "Juan", lastname: "Pérez", age: 30});