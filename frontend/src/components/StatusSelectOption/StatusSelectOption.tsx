import { IStatus } from '../../redux/ticket/types';

interface IProps {
  status: IStatus;
}

const StatusSelectOption = ({ status }: IProps) => {
  return <option value={status.type}>{status.title}</option>;
};

export default StatusSelectOption;
