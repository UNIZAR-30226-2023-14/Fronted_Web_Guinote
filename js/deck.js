const PALOS = ["Bastos", "Espadas", "Copas", "Oros"]
const VALORES = ["1", "2", "3", "4", "5", "6", "7", "10", "11", "12"]

export default class Deck{
    //Pone todas las cartas "sobre la mesa"
    constructor(cards = mesaNueva()) {
        this.cards = cards
    }

    get numberOfCards(){
        return this.cards.length
    }

    shuffle(){
        // Se podría utilizar otra manera de que sean al azar, pero esa otra
        // sigue siendo predecible en algunos casos tienden a repetirse números
        for (let i = this.numberOfCards - 1; i > 0; i--){
            const indiceNuevo = Math.floor(Math.random() * (i + 1))
            const valorAntiguo = this.cards[indiceNuevo]
            this.cards[indiceNuevo] = this.cards[i]
            this.cards[i] = valorAntiguo
        }
    }
}

class Card{
    constructor(palo, valor){
        this.palo = palo
        this.valor = valor
    }
}

//Crear una nueva mesa
function mesaNueva(){
    return PALOS.flatMap(palo => {
        return VALORES.map(valor => {
            return new Card(palo, valor)
        })
    })
}