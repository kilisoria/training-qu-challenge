import logo from '../../assets/logo.png';
import '../../App.css';

const HomePage = () => {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Web Developer Challenge
        </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Intro
        </a>
            </header>
        </div>
    )
};

export default HomePage;