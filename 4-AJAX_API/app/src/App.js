// import { useState, useEffect } from 'react';
// import Counter from './Counter';
import './App.css';

// function App() {
//   const [count, setCount] = useState(0);
//   const incrementerCompteur = () => {
//     console.log('Incrementer Compteur');
//     setCount(count + 1);
//   }

//   useEffect(()=>{
//     console.log('useEffect.js');
//   });
  
//   console.log('APP.js return ');

//   return (
//     <div className="App">
//       <Counter compteur={count} fonction={incrementerCompteur}/>
//       <h1>Compteur : {count}</h1>
//     </div>
//   );
// }

// export default App;
// quel est l'ordre d'éxecution des lignes console.log 
// lorsque j'actualise la page web

//  12 => 14 

// quel est l'ordre d'éxecution des lignes console.log 
// lorsque je clique sur le bouton
// 8 => 12 => 14

import React from 'react';
import Film from './components/Film';


function App(props) {
  return (
    <div className='App2'>
      <Film/>
    </div>
  );
}

export default App;
