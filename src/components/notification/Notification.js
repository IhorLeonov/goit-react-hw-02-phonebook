import { Notify } from 'components/notification/Notfication.styled';
import PropTypes from 'prop-types';

export const Notification = ({ message }) => {
  return <Notify>{message}</Notify>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
