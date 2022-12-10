import styles from './LoginForm.module.css';
import { nanoid } from 'nanoid';
import { Form, Button, Container } from 'react-bootstrap';

export const LoginForm = () => {
  const elementId = nanoid(5);
  return (
    <Container className={styles.container}>
      <Form className="border rounded p-4">
        <p className={styles.paragraph}>Please login</p>
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
        <Button type="submit">Login</Button>
      </Form>
    </Container>
  );
};
