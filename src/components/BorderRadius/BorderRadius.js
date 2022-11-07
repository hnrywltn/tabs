
import { useEffect, useState } from 'react';
import { Range } from 'react-range';
import './borderradius.css';

function BorderRadius() {

    const [tl, setTl] = useState(0);
    const [tr, setTr] = useState(0);
    const [bl, setBl] = useState(0);
    const [br, setBr] = useState(0);

  return (
    <div
      className='container'
      style={{'width': '40vw'}}>

        <div
          style={{
            display:'flex',
            flexDirection:'column',
            backgroundColor:'rgba(255, 250, 250, 0.397)',
            padding:'2vh',
            margin:'2vh',
            borderRadius: '5px'
            }}>


          <label>
            Top Left
            <input
                onChange={(e)=>{setTl(e.target.value)}}
                type='range'
                value={tl}
                min='0'
                max='100'
                />
          </label>
          <label>
            Top Right
            <input
                onChange={(e)=>{setTr(e.target.value)}}
                type='range'
                value={tr}
                min='0'
                max='100'
                />
          </label>
          <label>
            Bottom Left
            <input
                onChange={(e)=>{setBl(e.target.value)}}
                type='range'
                value={bl}
                min='0'
                max='100'
                />
          </label>
          <label>
            Bottom Right
            <input
                onChange={(e)=>{setBr(e.target.value)}}
                type='range'
                value={br}
                min='0'
                max='100'
                />
          </label>

        </div>

        <img
          style={{ borderRadius: `${`${tl}%`} ${`${tr}%`} ${`${br}%`} ${`${bl}%`}`,
          transition: 'none',
          padding: '5px',
          width: '100%'
        }}
        alt='puffin'
        src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Atlantic_puffins_Gull_Island.jpg/1024px-Atlantic_puffins_Gull_Island.jpg'/>

        <p>{`border-radius: ${tl}% ${tr}% ${br}% ${bl}%;`}</p>
        <button style={{color:'white',borderRadius: '5px', fontWeight:'bold', backgroundColor:'black', padding:'5px'}} onClick={() => {navigator.clipboard.writeText(`border-radius: ${tl}% ${tr}% ${br}% ${bl}%;`)}}>
          Copy to Clipboard
        </button>


    </div>



  );
}

export default BorderRadius;
