
import { useEffect, useState } from 'react';
import './tictactoe.css';

function TicTacToe() {

  const [x, setX] = useState(null);
  const [moveCount, SetMoveCount] = useState(9);
  const [wonGame, setWonGame] = useState(false);
  const [cat, setCat] = useState(false);

  const [a1, setA1] = useState(null);
  const [a2, setA2] = useState(null);
  const [a3, setA3] = useState(null);
  const [b1, setB1] = useState(null);
  const [b2, setB2] = useState(null);
  const [b3, setB3] = useState(null);
  const [c1, setC1] = useState(null);
  const [c2, setC2] = useState(null);
  const [c3, setC3] = useState(null);

  let setSpace = space => {
    if(space === 'a1') setA1(x == null ? 'x' : x ? 'x' : 'o');
    if(space === 'a2') setA2(x == null ? 'x' : x ? 'x' : 'o');
    if(space === 'a3') setA3(x == null ? 'x' : x ? 'x' : 'o');
    if(space === 'b1') setB1(x == null ? 'x' : x ? 'x' : 'o');
    if(space === 'b2') setB2(x == null ? 'x' : x ? 'x' : 'o');
    if(space === 'b3') setB3(x == null ? 'x' : x ? 'x' : 'o');
    if(space === 'c1') setC1(x == null ? 'x' : x ? 'x' : 'o');
    if(space === 'c2') setC2(x == null ? 'x' : x ? 'x' : 'o');
    if(space === 'c3') setC3(x == null ? 'x' : x ? 'x' : 'o');
    setX(x == null ? false : !x);
    SetMoveCount(moveCount => moveCount - 1);
  }

  useEffect(()=>{
      if([a1,a2,a3].every(ele => ele == 'x') || [a1,a2,a3].every(ele => ele == 'o')) setWonGame(true);
      if([b1,b2,b3].every(ele => ele == 'x') || [b1,b2,b3].every(ele => ele == 'o')) setWonGame(true);
      if([c1,c2,c3].every(ele => ele == 'x') || [c1,c2,c3].every(ele => ele == 'o')) setWonGame(true);
      if([a1,b2,c3].every(ele => ele == 'x') || [c1,b2,a3].every(ele => ele == 'o')) setWonGame(true);
      if([a1,b1,c1].every(ele => ele == 'x') || [c1,b1,a1].every(ele => ele == 'o')) setWonGame(true);
      if([a2,b2,c2].every(ele => ele == 'x') || [c2,b2,a2].every(ele => ele == 'o')) setWonGame(true);
      if([a3,b3,c3].every(ele => ele == 'x') || [c3,b3,a3].every(ele => ele == 'o')) setWonGame(true);
      if(!moveCount){
        setCat(true);
      }
  }, [moveCount]);

  let dom = (
    <div id='container'>
        <button disabled={a1 !== null || wonGame} onClick={() => {setSpace('a1')}} id='a1' className={`space ${a1}`}>{a1}</button>
        <button disabled={a2 !== null || wonGame} onClick={() => {setSpace('a2')}} id='a2' className={`space ${a2} `}>{a2}</button>
        <button disabled={a3 !== null || wonGame} onClick={() => {setSpace('a3')}} id='a3' className={`space ${a3} `}>{a3}</button>
        <button disabled={b1 !== null || wonGame} onClick={() => {setSpace('b1')}} id='b1' className={`space ${b1} `}>{b1}</button>
        <button disabled={b2 !== null || wonGame} onClick={() => {setSpace('b2')}} id='b2' className={`space ${b2} `}>{b2}</button>
        <button disabled={b3 !== null || wonGame} onClick={() => {setSpace('b3')}} id='b3' className={`space ${b3} `}>{b3}</button>
        <button disabled={c1 !== null || wonGame} onClick={() => {setSpace('c1')}} id='c1' className={`space ${c1} `}>{c1}</button>
        <button disabled={c2 !== null || wonGame} onClick={() => {setSpace('c2')}} id='c2' className={`space ${c2} `}>{c2}</button>
        <button disabled={c3 !== null || wonGame} onClick={() => {setSpace('c3')}} id='c3' className={`space ${c3} `}>{c3}</button>
    </div>
  );

  if(wonGame){
    dom = (
        <div id='win'>
            {`${x ? 'O' : 'X'}`}
        </div>
    );
  }

  if(cat && !wonGame) {
    dom = (
        <div id='cat'>
            CAT
        </div>
    );
  }

  return dom;
}

export default TicTacToe;
