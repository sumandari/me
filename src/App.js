import coffee from './coffee.png';
import qrcode from './qrcode.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a href="https://github.com/sumandari"><img src={qrcode} className="App-logo" alt="logo" /></a>
        <span className='App-header-text'><span className="App-halo">Hej!</span><img src={coffee} className='App-header-img' alt="coffee"/></span>
      </header>
      <footer className='App-footer'>
        <small className='App-footer-text'>
          This site is under development. Visit <a href="https://sumandari.github.io">older version</a>. <br />
          Built with ReactJs. Icon by <a href="https://freeicons.io/profile/722"> Fasil </a> on <a href="https://freeicons.io"> freeicons.io </a>
        </small>
      </footer>
    </div>
  );
}

export default App;
