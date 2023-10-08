import { ContactItem } from 'components/ContactItem/ContactItem';

export const ContactList = ({ contacts }) => {
  return (
    <ul>
      {contacts.map(({ name, number, id }) => (
        <li key={id}>
          <ContactItem name={name} number={number} />
        </li>
      ))}
    </ul>
  );
};
