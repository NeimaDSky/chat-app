import React from 'react';
import './Chat.css';

function Contact(props) {
    return (
    <div className ="Contact">
        <img src ={props.avatar} className = 'avatar' alt='avatar'/>
        <div className='status'>
            <h3 className= 'name'>{props.name}</h3>
            <p className = 'birthday'>{props.birthday}</p>
            <p className = 'adress'>{props.adress}</p>
            <div className="status-bloc">
                <p className={props.online ? "status-online" : "status-offline"}> </p>
                <p className="status-text">{props.online ? "Online" : "Offline"}</p>
               

            </div>

        </div>
    </div>
    );
}

export default Contact;