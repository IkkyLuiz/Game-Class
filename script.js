class heroi {
    constructor(nome, idade, tipoHeroi) {
        this.nome = nome
        this.idade = idade
        this.tipoHeroi = tipoHeroi
    }

    atacar() {
        console.log(`Dados do Heroi - Nome ${this.nome} - Idade ${this.idade} - Categoria - ${this.tipoHeroi}`)

        if (this.tipoHeroi === "mago") {
            console.log(`O ${this.tipoHeroi} atacou usando Magia`)
        }

        else if (this.tipoHeroi === "versátil") {
            console.log(`O ${this.tipoHeroi} atacou usando ataque especial`)
        }

        else if (this.tipoHeroi === "suporte") {
            console.log(`O ${this.tipoHeroi} atacou usando ultimate`)
        }

        else if (this.tipoHeroi === "atacante") {
            console.log(`O ${this.tipoHeroi} atacou usando Surf`)
        }
    }

}

let heroi1 = new heroi("Hoopa", 52, "suporte")
let heroi2 = new heroi("Charizard", 30, "versátil")
let heroi3 = new heroi("Mime", 100, "suporte")
let heroi4 = new heroi("Greninja", 50, "atacante")

heroi1.atacar()
heroi2.atacar()
heroi3.atacar()
heroi4.atacar()

