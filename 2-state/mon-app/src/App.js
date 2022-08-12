
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
        
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

// import React from 'react';
// import Routine from './Exo1/Routine';

// const click =(texte)=>{
//   alert(texte);
// }
// function App(props) {
//   return (
//     <div className="App">
//       <h1>Qu'est ce que tu preferes?</h1>
//       <Routine text='Manger' function={click}/>
//       <Routine text='Dormir' function={click}/>
//       <Routine text='Etudier' function={click}/>
//     </div>
//   );
// }

// export default App;

import React from 'react';
// import Counter from './EffetDeBord/Counter';
// import Menu from './Menu/Menu';
import Persons from './Tableau/Persons';

function App(props) {
  return (
    <div >
      <Persons/>
    </div>
  );
}

export default App;
