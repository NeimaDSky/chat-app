import React from 'react';
import './Chat.css';

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            online: this.props.online
        };
    }


    render() {
        return (
            <div className="Contact">
                <img src={this.props.avatar} className='avatar' alt='avatar' />
                <div className='status'>
                    <h3 className='name'>{this.props.name}</h3>
                    <p className='birthday'>{this.props.birthday}</p>
                    <p className='adress'>{this.props.adress}</p>
                    <div className="status-bloc" onClick = {event => {
                        const newStatus = !this.state.online;
                        this.setState({ online: newStatus }); 
                    }} 
                    >
                        <span className={this.state.online ? "status-online" : "status-offline"}> </span>
                        <p className="status-text">{this.state.online ? "online" : "offline"} </p>
                    
                        


            </div>

                </div >
            </div >
        );
    }
}
export default Contact;