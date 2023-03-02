import React, { useEffect, useState } from 'react'
import PAQUETE_CARTAS from '../images/cards'

const Game = () => {
    //Inicialización del estado del juego
    //GameOver
    const [gameOver, setGameOver] = useState(true)
    //Ganador //Se pondrá Player1 - Player2. Depende de quien gane
    const [winner, setWinner] = useState('')
    // Turno
    const [turn, setTurn] = useState('')
    //Quien lanza el primero
    const [lastPoint, setlastPoint] = useState('')
    //Quien lanza el primero
    const [firtsToPlay, setfirtsToPlay] = useState('')
    //Quien lanza el último
    const [lastToPlay, setlastToPlay] = useState('')
    // Cartas del Player1
    const [player1Deck, setPlayer1Deck] = useState([])
    // Cartas del Player2
    const [player2Deck, setPlayer2Deck] = useState([])
    // Cartas del Player3
    const [player3Deck, setPlayer3Deck] = useState([])
    // Cartas del Player4
    const [player4Deck, setPlayer4Deck] = useState([])
    //Variable que almacena las cartas ganadas del equipo 1
    const [pointTeam1, setpointTeam1] = useState([])
    //Variable que almacena las cartas ganadas del equipo 2
    const [pointTeam2, setpointTeam2] = useState([])
    // Triunfo
    const [currentTriunfo, setCurrentTriunfo] = useState('')
    // Palo del triunfo
    const [currentTriunfoPalo, setCurrentPalo] = useState('')
    // Número del triunfo
    const [currentTriunfoNumber, setCurrentNumber] = useState('')
    //Variable que almacena las cartas que se han jugado
    const [playedCardsPile, setPlayedCardsPile] = useState([])
    //Cartas que no se han jugado
    const [drawCardPile, setDrawCardPile] = useState([])


    const CARDS = [
        'O01', 'O02', 'O03', 'O04', 'O05', 'O06', 'O07', 'O10', 'O11', 'O12', 
        'C01', 'C02', 'C03', 'C04', 'C05', 'C06', 'C07', 'C10', 'C11', 'C12',
        'E01', 'E02', 'E03', 'E04', 'E05', 'E06', 'E07', 'E10', 'E11', 'E12',
        'B01', 'B02', 'B03', 'B04', 'B05', 'B06', 'B07', 'B10', 'B11', 'B12'
    ]

    //Se ejecuta una vez al montar todo
    useEffect(() => {
        //shuffle PACK_OF_CARDS array
        const shuffledCards = shuffleArray(PAQUETE_CARTAS)

        //Extrae las primeras cartas de la baraja mezclada
        const player1Deck = shuffledCards.splice(0, 6) //6 cartas

        //Extrae las primeras cartas de la baraja mezclada
        const player2Deck = shuffledCards.splice(0, 6)
        
        //Extrae las primeras cartas de la baraja mezclada
        const player3Deck = shuffledCards.splice(0, 6)

        //Extrae las primeras cartas de la baraja mezclada
        const player4Deck = shuffledCards.splice(0, 6)

        //Extrae la carta de triunfo
        const currentTriunfo = shuffledCards.splice(0, 1)

        //store all remaining cards into drawCardPile
        const drawCardPile = shuffledCards

       //send initial state to server
       socket.emit('initGameState', {
        gameOver: false,
        turn: 'Player 2',
        firtsToPlay : 'Player 2',
        lastToPlay : 'Player 1',
        player1Deck: [...player1Deck],
        player2Deck: [...player2Deck],
        player3Deck: [...player3Deck],
        player4Deck: [...player4Deck],
        currentColor: currentTriunfo[0].charAt(1),
        currentNumber: parseInt(currentTriunfo[0].slice(-2)),
        playedCardsPile: [...playedCardsPile],
        drawCardPile: [...drawCardPile]
       })

    }, [])


    const onCardPlayedHandler = (played_card) => {
        //Comprobar turno
        //Comprobar en que ronda vas
        //Case 1: Normal
            //Permitir opción de cantar solo si el otro de su equipo o él (lastPoint) y si tiene Sota y Rey
            // Si es firstToPlay entonces
                // Lanzar la carta que él quiera
            //Si él es lastToPlay entonces 
                // Comprobar cartas en la mesa y decidir quien se las lleva: Depende de quien pointTeam1 o pointTeam2
                // Cambiar lastPoint, firtsToPlay, lastToPlay, turno=firtToPLay
                // Todos cogen nueva carta (Comprobar si quedan más cartas, si no quedan Arrastre)
                // Permitir cambiar triunfo si tiene un 7 del mismo palo
            //Si no
                // Cambiar turno al siguiente
                // Permitir cambiar triunfo si tiene un 7 del mismo palo
            //end si
        //Case 2: Arrastre
            // Si es firstToPlay entonces
                // Lanzar la carta que él quiera
                // Cambiar turno al siguiente
                // Permitir cambiar triunfo si tiene un 7 del mismo palo
            //Si él es lastToPlay entonces 
                // Comprobar cartas en la mesa y decidir quien se las lleva: Depende de quien pointTeam1 o pointTeam2
                // Cambiar lastPoint, firtsToPlay, lastToPlay, turno=firtToPLay
                // Todos cogen nueva carta por orden 
                // 
                // Permitir cambiar triunfo si tiene un 7 del mismo palo
            //Si no
                // Lanzar el mismo palo que ha lanzado firstToPlay
                // Si no tiene ese palo lanzar mismo palo que triunfo
                // Si no tiene lanzar lo que pueda
                // IMPORTANTE: SIEMPRE LANZAR CARTA QUE SUPERE LA QUE HAYA (SI SE PUEDE), EXCEPTO SI 
                // Cambiar turno al siguiente
                // Permitir cambiar triunfo si tiene un 7 del mismo palo
            //end si
    }

    return (
        <div>

        </div>
    )
}

export default Game