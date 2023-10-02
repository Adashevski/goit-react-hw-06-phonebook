import styles from './ContactList.module.css';
import { selectFilteredContacts } from 'redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/actions';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts);
  const handleDelete = id => {
    dispatch(deleteContact(id));
  };
  return (
    <ul className={styles.list}>
      {contacts.map(el => (
        <li key={el.id} className={styles.item}>
          {el.name}: {el.number}{' '}
          <button
            onClick={() => handleDelete(el.id)}
            type="button"
            className={styles.btn}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
