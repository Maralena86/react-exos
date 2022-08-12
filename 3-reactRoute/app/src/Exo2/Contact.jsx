import React from 'react';

function Contact(props) {
    const contacts=[
        {prenom:'Saboun', nom:'Ishag', mail:"saboun@mail.com" }, 
        {prenom:"Halima", nom:"Diahaby" ,mail:"saboun@mail.com"},
        {prenom:"Maxime", nom:"Schenrey" ,mail:"maxime@mail.com"},
        {prenom:"Vincent", nom:"Tamet" ,mail:"vincent@mail.com"},
        {prenom:"Maria", nom:"Vasquez" ,mail:"maria@mail.com"}   
      ]
      return contacts.map(element=>{
        return(
          <div className="nameContainer">
              <h2>{element.prenom} {element.nom}</h2>
                <p>{element.mail}</p>
          </div>        
        ) 
        
      }
      )
    
}

export default Contact;