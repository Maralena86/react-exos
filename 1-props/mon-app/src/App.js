
import './App.css';
// import Person from './Person/Person';

// function App() {
//   return (
//     <div className="App">
//       <Person nom='Vasquez' prenom ='Maria'>Salut!!!!</Person>
//       <Person nom='Mendieta' prenom ='Pepe'/>
//       <Person nom='Manrique' prenom ='Lina'/>
//     </div>
//   );
// }

// export default App;

// import React from 'react';
// import Animal from './Animal/Animal';



// function App(props) {

//   const alerti = () => {
//     alert('Hi motherf#8@k!!!!!')
//   }

//   return (
//     <div className="App">
//       <Animal animal={'Lion'}/>
//       <Animal animal={'Chien'}/>
//       <Animal animal={'Chat'}/>
//       <button onClick= {alerti} >CLICK ICI</button>    
//     </div>
//   );
// }

// export default App;

// import React from 'react';
// import Profil from './Profile/Profil';



// function App(props) {
//   return (
//     <Profil name= 'Maria' lastName= "Vasquez" age={35} nacionality = 'Colombienne' hasCar={false}
//     birthDay={{day: 26, month:7, year: 1986}}$
//     />
//   );
// }

// export default App;


import React from 'react';
import MachineSous from './MachinesSous/MachineSous';

function App(props) {
 
  return (
    <div className="App">
      <h1>Machines à sous!</h1>
      <MachineSous s1="apple" s2="apple" s3="apple" />
      <MachineSous s1="apple" s2="orange" s3="apple" />      
    </div>
  );
}

export default App;