import React from 'react';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import Contacts from './Contacts/Contacts';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [filter, setFilter] = useState('');

  const add = e => {
    e.preventDefault();

    if (
      !contacts.some(e => {
        if (name === e.name) {
          return true;
        }
        return false;
      })
    ) {
      let temp = contacts;
      temp.push({
        name: name,
        id: nanoid(),
        number: number,
      });

      setContacts([...temp]);
    } else alert(`${name} is already in contact`);
  };
  const change = e => {
    setName(e.target.value);
  };

  const changeTel = e => {
    setNumber(e.target.value);
  };

  const changeFilter = e => {
    setFilter(e.target.value);
  };
  const contactsChange = () => {
    let temp = filter.toLowerCase();
    let temp2 = contacts;
    let temp3 = false;
    if (temp.length > 0)
      temp2 = contacts.filter(e => {
        for (let i = 0; i < e.name.length; i++) {
          if (e.name[i].toLowerCase() === temp[0]) {
            temp3 = true;
            for (let j = 0; j < temp.length; j++) {
              if (j + i < e.name.length) {
                if (e.name[j + i].toLowerCase() !== temp[j]) {
                  temp3 = false;
                }
              } else temp3 = false;
            }
            if (temp3 === true) {
              temp3 = false;
              return true;
            }
          }
        }
        return false;
      });
    return temp2;
  };
  const deleteContacts = e => {
    let temp = contacts;
    const temp2 = temp.filter(obj => {
      if (e.currentTarget.name === obj.name) {
        return false;
      }
      return true;
    });

    setContacts(temp2);
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm
        name={name}
        change={change}
        number={number}
        changeTel={changeTel}
        add={add}
      />
      <h2>Contacts</h2>
      <Filter filter={filter} changeFilter={changeFilter} />
      <Contacts
        contactsChange={contactsChange}
        deleteContacts={deleteContacts}
      />
    </div>
  );
};
