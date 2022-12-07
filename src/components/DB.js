import { useState } from 'react';
require('./styles/DB.css');

export default function DB() {

  const [colours, setColours] = useState([]);
  const [hex, setHex] = useState("");

  return (
    <>
      <button className='db-button' onClick={ async () => {
        const res = await fetch('http://localhost:5000/palette');
        const data = await res.json();
        const documents = data.palettes;
        setColours(documents);
      }}>Show DB</button>
      <h1 className='db-header'>Header</h1>
      {
        colours.map((doc, index) => {
          return(
            <section className='colour-container' key={index}>
              <p className='colour-title'>{doc.title}<br/>Hex Code: {hex}</p>
              <section className='colours'>
                {
                  doc.colours.map((colour, index2) => {
                    return(
                      <div className='colour-div' key={index2} onClick={() => {setHex(colour)}} style={{backgroundColor: colour, left: index2 * 10 + '%'}}></div>
                    );
                  })
                }
              </section>
            </section>
          );
        })
      }
    </>
  );
}