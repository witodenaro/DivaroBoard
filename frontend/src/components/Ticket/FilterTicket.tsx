import Ticket from './Ticket';
import TicketField from './TicketField';
import EyeSvg from '../../assets/EyeSvg';

import { IFilter } from '../../redux/ticket/types';

interface IProps {
  onFilterFieldClick: (field: string) => void;
  filter: IFilter;
}

const FilterTicket = ({ onFilterFieldClick, filter }: IProps) => {
  return (
    <Ticket className="absolute top-10 left-0 bg-white z-10">
      {Object.keys(filter).map((field) => (
        <TicketField key={field} className="justify-center" show={true}>
          <button
            disabled={field === 'title'}
            onClick={onFilterFieldClick.bind(null, field)}
            className={`opacity-${
              filter[field as keyof IFilter] ? '60' : '30'
            } flex`}
          >
            <EyeSvg />
            <span className="ml-2">{field}</span>
          </button>
        </TicketField>
      ))}
    </Ticket>
  );
};

export default FilterTicket;
