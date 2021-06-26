import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { createTicket } from '../../redux/ticket/actions';
import { ITicket } from '../../redux/ticket/types';

import { ROUTES } from '../../routes';

import TicketEditor from '../../components/Ticket/TicketEditor';

const CreateTicket = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const saveTicket = (values: Partial<ITicket>) => {
    dispatch(createTicket(values));

    history.push(ROUTES.HOME);
  };

  const moveToHome = () => {
    history.push(ROUTES.HOME);
  };

  return (
    <TicketEditor
      onSubmit={saveTicket}
      onCancel={moveToHome}
      onDelete={moveToHome}
    />
  );
};

export default CreateTicket;
