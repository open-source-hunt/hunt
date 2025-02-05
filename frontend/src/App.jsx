import { Router, Route } from "@solidjs/router";

import WelcomePage from "./routes/welcome";

import logo from '../assets/logo.svg';
import styles from './App.module.scss';

function App() {
  return (
    <div class={styles.App}>
      <p><a href="/">Home</a></p>
      <p><a href="/welcome">Welcome</a></p>

      <header class={styles.header}>
        <img src={logo} class={styles.logo} alt="logo" />
        <p>
          Edit <code>src/App.jsx</code> and save to reload.
        </p>
        <a
          class={styles.link}
          href="https://github.com/solidjs/solid"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Solid
        </a>
      </header>
      <Router>
          <Route path="/" component={() => <h1>Home</h1>} />
          <Route path="/welcome" component={WelcomePage} />
      </Router>
    </div>
  );
}

export default App;
