import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

import { IParams } from '../../types/params';
import {
  selectEditingTicket,
  selectStatuses,
} from '../../redux/ticket/selectors';
import { updateTicket } from '../../redux/ticket/actions';
import { ITicket } from '../../redux/ticket/types';

import { useForm } from '../../hooks/useForm';
import { ROUTES } from '../../routes';

import StatusSelectOption from './components/StatusSelectOption';

const EditTicket = () => {
  const params = useParams<IParams['EDIT_TICKET']>();
  const history = useHistory();
  const dispatch = useDispatch();
  const { id } = params;

  const editingTicket = useSelector(selectEditingTicket);
  const statuses = useSelector(selectStatuses);

  const initialValues = {
    title: editingTicket?.title,
    description: editingTicket?.description,
    assignee: editingTicket?.assignee,
    statusType: editingTicket?.statusType,
  };

  const { values, handleChange } = useForm<Partial<ITicket>>(initialValues);

  const saveTicket = () => {
    if (id && editingTicket) {
      dispatch(updateTicket(id, values));
    }

    history.push(ROUTES.HOME);
  };

  const moveToHome = () => {
    history.push(ROUTES.HOME);
  };

  if (!editingTicket) {
    return <p className="mt-2">Loading...</p>;
  }

  return (
    <div>
      <form className="w-96 m-auto border rounded-xl p-3 mt-3">
        <label className="flex flex-col">
          Title:
          <input
            name="title"
            value={values.title}
            onChange={handleChange}
            className="border mt-2 p-1"
            type="text"
          />
        </label>
        <label className="flex flex-col">
          Description:
          <textarea
            name="description"
            value={values.description}
            onChange={handleChange}
            className="border mt-2 p-1"
            spellCheck={false}
          />
        </label>
        <label className="flex flex-col">
          Assigned:
          <input
            name="assignee"
            value={values.assignee}
            onChange={handleChange}
            className="border mt-2 p-1"
            type="text"
          />
        </label>
        <label className="flex flex-col">
          Status:
          <select name="statusType" onChange={handleChange}>
            {statuses.map((status) => (
              <StatusSelectOption key={status.type} status={status} />
            ))}
          </select>
        </label>
      </form>
      <p className="mt-3">
        <button onClick={saveTicket} className="border px-2 py-1">
          Save
        </button>
        <button onClick={moveToHome} className="border px-2 py-1 ml-4">
          Cancel
        </button>
      </p>
    </div>
  );
};

export default EditTicket;
