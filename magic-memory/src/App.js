import { useEffect, useState } from 'react'
import './app.css'
import { SingleCard } from './components/SingleCard';

const cardImages = [
  { src: "./images/biden.jpg" },
  { src: "./images/salman.jpg" },
  { src: "./images/imran.jpg" },
  { src: "./images/putin.jpg" },
  { src: "./images/xi.jpg" },
  { src: "./images/erdogan.jpg" }
]

function App() {

  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null)
  const [choiceTwo, setChoiceTwo] = useState(null)

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      if (choiceOne.src === choiceTwo.src) {
        setCards(prevCards => {
          return prevCards.map(card => {
            if (card.src === choiceOne.src) {
              return { ...card, matched: true }
            } else {
              return card;
            }
          })
        })
        resetChoices();
      } else {
        setTimeout(() => {
          resetChoices();
        }, 1000);
      }
    }
  }, [choiceOne, choiceTwo])

  function shuffledCards() {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random(), matched: false }))

    setCards(shuffledCards);
    setTurns(0);
  }

  function handleChoice(card) {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
  }

  function resetChoices() {
    setTurns(prev => prev + 1);
    setChoiceOne(null);
    setChoiceTwo(null);
  }

  return (
    <>
      <div className="container">
        <h1 className="title">Memory Game</h1>
        <button onClick={shuffledCards}>Play Again</button>
        <h4>Turns: {turns}</h4>

        <div className="cardsSection">
          {
            cards.map(card => {
              return (
                <SingleCard
                  key={card.id}
                  card={card}
                  handleChoice={handleChoice}
                  flipped={card === choiceOne || card === choiceTwo || card.matched}
                />
              );
            })
          }
        </div>
      </div>
    </>
  );
}

export default App;
