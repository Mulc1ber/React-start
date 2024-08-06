import logo from './logo.svg';
import './App.css';

// Начало Императивного стиля
const currentDate = new Date().getFullYear();
// Конец Императивного стиля

// Начало Декларативного стиля
export const App = () => {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    This is{' '}
                    <b>
                        <u>Declarative style</u>
                    </b>
                    . In file <code>src/App.js</code> component App.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
                <p>{currentDate} год</p>
            </header>
        </div>
    );
};
// Конец Декларативного стиля
