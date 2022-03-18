//import { useState } from "react";

export default function Deck() {
    return (
        <> 
            <header>
                <img src="assets/logo.png" alt="logo"/>
                <p>ZapRecall</p>
            </header>
            <main className="deck">
                <div className="question">
                    <p>Pergunta 1</p>
                    <img src="assets/seta.svg" alt="seta"/>
                </div>
                <div className="question">
                    <p>Pergunta 1</p>
                    <img src="assets/seta.svg" alt="seta"/>
                </div>
                <div className="question">
                    <p>Pergunta 1</p>
                    <img src="assets/seta.svg" alt="seta"/>
                </div>
                <div className="question">
                    <p>Pergunta 1</p>
                    <img src="assets/seta.svg" alt="seta"/>
                </div>
            </main>
            <footer>
                <p>0/4 CONCLUÍDOS</p>
            </footer>
        </>
    )
}