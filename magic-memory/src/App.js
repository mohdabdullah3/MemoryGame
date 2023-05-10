import { useEffect, useState } from 'react'
import './app.css'
import { SingleCard } from './components/SingleCard';
import { Modal } from './components/Modal';

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
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [count, setCount] = useState(0);
  const [disabled, setDisabled] = useState(false);
  const [modalShow, setModalShow] = useState(false);

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true)
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
        setCount(prev => prev+1)
        resetChoices();
      } else {
        setTimeout(() => {
          resetChoices();
        }, 1000);
      }
    }
    if (count === 6) {
      setModalShow(true)
    }
  }, [choiceOne, choiceTwo])
  
  useEffect(() => {
    shuffledCards();
  }, [])
  
  function shuffledCards() {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random(), matched: false }))

    setCards(shuffledCards);
    setTurns(0);
    setCount(0);
    setChoiceOne(null);
    setChoiceTwo(null);
    setModalShow(false);
  }

  function handleChoice(card) {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
  }

  function handleModal(show) {
    setModalShow(show);
    shuffledCards();
  }

  function resetChoices() {
    setTurns(prev => prev + 1);
    setChoiceOne(null);
    setChoiceTwo(null);
    setDisabled(false);
  }

  return (
    <>
    {
      modalShow && <Modal turn = {turns} show = {handleModal} />
    }
      <div className="container">
        <div className="header">
          <button onClick={shuffledCards}>Play Again</button>
          <h1 className="title">Memory Game</h1>
          <h4>Turns: {turns}</h4>
        </div>

        <div className="cardsSection">
          {
            cards.map(card => {
              return (
                <SingleCard
                  key={card.id}
                  card={card}
                  handleChoice={handleChoice}
                  flipped={card === choiceOne || card === choiceTwo || card.matched}
                  disabled={disabled}
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
