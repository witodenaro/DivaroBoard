import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

import { IParams } from '../../types/params';
import { selectEditingTicket } from '../../redux/ticket/selectors';
import { deleteTicket, updateTicket } from '../../redux/ticket/actions';
import { ITicket } from '../../redux/ticket/types';

import { ROUTES } from '../../routes';

import TicketEditor from '../../components/Ticket/TicketEditor';

const EditTicket = () => {
  const params = useParams<IParams['EDIT_TICKET']>();
  const history = useHistory();
  const dispatch = useDispatch();
  const { id } = params;

  const editingTicket = useSelector(selectEditingTicket);

  const moveToHome = () => {
    history.push(ROUTES.HOME);
  };

  const saveTicket = (values: Partial<ITicket>) => {
    if (id && editingTicket) {
      dispatch(updateTicket(id, values));
    }

    moveToHome();
  };

  if (!editingTicket) {
    moveToHome();
    return null;
  }

  const deleteTicketHandler = () => {
    if (id) {
      dispatch(deleteTicket(id));
    }

    moveToHome();
  };

  return (
    <TicketEditor
      ticket={editingTicket}
      onSubmit={saveTicket}
      onCancel={moveToHome}
      onDelete={deleteTicketHandler}
    />
  );
};

export default EditTicket;
