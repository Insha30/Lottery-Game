import { useState, useEffect } from "react";
import { genTicket , sum } from "./Helper";
import Ticket from "./Ticket";
import "./Lottery.css";
import confetti from 'canvas-confetti';

export default function Lottery ( { n = 3, winCondition} ) {

    let [ ticket , setTicket ] = useState(genTicket(n));
    let isWinning = winCondition(ticket);

    let buyTicket = () => {
        setTicket(genTicket(n));
    };

    // Trigger confetti when isWinning becomes true
    useEffect(() => {
        if (isWinning) {
            confetti({
                particleCount: 150,
                spread: 80,
                origin: { y: 0.6 },
            });
        }
    }, [isWinning]); // Runs whenever isWinning changes

    return (
        <div className="Lottery-box">
            <h3>Lottery Game!</h3>
            <br></br>
            <div className="Ticket"> 
            <Ticket ticket={ticket}/>
            </div>
            <br></br>
            <button onClick={buyTicket}>Get New Ticket</button>
            <h2> 
                {isWinning && 
                    <div className="winning-message">
                    🎉 <strong>Congratulations, You Won!</strong> 🎉
                </div>
            }</h2>
        </div>
    )
};  