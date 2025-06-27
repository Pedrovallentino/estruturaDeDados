class Lista2xEncadeada{

    private elementos: number[]; 

    constructor(){
        this.elementos = []; 
    }

    inserirNoInicio(numero: number){
        this.elementos.unshift(numero); 
    }

    inserirNoFinal(numero: number){
        this.elementos.push(numero); 
    }

    escolherOndeInserir(numero: number, posicao: number){}

    removerDoinicio(){
        this.elementos.shift(); 
    }

    removerDoFinal(){
        this.elementos.pop(); 
    }

    escolherOndeRemover(numero: number, posicao: number){}

    exibirLista(){
        for(let i=0; i<this.elementos.length; i++){
            console.log(this.elementos[i]); 
        }
    }

    exibirListaInvertida(){

    }

    estaVazia(){
        if(this.elementos.length == 0){
            console.log("Está vazia")
        }
        console.log("Não está vazia"); 
    }

    esvaziarLista(){
        this.elementos.splice(0, this.elementos.length); 
    }

    exibirTamanhoLista(){
        console.log("Tamanho: " + this.elementos.length); 
    }
}

const a = new Lista2xEncadeada(); 

a.inserirNoInicio(1); 
a.inserirNoInicio(4);
a.inserirNoFinal(10); 

a.estaVazia(); 
a.exibirTamanhoLista(); 
a.exibirLista(); 
  