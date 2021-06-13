 export class Suma {
    private num1: number;
    private num2: number;

    constructor (valor1: number, valor2: number){
        this.num1=valor1;
        this.num2=valor2;
    }

    resultado(): number {
        return this.num1 + this.num2;
    }
} 

