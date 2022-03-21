export default function Footer(props) {
    const {completed, iconList, wrongAnswer} = props
    if (completed < 8) {
        return (
            <footer>
                <p>{completed}/8 CONCLUÍDOS</p>
                <div className="icon-list">
                    {iconList.map(icon => icon)}
                </div>
            </footer>
        )
    } else if (wrongAnswer === true) {
        return (
            <footer className="completed">
                <div className="result">
                    <img src="assets/sad.svg" alt="sad"/>
                    <h1>PUTZ!</h1>
                </div>
                <p>Ainda faltaram alguns... <br></br>
                Mas não desanime!</p>
                <div className="icon-list">
                    {iconList.map(icon => icon)}
                </div>
            </footer>
        )
    }  else {
        return (
            <footer className="completed">
                <div className="result">
                    <img src="assets/party.svg" alt="party"/>
                    <h1>PARABÉNS!</h1>
                </div>
                <p>Você não esqueceu de<br></br>
                nenhum flashcard!</p>
                <div className="icon-list">
                    {iconList.map(icon => icon)}
                </div>
            </footer>
        )
    }
}
