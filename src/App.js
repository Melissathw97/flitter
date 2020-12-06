import logo from './logo.svg';
import './App.css';
import { ApolloProvider } from '@apollo/client';
import graphqlClient from '../lib/graphqlClient';

function App() {
  return (
    <ApolloProvider client={graphqlClient}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
        </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
        </a>
        </header>
      </div>
    </ApolloProvider>
  );
}

export default App;
