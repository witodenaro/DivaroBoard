import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addStatus } from '../../redux/ticket/actions';
import { createStatus } from '../../utils/ticket';

const ColumnCreator = () => {
  const dispatch = useDispatch();

  const [isCreatingNewColumn, setIsCreatingNewColumn] = useState(false);
  const [columnTitle, setColumnTitle] = useState<null | string>(null);

  const toggleIsCreatingNewColumn = () => {
    setIsCreatingNewColumn(
      (prevIsCreatingNewColumn) => !prevIsCreatingNewColumn
    );
  };

  const saveColumn = () => {
    if (columnTitle) {
      const status = createStatus(columnTitle);

      dispatch(addStatus(status));
    }

    setColumnTitle(null);
    setIsCreatingNewColumn(false);
  };

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColumnTitle(e.target.value);
  };

  return (
    <div className="mx-4">
      {isCreatingNewColumn ? (
        <p>
          <input
            type="text"
            className="h-6 border-b-2 mr-3 border-gray box-border"
            placeholder="Column title"
            value={columnTitle || ''}
            onChange={onInputChange}
          />
          <button onClick={saveColumn}>Save</button>
          <button className="ml-2" onClick={toggleIsCreatingNewColumn}>
            Cancel
          </button>
        </p>
      ) : (
        <button className="" onClick={toggleIsCreatingNewColumn}>
          + Create new column
        </button>
      )}
    </div>
  );
};

export default ColumnCreator;
