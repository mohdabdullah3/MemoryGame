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
        console.log("Choices matched!")
        resetChoices();
      }else{
        console.log("Choices didnt matched!")
        resetChoices();
      }
    }
  }, [choiceOne,choiceTwo])
  

  function shuffledCards() {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }))

    setCards(shuffledCards);
    setTurns(0);
  }

  function handleChoice(card) {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
  }

  function resetChoices() {
    setTurns(0);
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
                <SingleCard key={card.id} card={card} handleChoice={handleChoice} />
              );
            })
          }


        </div>
      </div>
    </>
  );
}

export default App;
