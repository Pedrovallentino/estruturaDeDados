class No {
    valor: number;
    esquerda: No | null;
    direita: No | null;

    constructor(valor: number) {
        this.valor = valor;
        this.esquerda = null;
        this.direita = null;
    }
}

export class ArvoreBinariaBusca {
    private raiz: No | null = null;

    inserir(valor: number): void {
        this.raiz = this.inserirRec(this.raiz, valor);
    }

    private inserirRec(no: No | null, valor: number): No {
        if (no === null) return new No(valor);

        if (valor < no.valor) {
            no.esquerda = this.inserirRec(no.esquerda, valor);
        } else if (valor > no.valor) {
            no.direita = this.inserirRec(no.direita, valor);
        }

        return no;
    }

    contem(valor: number): boolean {
        return this.buscarRec(this.raiz, valor);
    }

    private buscarRec(no: No | null, valor: number): boolean {
        if (no === null) return false;
        if (valor === no.valor) return true;
        return valor < no.valor
            ? this.buscarRec(no.esquerda, valor)
            : this.buscarRec(no.direita, valor);
    }

    emOrdem(): number[] {
        const resultado: number[] = [];
        this.emOrdemRec(this.raiz, resultado);
        return resultado;
    }

    private emOrdemRec(no: No | null, resultado: number[]) {
        if (no) {
            this.emOrdemRec(no.esquerda, resultado);
            resultado.push(no.valor);
            this.emOrdemRec(no.direita, resultado);
        }
    }

    preOrdem(): number[] {
        const resultado: number[] = [];
        this.preOrdemRec(this.raiz, resultado);
        return resultado;
    }

    private preOrdemRec(no: No | null, resultado: number[]) {
        if (no) {
            resultado.push(no.valor);
            this.preOrdemRec(no.esquerda, resultado);
            this.preOrdemRec(no.direita, resultado);
        }
    }

    posOrdem(): number[] {
        const resultado: number[] = [];
        this.posOrdemRec(this.raiz, resultado);
        return resultado;
    }

    private posOrdemRec(no: No | null, resultado: number[]) {
        if (no) {
            this.posOrdemRec(no.esquerda, resultado);
            this.posOrdemRec(no.direita, resultado);
            resultado.push(no.valor);
        }
    }

    emLargura(): number[] {
        const resultado: number[] = [];
        const fila: (No | null)[] = [];

        if (this.raiz) fila.push(this.raiz);

        while (fila.length > 0) {
            const atual = fila.shift();
            if (atual) {
                resultado.push(atual.valor);
                if (atual.esquerda) fila.push(atual.esquerda);
                if (atual.direita) fila.push(atual.direita);
            }
        }

        return resultado;
    }

    altura(): number {
        return this.alturaRec(this.raiz);
    }

    private alturaRec(no: No | null): number {
        if (!no) return -1;
        return 1 + Math.max(this.alturaRec(no.esquerda), this.alturaRec(no.direita));
    }

    quantidade(): number {
        return this.contarNos(this.raiz);
    }

    private contarNos(no: No | null): number {
        if (!no) return 0;
        return 1 + this.contarNos(no.esquerda) + this.contarNos(no.direita);
    }
}