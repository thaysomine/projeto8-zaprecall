import Card from "./Card"

export default function Cards(props) { 
    const {questionCards, completed, setCompleted, iconList, setIconList, setWrongAnswer} = props;
    
    return (
        <div className="card">
            {questionCards.map((card, i) => {
                return (
                    <Card  
                        key={i}
                        num={i+1} 
                        question={card.question}
                        answer={card.answer}
                        completed={completed}
                        setCompleted={setCompleted}
                        iconList={iconList}
                        setIconList={setIconList}
                        setWrongAnswer={setWrongAnswer}
                    />
                )
            })}
        </div>
    )
}