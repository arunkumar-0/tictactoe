import React from 'react';

const statusMessage = ({winner , current}) => {


const noMoveLeft = current.board.every ((el) => el !== null);
  return (
     <div className='status-message'>
    {winner && ( 
    <>
    winner is {''}
    <span className= {winner === 'X' ? 'text-green' :  'text-orange' } > {winner} 
    </span>
    </>  
    
)} 
  {!winner && 
  !noMoveLeft && 
 <> 
 Next player is  <span className= {current.isXnext ? 'text-green' :  'text-orange' }>
   {current.isXnext ? 'X' : 'O'}  {' '}
   </span>
  </>}
  {!winner && noMoveLeft &&  <>
  <span className='text-green'>X</span> and <span className='text-orange'> O</span>
  
  </>}
     
   </div>   
  );
};

export default statusMessage;
