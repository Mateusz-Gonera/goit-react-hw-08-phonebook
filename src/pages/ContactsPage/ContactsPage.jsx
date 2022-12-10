import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Loader } from 'components/Loader/Loader';
import { useSelector } from 'react-redux';
import { selectError, selectIsLoading } from 'redux/contacts/selectors';
import { Stack } from 'react-bootstrap';

const ContactsPage = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return (
    <Stack
      className="justify-content-center align-items-start mt-4"
      direction="horizontal"
      gap={5}
    >
      <div>
        <ContactForm />
      </div>
      <div>
        <h2>Contacts</h2>
        <Filter />
        {isLoading && !error ? <Loader /> : <ContactList />}
      </div>
    </Stack>
  );
};

export default ContactsPage;
