console.log("Hola mundo");

const sumar = (a:number,b:number)=>{
    return a+b;
}

const resultadoSuma = sumar(10,20);
console.log(resultadoSuma);

interface IPersona {
    name:string
    lastname:string
}

const saludarPersona = (persona:IPersona)=>{
    console.log(`Hola ${persona.name} ${persona.lastname}`)
}

saludarPersona({name: "Juan", lastname: "Pérez"});