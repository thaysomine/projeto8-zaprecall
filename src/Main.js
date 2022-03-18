export default function Main() {
    return (
        <main className="deck">
            <Cards />
        </main>
    )
}

function Cards() {
    const questionCards = [
        <Card  num="1" question="O que é JSX?" answer="Uma extensão de linguagem do JavaScript"/>,
        <Card  num="2" question="O React é __" answer="uma biblioteca JavaScript para construção de interfaces"/>,
        <Card  num="3" question="Componentes devem iniciar com __" answer="letra maiúscula"/>,
        <Card  num="4" question="Podemos colocar __ dentro do JSX" answer="expressões"/>,
        <Card  num="5" question="O ReactDOM nos ajuda __ " answer="interagindo com a DOM para colocar componentes React na mesma"/>,
        <Card  num="6" question="Usamos o npm para __" answer="gerenciar os pacotes necessários e suas dependências"/>,
        <Card  num="7" question="Usamos props para __" answer="passar diferentes informações para componentes "/>,
        <Card  num="8" question="Usamos estado (state) para __" answer="dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"/>
    ]
    return (
        <div className="card">
            {questionCards.map(card => card)}
        </div>
    )
}

function Card(props) {
    return (
        <div className="question">
            <p>Pergunta {props.num}</p>
            <img src="assets/seta.svg" alt="seta"/>
        </div>
    )
}

//                <div className="card">
//                    <div className="question">
//                        <p>Pergunta 1</p>
//                        <img src="assets/seta.svg" alt="seta"/>
//                    </div>
//                </div>
//
//                <div className="card">
//                    <div className="question-description">
//                        <p>Oque é JSX?</p>
//                        <img src="assets/setinha.png" alt="setinha"/>
//                    </div>
//                </div>
//
//                <div className="card">
//                    <div className="answer">
//                        <p>JSX é uma sintaxe para escrever HTML dentro do JS</p>
//                       <div className="response">
//                            <div className="red">Não lembrei</div>
//                            <div className="yellow">Quase não lembrei</div>
//                            <div className="green">Zap!</div>
//                        </div>
//                   </div>
//                </div>
