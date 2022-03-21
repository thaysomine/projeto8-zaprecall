import Cards from "./Cards";
import Footer from "./Footer";
import Header from "./Header";
import { useState } from "react";

export default function Deck() {
    const [completed, setCompleted] = useState(0);
    return (
        <> 
            <Header />
            <Cards
                completed={completed}
                setCompleted={setCompleted}
            />
            <Footer
                completed={completed} 
            />
        </>
    )
}