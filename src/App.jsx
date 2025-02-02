import './App.css'
import Lottery from './Lottery';
import {sum} from './Helper'; 


// * logic for all the ticket no. to be equal for winning
// ticket.every((num) => num === ticket[0]);
// * logic for winning condition on sum of 15 for all ticket no.
//sum(ticket) ===15;

function App() {

  const winCondition = (ticket) => sum(ticket) ===15;

  return (
    <>
      <Lottery n={3} winCondition={winCondition}/>
    </>
  );
};  

export default App;
