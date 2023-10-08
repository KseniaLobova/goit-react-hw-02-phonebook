import { isLabelWithInternallyDisabledControl } from '@testing-library/user-event/dist/utils';

export const Filters = ({ onChangeFilter }) => {
  return (
    <label>
      Find number by name
      <input type="text" onChange={evt => onChangeFilter(evt.target.value)} />
    </label>
  );
};
