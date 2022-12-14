import styles from './RegisterForm.module.css';
import { nanoid } from 'nanoid';
import { Form, Button, Container } from 'react-bootstrap';
import { useAuth } from 'hooks/useAuth';
import { register } from 'redux/auth/operations';
import { useDispatch } from 'react-redux';

export const RegisterForm = () => {
  const elementId = nanoid(5);
  const { user } = useAuth();
  const dispatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const name = form.elements.name.value;
    const email = form.elements.email.value;
    const password = form.elements.password.value;
    if (user.name === name) {
      return alert(`${name} is already in base`);
    }
    dispatch(
      register({
        name,
        email,
        password,
      })
    );
    form.reset();
  };

  return (
    <Container className={styles.container}>
      <Form className="border rounded p-4" onSubmit={handleSubmit}>
        <p className={styles.paragraph}>Register account</p>
        <Form.Group className="mb-3" controlId={elementId}>
          <Form.Label>Username</Form.Label>
          <Form.Control
            className={styles.input}
            type="name"
            name="name"
            title="For example: John Doe"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId={elementId}>
          <Form.Label>E-mail</Form.Label>
          <Form.Control
            className={styles.input}
            type="email"
            name="email"
            title="For example: example@email.com"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId={elementId}>
          <Form.Label>Password</Form.Label>
          <Form.Control
            className={styles.input}
            type="password"
            name="password"
            title="Minimum 4 characters"
            minLength="4"
            required
          />
        </Form.Group>
        <Button type="submit">Submit Register</Button>
      </Form>
    </Container>
  );
};
