
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './splash.css';

// import Clock from './Clock/Clock';

function Splash() {

//   const [x, setX] = useState(null);


  useEffect(()=>{

  }, []);


  return (
    <>
      <Link to='/tictactoe'  className="navlink">
        <img alt='Tic Tac Toe' src='https://upload.wikimedia.org/wikipedia/commons/6/64/Tic-tac-toe.png?20160401150856'/>
      </Link>
    </>
  );
}

export default Splash;
