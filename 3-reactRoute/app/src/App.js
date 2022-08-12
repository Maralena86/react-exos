import './App.css';
// import {useState} from 'react';

// function App() {
//   const [page, setPage] = useState("Home");
//   const changePage= (value) =>{
//     setPage(value);
//   }
//   let pageComposant;
//   if(page==='Home'){
//     setPage('Home');
//   }else if(page==='Blog'){
//     setPage('Blog');
//   }else if(page==='Article'){
//     setPage('Article');
//   }
//   return(
//     <header>
//       <nav>
//         <a onClick={()=>changePage('Home')}>Home</a>
//         <a onClick={()=>changePage('Home')}>Home</a>
//         <a onClick={()=>changePage('Home')}>Home</a>

//       </nav>
//     </header>

//   );
  

// }

// export default App;
// import React from 'react';
// import {BrowserRouter as Router, Link, Routes, Route} from 'react-router-dom';
// import Home from './components/Home';
// import Blog from './components/Blog';
// import Article from './components/Article';

// function App(props) {
//   return (
//     <Router>
//       <header>
//         <nav className='nav'>
//           <Link to="/Home">Home</Link>
//           <Link to="/blog">Blog</Link>
//           <Link to="/article">Article</Link>
//         </nav>
//       </header>
//       <Routes >
//         <Route path='/' element={<h1>Welcome</h1>}/>
//         <Route path='/home' element={<Home/>}/>
//         <Route path='/blog' element={<Blog/>}/>
//         <Route path='/article' element={<Article/>}/>  
//       </Routes>     
//     </Router>
//   );
// }

// export default App;
// import React from 'react';
// import {BrowserRouter as Router, Link, Routes, Route} from 'react-router-dom';
// import MachineSous from './component2/MachineSous';
// import Counteur from './component2/Counteur';


// function App(props) {
//   let machine=
//   <>
//     <h1>Machines à sous!</h1>
//       <MachineSous s1='🍎' s2="🍎" s3="🍎" />
//       <MachineSous s1="🍎" s2="🍇" s3="🍋" /> 
//       <MachineSous s1="🍉" s2="🍇" s3="🍊" />   
//   </>
//   return (
//     <Router>
//       <header>
//         <nav className='nav'>
//           <Link to="/compteur">Compteur</Link>
//           <Link to="/machine">Machine</Link>         
//         </nav>
//       </header>
//       <Routes >
//         <Route path='/' element={<h1>Welcome</h1>}/>
//         <Route path='/compteur' element={<Counteur/>}/>
//         <Route path='/machine' element={machine}/>  
//       </Routes>     
//     </Router>
//   );
// }

// export default App;

import { BrowserRouter as Router, Routes, Route, NavLink} from 'react-router-dom';

import React from 'react';
import About from './Exo2/About';
import Contact from './Exo2/Contact';

function App(props) {
  return (
    <Router>
      <header>
        <nav className="nav">
          <NavLink to="/">Accueil</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
      </header>
      <div className="container">
        <Routes >
          <Route  path="/" element={<h1 >Bienvenue sur notre page!! 🚀</h1>}></Route>
          <Route  path="/about" element={<About/>}></Route>
          <Route  path="/contact" element={<><h1>CONTACTS</h1><Contact/></>}>
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
