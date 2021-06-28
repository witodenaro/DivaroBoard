import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Modal from 'react-modal';

import BoardTicket from './BoardTicket';
import TrashSvg from '../../../assets/TrashSvg';

import { selectFilters } from '../../../redux/ticket/selectors';
import { IStatus, ITicket } from '../../../redux/ticket/types';
import { deleteStatus, setEditingTicket } from '../../../redux/ticket/actions';

import { DEFAULT_COLUMNS_COUNT } from '../constants';

interface IProps {
  status: IStatus;
  tickets: ITicket[];
}

Modal.setAppElement('#root');

const customModalStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const Column = ({ status, tickets }: IProps) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const filter = useSelector(selectFilters);

  const defaultClasses = 'border ml-4 w-80 flex-shrink-0 flex flex-col';
  const columnClasses = `border-${status.color}`;

  const toggleModal = () => {
    setIsModalOpen((prevIsModalOpen) => !prevIsModalOpen);
  };

  const deleteColumn = () => {
    if (status.id) {
      dispatch(deleteStatus(status.id));
    }
    toggleModal();
  };

  return (
    <section className={`${defaultClasses} ${columnClasses}`}>
      <p className="justify-center relative mb-2">
        <span className="text-xl">{status.title}</span>
        {status.id ? status.id > (DEFAULT_COLUMNS_COUNT - 1).toString() && (
          <button className="absolute right-2 top-2" onClick={toggleModal}>
            <TrashSvg />
          </button>
        ) : null}
      </p>
      <div className="overflow-y-auto w-full flex flex-col items-center">
        {tickets.map((ticket) => {
          const moveToTicketEdit = () => {
            history.push('/edit/' + ticket.id);
            dispatch(setEditingTicket(ticket));
          };

          return (
            <BoardTicket
              key={ticket.id}
              ticket={ticket}
              filter={filter}
              onTicketClick={moveToTicketEdit}
            />
          );
        })}
      </div>
      <Modal
        style={customModalStyles}
        isOpen={isModalOpen}
        onRequestClose={toggleModal}
      >
        <div className="w-96 text-center">
          <p>Are you sure you want to remove column "{status.title}"?</p>
          <p>All tickets will be moved to 'open' status.</p>
          <p className="text-red-400">This action can not be undone.</p>
          <p className="mt-2">
            <button
              onClick={deleteColumn}
              className="border rounded py-1 px-2 hover:bg-red-300 hover:text-white"
            >
              Delete column "{status.title}"
            </button>
            <button
              onClick={toggleModal}
              className="border rounded py-1 px-2 ml-3 hover:opacity-60"
            >
              Cancel
            </button>
          </p>
        </div>
      </Modal>
    </section>
  );
};

export default Column;
