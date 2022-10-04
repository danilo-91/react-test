import logo from './logo.svg';
import './App.css';

function Header() {
  return (
    <header>
      <nav>
        <img src={logo} width="400px" />
      </nav>
    </header>
  );
}

function Title() {
  return (
    <h1>
      Reasons for studying React
    </h1>
  );
}

function OrderedList() {
  return (
    <div>
      <ul>
        <li>Some <b>reason</b> to study React</li>
        <li>Some <b>reason</b> to study React</li>
        <li>Some <b>reason</b> to study React</li>
        <li>Some <b>reason</b> to study React</li>
      </ul>
    </div>
  )
}

function Footer() {
return (
  <footer>
    <small>&copy; 2022 Danilo Development. Todos los rights reserved.</small>
  </footer>
)
}

function App() {
  return (
    <div>
      <Header />
      <Title />
	<OrderedList />
	<Footer />
      </div>

  );
}

export default App; //wtf default means
