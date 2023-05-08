import './singleCard.css'

export const SingleCard = ({card , handleChoice}) => {

   function handleClick(card) {
      handleChoice(card);
   }
   return (
      <div className="card">
         <img onClick={() => handleClick(card)} className="front" src={card.src} alt="" />
         {/* <img className="back" src="./images/backSide.png" alt="" /> */}
      </div>
   )
}
