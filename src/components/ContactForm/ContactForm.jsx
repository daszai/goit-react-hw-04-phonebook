import React from 'react';
const ContactForm = props => {
  return (
    <form>
      <input
        type="text"
        name="name"
        // pattern="^[a-zA-Z]+(([' -][a-zA-Z])?[a-zA-Z]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={props.name}
        onChange={props.change}
      />
      <input
        type="tel"
        name="number"
        // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        value={props.number}
        onChange={props.changeTel}
      />
      <button onClick={props.add} type="submit">
        Add Contact
      </button>
    </form>
  );
};
export default ContactForm;
