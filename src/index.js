import ReactDOM from 'react-dom';
import Start from './Start';
import Deck from './Deck';

function App() {
    return (
        <>
        <Start />
        <Deck />
        </>
    );
}

const app = App();
const elemento = document.querySelector(".root");
ReactDOM.render(app, elemento);