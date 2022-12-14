import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import { Container, Button, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useAuth } from 'hooks/useAuth';

const Layout = () => {
  const { isLoggedIn } = useAuth();

  return (
    <>
      <Container>
        <Navbar className="px-3 py-3" bg="light">
          <LinkContainer to="/">
            <Navbar.Brand className="fs-2">Phonebook</Navbar.Brand>
          </LinkContainer>
          {isLoggedIn && (
            <LinkContainer to="contacts">
              <Button variant="secondary">Contacts</Button>
            </LinkContainer>
          )}
          <Navbar.Collapse className="justify-content-end">
            <LinkContainer className="me-2" to="register">
              <Button variant="secondary">Register</Button>
            </LinkContainer>
            <LinkContainer to="login">
              <Button variant="secondary">Login</Button>
            </LinkContainer>
          </Navbar.Collapse>
        </Navbar>
      </Container>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;
