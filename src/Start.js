import { useState } from "react";
import Deck from './Deck';

export default function Start() {
    const questionCards = [
        {
            question:"O que é JSX?",
            answer:"Uma extensão de linguagem do JavaScript"
        },
        {
            question:"O React é __",
            answer:"uma biblioteca JavaScript para construção de interfaces"
        },
        {
            question:"Componentes devem iniciar com __", 
            answer:"letra maiúscula"
        },
        {
            question:"Podemos colocar __ dentro do JSX", 
            answer:"expressões"
        },
        {
            question:"O ReactDOM nos ajuda __ ", 
            answer:"interagindo com a DOM para colocar componentes React na mesma"
        },
        {
            question:"Usamos o npm para __", 
            answer:"gerenciar os pacotes necessários e suas dependências"
        },
        {
            question:"Usamos props para __", 
            answer:"passar diferentes informações para componentes "
        },
        {
            question:"Usamos estado (state) para __", 
            answer:"dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"
        }
    ];

    function comparador() {
        return Math.random() - 0.5;
    }
    questionCards.sort(comparador)

    const [visible, setVisible] = useState(true);
    if(visible) {
        return (
            <div className="start">
                <img src="assets/logo.svg" alt="Logo"/>
                <h1>ZapRecall</h1>
                <button onClick={()=>setVisible(false)}>Iniciar Recall!</button>
            </div>
        )
    } else {
        return <Deck questionCards={questionCards}/>
    }
}