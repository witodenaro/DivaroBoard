import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

import FilterTicket from '../Ticket/FilterTicket';
import ColumnCreator from '../ColumnCreator/ColumnCreator';

import { selectFilters } from '../../redux/ticket/selectors';
import { toggleFilterField } from '../../redux/ticket/actions';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes';

const Header = () => {
  const dispatch = useDispatch();

  const filter = useSelector(selectFilters);

  const [showSetFields, setShowSetFields] = useState(false);

  const toggleShowSetFields = () => {
    setShowSetFields((prevSetShowFields) => !prevSetShowFields);
  };

  const toggleFilterFieldHandler = (field: string) => {
    dispatch(toggleFilterField(field));
  };

  return (
    <div className="border p-4 w-200 m-auto flex relative">
      <Link className="mr-4" to={ROUTES.HOME}>
        Board
      </Link>
      <button onClick={toggleShowSetFields}>Set fields</button>
      {showSetFields && (
        <FilterTicket
          onFilterFieldClick={toggleFilterFieldHandler}
          filter={filter}
        />
      )}
      <ColumnCreator />
    </div>
  );
};

export default Header;
