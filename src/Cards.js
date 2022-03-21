import Card from "./Card"

export default function Cards(props) { 
    const {completed, setCompleted, iconList, setIconList, setWrongAnswer} = props;

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