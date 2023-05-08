import { useState } from 'react'
import './app.css'

const cardImages = [
  { src: "./images/biden.jpg" },
  { src: "./images/salman.jpg" },
  { src: "./images/imran.jpg" },
  { src: "./images/putin.jpg" },
  { src: "./images/xi.jpg" },
  { src: "./images/macron.jpg" },
  { src: "./images/charles.jpg" },
  { src: "./images/erdogan.jpg" }
]

function App() {

  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);

  function shuffledCards() {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }))

    setCards(shuffledCards);
    setTurns(0);
  }

  return (
    <>
      <div className="container">
        <h1 className="title">Memory Game</h1>
        <button onClick={shuffledCards}>Play Again</button>

        <div className="cardsSection">
          {
            cards.map(card => {
              return (
                <div key={card.id} className="card">
                  <img className="front" src={card.src} alt="" />
                  <img className="back" src="./images/backSide.png" alt="" />
                </div>
              );
            })
          }


        </div>
      </div>
    </>
  );
}

export default App;
