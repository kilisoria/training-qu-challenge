import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';
import configureStore, { history } from './store/configureStore';

import HomePage from './pages/Home/HomePage';
import ErrorPage from './pages/Error/ErrorPage';

const store = configureStore();

function App() {
  return (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <>
        <Switch>
          <Route exact path="/" render={() => <HomePage/>} />
          <Route render={() => <ErrorPage />} />
        </Switch>
      </>
    </ConnectedRouter>
  </Provider>
  );
}

export default App;

/*


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

*/