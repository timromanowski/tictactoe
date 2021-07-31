import React from 'react'

const StatusMessage = ({winner, current}) => {

   const noMovesLeft = current.board.every((space) => space !== null );

   return (
      <h2>
         {
            winner && `Winner is ${winner}`
         }
         {
            !winner && !noMovesLeft && `Next player is ${current.isXNext ? 'X' : 'O'}`
         }
         {
            !winner && noMovesLeft && 'Draw'
         }
      </h2>
   )
}

export default StatusMessage
