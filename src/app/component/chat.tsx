import { useState } from "react";

const contacts = [
    { name: 'Taylor', email: 'taylor@mail.com' }, 
    { name: 'Alice', email: 'alice@mail.com' },
    { name: 'Bob', email: 'bob@mail.com' }
];

export function ContactList({selectedContact, contacts, onSelect}){
    return(
        <section className="contact-list">
            <ul className="w-full">
                {contacts.map(contact => 
                    <li key = {contact.email}>
                    <button
                        className="text xs bg-blue-400 rounded p-1 m-2 text-white"
                        onClick={() => {onSelect(contact);}}>
                        {contact.name}
                    </button>
                    </li>
                )}
            </ul>
        </section>
    );
}

export function Chat(contact){

}

export default function Messenger(){
    
}