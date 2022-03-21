import Cards from "./Cards";
import Footer from "./Footer";
import Header from "./Header";
import { useState } from "react";

export default function Deck(props) {
    const {questionCards} = props;
    const [completed, setCompleted] = useState(0);
    const [iconList, setIconList] = useState([]);
    const [wrongAnswer, setWrongAnswer] = useState(false);
    return (
        <> 
            <Header />
            <Cards
                questionCards={questionCards}
                completed={completed}
                setCompleted={setCompleted}
                iconList={iconList}
                setIconList={setIconList}
                setWrongAnswer={setWrongAnswer}
            />
            <Footer
                completed={completed}
                iconList={iconList}
                wrongAnswer={wrongAnswer}
            />
        </>
    )
}