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

    escolherOndeInserir(numero: number, posicao: number): number[]{
        if(posicao >= 0 && posicao < this.elementos.length){
            this.elementos.splice(posicao, 0, numero); 
        }
        return this.elementos; 
    }

    removerDoinicio(){
        this.elementos.shift(); 
    }

    removerDoFinal(){
        this.elementos.pop(); 
    }

    escolherOndeRemover(posicao: number): number[]{
        if(posicao >= 0 && posicao < this.elementos.length){
            this.elementos.splice(posicao, 1); 
        }
        return this.elementos; 
    }

    exibirLista(){
        for(let i=0; i<this.elementos.length; i++){
            console.log(this.elementos[i]); 
        }
    }

    exibirListaInvertida(){
        let listaInvertida = this.elementos.reverse(); 
        console.log("Lista invertida: " + listaInvertida); 
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
a.inserirNoInicio(7); 
a.inserirNoFinal(14); 

a.exibirLista(); 

a.escolherOndeInserir(999, 0); 
a.escolherOndeInserir(1849, 3); 
a.escolherOndeInserir(2014, 6); 

a.exibirLista(); 