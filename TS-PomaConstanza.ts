const operacion = async(operation: string, num1: number, num2: number) => {
    let result: number;
    if (operation === "suma") {
        await import('./suma.js').then(resolve => {
            let suma = new resolve.Suma(num1, num2)
            result = suma.resultado()
            console.log(result)
        
        }, reject => console.log("error"))
        console.log(operation)
    } else {
        await import('./resta.js').then(resolve => {
            let resta = new resolve.Resta(num1, num2)
            result = resta.resultado()
            console.log(result)
        
        }, reject => console.log("error"))
        console.log(operation)
    }
    
}


const op = [
    {
        "num1": 2,
        "num2": 3,
        "operation": "suma"
    },
    {
        "num1": 9,
        "num2": 5,
        "operation": "resta"
    },{
        "num1": 5,
        "num2": 11,
        "operation": "suma"
    }
]


 const operaciones = (operations: { num1: number; num2: number; operation: string; }[]) => {
    operations.forEach(element => {
        operacion(element.operation, element.num1, element.num2);
   });
}

operaciones(op);