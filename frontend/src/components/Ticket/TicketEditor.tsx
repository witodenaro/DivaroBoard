import { useSelector } from 'react-redux';

import { useForm } from '../../hooks/useForm';

import { ITicket } from '../../redux/ticket/types';
import { selectStatuses } from '../../redux/ticket/selectors';

import StatusSelectOption from '../StatusSelectOption/StatusSelectOption';
import { MouseEventHandler } from 'react';

interface IProps {
  ticket?: ITicket;
  onSubmit: (ticket: Partial<ITicket>) => void;
  onCancel: MouseEventHandler<HTMLButtonElement>;
  onDelete: MouseEventHandler<HTMLButtonElement>;
}

const TicketEditor = ({ ticket, onSubmit, onCancel, onDelete }: IProps) => {
  const initialValues = {
    title: ticket?.title,
    description: ticket?.description,
    assignee: ticket?.assignee,
    statusType: ticket?.statusType || 'open',
  };

  const statuses = useSelector(selectStatuses);

  const { values, handleChange } = useForm<Partial<ITicket>>(initialValues);

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    onSubmit(values);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-96 m-auto border rounded-xl p-3 mt-3"
    >
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
        <select
          value={values.statusType}
          name="statusType"
          onChange={handleChange}
        >
          {statuses.map((status) => (
            <StatusSelectOption key={status.type} status={status} />
          ))}
        </select>
      </label>
      <p className="mt-3">
        <button type="submit" className="border px-2 py-1">
          Save
        </button>
        <button onClick={onCancel} className="border px-2 py-1 ml-4">
          Cancel
        </button>
        <button onClick={onDelete} className="border px-2 py-1 ml-4">
          Delete
        </button>
      </p>
    </form>
  );
};

export default TicketEditor;
