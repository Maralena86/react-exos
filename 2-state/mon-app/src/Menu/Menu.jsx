import React, { useState } from 'react';

function Menu(props) {
    const [menu,setMenu] = useState(false);
    const onClickHandle=()=>{
         setMenu(!menu);       
    }
   
    return (
        <div className="Menu">          
            <button onClick={onClickHandle}>{menu===true?'hide':'show'}</button>
            {menu===true&&
            <>
             <h1>Menu Secret</h1>
                <ul>
                    <li>nourir le chien</li>
                    <li>faire mes devoirs</li>
                    <li>essayer des trucs en React</li>
                </ul>
            </>
            }
        </div>
    );
}

export default Menu;
// function Menu(props) {
//     const [menu,setMenu] = useState();
//     const onClickShow=()=>{
//         setMenu(true);       
//     }
//     const onClickHide=()=>{
//         setMenu(false);         
//     }
//     return (
//         <div >          
//             {menu===true?
//             <>
//                 <button onClick={onClickHide}>Hide</button>
//                 <h1>Menu Secret</h1>
//                 <ul>
//                     <li>nourir le chien</li>
//                     <li>faire mes devoirs</li>
//                     <li>essayer des trucs en React</li>
//                 </ul>
//             </>
//             :<button onClick={onClickShow}>Show</button>
//             }
//         </div>
//     );
// }
// export default Menu;