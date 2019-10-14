import React from 'react';
import './Chat.css';

const user = [{
    avatar:"https://randomuser.me/api/portraits/men/11.jpg",
    name: "Julio Wright",
    birthday: "12/4/1969",
    adress: "1392 Cackson St",
    online:'online',

},

{ 
    avatar:"https://randomuser.me/api/portraits/women/20.jpg",
    name : "Isabella Peterson",
    birthday: "3/3/1956",
    adress: "8693 Camden Ave" ,
},

{
    avatar:"https://randomuser.me/api/portraits/men/10.jpg",
    name :"Ronald Davidson",
    birthday: "11/2/1978",
    adress : "8301 Wycliff Ave",
},

{
    avatar:"https://randomuser.me/api/portraits/women/75.jpg",
    name: "Alyssa George",
    birthday: "10/2/1962",
    adress : "9658 Railroad St",
    online:'online',
},

{
    avatar:"https://randomuser.me/api/portraits/women/82.jpg",
    name: "Lois Chambers",
    birthday: "8/6/1981",
    adress: "9586 Poplar Dr",
    online:'online',
}
]

const ContactList = () => (
    <div>
        {user.map(item => (
            <ContactList avatar={item.avatar}name={item.name}birthday={item.birthday}adress={item.adress}online={item.online}/>
        ))}
    </div>
);
export default ContactList;
