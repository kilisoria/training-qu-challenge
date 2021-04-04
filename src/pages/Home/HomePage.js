import {
  Link,
} from "react-router-dom";
import logo from '../../assets/logo.png'
import '../../App.css';

const HomePage = () => {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Web Developer Challenge
                </p>   
             <Link className="App-link" to="/planets">Go</Link>
            </header>
        </div>
    )
};

export default HomePage;