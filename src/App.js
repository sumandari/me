import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="./qrcode.png" className="App-logo" alt="logo" />
        <span className='App-header-text'><span className="App-halo">Hej!</span><img src="coffee.png" className='App-header-img' /></span>
      </header>
      <footer className='App-footer'>
        <small className='App-footer-text'>
          This site is under development. Visit <a href="https://sumandari.github.com">older version</a>. <br />
          Icon by <a href="https://freeicons.io/profile/722"> Fasil </a> on <a href="https://freeicons.io"> freeicons.io </a>
        </small>
      </footer>
    </div>
  );
}

export default App;
