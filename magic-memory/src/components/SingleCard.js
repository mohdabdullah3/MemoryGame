import './singleCard.css'

export const SingleCard = ({ card, handleChoice, flipped }) => {

   function handleClick(card) {
      handleChoice(card);
   }
   return (
      <div className="card" >
         <div className={flipped ? "flipped" : ""}>
            <img className="front" src={card.src} alt="" />
            <img onClick={() => handleClick(card)} className="back" src="./images/backSide.png" alt="" />
         </div>
      </div>
   )
}
