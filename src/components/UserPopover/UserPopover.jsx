import { useAuth } from 'hooks/useAuth';
import { logOut } from 'redux/auth/operations';
import { useDispatch } from 'react-redux';
import { Button } from 'react-bootstrap';

export const UserPopover = () => {
  const { user } = useAuth();
  const dispatch = useDispatch();

  const handleLogOut = () => dispatch(logOut());

  return (
    <>
      <p>Email: {user.email}</p>
      <Button type="button" onClick={handleLogOut}>
        Logout
      </Button>
    </>
  );
};
