
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
      <Link to='/borderradius'  className="navlink">
        <img alt='Border Radius' src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Illusion_created_by_5_circles.png/640px-Illusion_created_by_5_circles.png'/>
      </Link>
    </>
  );
}

export default Splash;
