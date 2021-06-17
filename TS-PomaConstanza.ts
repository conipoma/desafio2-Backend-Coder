const operacion = async(operation: string, num1: number, num2: number) => {
    let result: number = 0;
    if (operation === "suma") {
        let resultSuma: number;
        await import('./suma.js')
            .then(data => {
                console.log(data)
                resultSuma = new data.Suma(num1, num2).resultado();
                // console.log(`el resultado de la suma es ${resultSuma}`)
                return result = resultSuma;
        }) 
            .catch(e => e)

    } 
    
    if (operation === "resta"){
        let resultResta: number;
        await import('./resta.js')
            .then(data => {
                resultResta = new data.Resta(num1, num2).resultado();
                // console.log(`el resultado de la resta es ${resultResta}`)
                return result = resultResta;
        }) 
            .catch(e => e)
    }
    
    return result;
}


const op = [
    { "num1": 2, "num2": 3, "operation": "suma" },
    { "num1": 9, "num2": 5, "operation": "resta" },
    { "num1": 5, "num2": 11, "operation": "suma" }
];

 const operaciones = (operations: { num1: number; num2: number; operation: string; }[]) => {
    operations.forEach(element => {
        operacion(element.operation, element.num1, element.num2);
   });
}

operaciones(op);