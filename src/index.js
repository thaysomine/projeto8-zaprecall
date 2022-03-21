import ReactDOM from 'react-dom';
import Start from './Start';


function App() {
    return (
        <>
        <Start />
        </>
    );
}

const app = App();
const elemento = document.querySelector(".root");
ReactDOM.render(app, elemento);