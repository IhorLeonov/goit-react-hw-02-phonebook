import PropTypes from 'prop-types';
import { ButtonDelete, Item } from './ContactItem.styled';

export const ContactItem = ({ id, name, number, onDelete }) => {
  return (
    <Item>
      {name}: {number}
      <ButtonDelete
        type="button"
        onClick={() => {
          onDelete(id);
        }}
      >
        Delete
      </ButtonDelete>
    </Item>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};
