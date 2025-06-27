class Deque{
    private lista: number[]; 

    constructor(){
        this.lista = []; 
    }

    adicionarNoInicio(elemento: number): void{
        this.lista.unshift(elemento); 
    }

    removerDoInicio(): void{
        if(this.lista.length <= 0){
            console.log("Error! Array is empty...");
        }
        this.lista.shift(); 
    }

    adicionarNoFinal(elemento: number): void{
        this.lista.push(elemento); 
    }

    removerDoFinal(): void{
        if(this.lista.length <=0){
            console.log("Error! Array is empty...");
        }
        this.lista.pop(); 
    }

    pegarPrimeiroElemento(): number{
        return this.lista[0]; 
    }

    pegarUltimoElemento(): number{
        return this.lista[this.lista.length - 1]; 
    }

    verificarTamanho(): number{
        return this.lista.length; 
    }

    estaVazia(): boolean{
        return this.lista.length === 0; 
    }

    verLista(): void{
        console.log(this.lista); 
    }
}

const deque = new Deque(); 

deque.adicionarNoInicio(2); 
deque.adicionarNoInicio(5); 
deque.adicionarNoInicio(12); 
deque.adicionarNoFinal(4); 
deque.estaVazia(); 
deque.verificarTamanho(); 




deque.verLista(); 