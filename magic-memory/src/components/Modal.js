import './modal.css'

export const Modal = ({ turn , show}) => {
   function handleClick() {
      show(false);
   }
  return (
    <div className="modal-backdrop">
      <div className="modal">
         <h2>Congratulations!</h2>
         <p>You turn count is: { turn }</p>
         <button onClick={handleClick}>Play Again</button>
      </div>
    </div>
  )
}
