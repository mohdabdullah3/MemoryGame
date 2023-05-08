import './app.css'

function App() {
  return (
    <>
      <div className="container">
        <h1 className="title">Memory Game</h1>
        <button>Play Again</button>
        
        <div className="cardsSection">
          <div className="card">
            <img className="front" src="./images/biden.jpg" alt="" />
            <img className="back" src="./images/backSide.png" alt="" />
          </div>
          <div className="card">
            <img className="front" src="./images/salman.jpg" alt="" />
          </div>
          <div className="card">
            <img className="front" src="./images/imran.jpg" alt="" />
          </div>
          <div className="card">
            <img className="front" src="./images/putin.jpg" alt="" />
          </div>
          <div className="card">
            <img className="front" src="./images/xi.jpg" alt="" />
          </div>
          <div className="card">
            <img className="front" src="./images/charles.jpg" alt="" />
          </div>
          <div className="card">
            <img className="front" src="./images/erdogan.jpg" alt="" />
          </div>
          <div className="card">
            <img className="front" src="./images/macron.jpg" alt="" />
          </div>
          <div className="card">
            <img className="front" src="./images/biden.jpg" alt="" />
          </div>
          <div className="card">
            <img className="front" src="./images/biden.jpg" alt="" />
          </div>
          <div className="card">
            <img className="front" src="./images/biden.jpg" alt="" />
          </div>
          <div className="card">
            <img className="front" src="./images/biden.jpg" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
