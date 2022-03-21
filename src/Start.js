import { useState } from "react";

export default function Start() {
    const [visible, setVisible] = useState(true);
    if(visible) {
        return (
            <div className="start">
                <img src="assets/logo.png" alt="Logo"/>
                <h1>ZapRecall</h1>
                <button onClick={()=>setVisible(false)}>Iniciar Recall!</button>
            </div>
        )
    } else {
        return </>
    }
}