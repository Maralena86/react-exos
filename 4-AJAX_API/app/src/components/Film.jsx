import axios from 'axios';
import { useState, useEffect } from 'react';
import cssFilm from './Film.module.css';

function Film(props) {
    
    const [film,setFilm] = useState(null);
    const [count, setCount] = useState(1);

    useEffect(()=>{
        fetchFilm();
     }, []);
    
    const fetchFilm = () =>{      
        axios.get('https://swapi.dev/api/films/'+count).then((response) => {
            console.log('response: ', response);

            const data = response.data;

            const filmObj={
                title: data.title,
                director: data.director, 
                release_date: data.relase_date
            }
            setFilm(filmObj);

        }).catch((error) => {
            console.log('error: ', error)
        })

    }
        
    const onClickHandler =(typeOperation)=>{
        if(typeOperation === 'inc' && count < 6){
            setCount(count + 1);
        }else if(typeOperation === 'dec' && count > 1){
            setCount(count - 1);
        }
    }
        

    return (
        <div className={cssFilm.container}>
            <div >
                <button onClick={()=>onClickHandler('inc')}className ={cssFilm.button }>Incrementer: {count}</button>
                <button onClick={()=>onClickHandler('dec')}className ={cssFilm.button}>Decrementer: {count}</button>
                <button onClick={fetchFilm}className ={cssFilm.button}> Fetch Film: {count} </button>
            </div>
            {film!==null&&
            <div className={cssFilm.film}>
                <p>Title: {film.title}</p>
                <p>Director : {film.director}</p>
                <p>Release date: {film.release_date}</p>
            </div>}
        </div>
    );
}

export default Film;