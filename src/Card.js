import { useState } from "react";

export default function Card(props) {
    const {num, question, answer, completed, setCompleted, iconList, setIconList} = props
    const [cardState, setCardState] = useState("question");
    if (cardState === "question") {
        return (
            <div className="question" onClick={()=>setCardState("description")}>
                <p>Pergunta {num}</p>
                <img src="assets/seta.svg" alt="seta"/>
            </div>
        )
    } else if (cardState === "description") {
        return (
            <div className="question-description" onClick={()=>setCardState("question")}>
                <p>{question}</p>
                <img src="assets/setinha.png" alt="setinha" onClick={(card) => {
                        card.stopPropagation()
                        setCardState("answer")
                    }}/>
            </div>
        )     
    } else if (cardState === "answer") {
        return (
            <div className="answer">
                <p>{answer}</p>
                <div className="response">
                    <div className="red" onClick={() => {
                        setCompleted(completed+1)
                        setIconList([...iconList, <img src="assets/red.png" alt="red"/>])                        
                        setCardState("red")
                    }}>
                        Não lembrei
                    </div>
                    <div className="yellow" onClick={() => {
                        setIconList([...iconList, <img src="assets/yellow.png" alt="yellow"/>])
                        setCompleted(completed+1)
                        setCardState("yellow")
                    }}>
                        Quase não lembrei
                    </div>
                    <div className="green" onClick={() => {
                        setIconList([...iconList, <img src="assets/green.png" alt="green"/>])
                        setCompleted(completed+1)
                        setCardState("green")
                    }}>
                            Zap!
                    </div>
                </div>
            </div>            
        )
    } else if (cardState === "red") {
        return (
            <div className="question">
                <p className="text-red">Pergunta {num}</p>
                <img src="assets/red.png" alt="red"/>
            </div>            
        )
    } else if (cardState === "yellow") {
        return (
            <div className="question">
                <p className="text-yellow">Pergunta {num}</p>
                <img src="assets/yellow.png" alt="yellow"/>
            </div>            
        )
    } else if (cardState === "green") {
        return (
            <div className="question">
                <p className="text-green">Pergunta {num}</p>
                <img src="assets/green.png" alt="green"/>
            </div>            
        )
    }
}