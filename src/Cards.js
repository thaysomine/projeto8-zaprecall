import Card from "./Card"

export default function Cards(props) { 
    const {questionCards, completed, setCompleted, iconList, setIconList, setWrongAnswer} = props;
    const css = completed === 8 ? "card ajust-padding" : "card"
    return (
        <div className={css}>
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