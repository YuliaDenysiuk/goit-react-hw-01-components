import PropTypes from 'prop-types';
import defaultImage from '../default.jpg';
import styles from './FriendListItem.module.css';

function FriendListItem({ avatar, name, isOnline }) {
  const statusClass = isOnline ? styles.statusOnline : styles.statusOffline;
  return (
    <>
      <span className={statusClass}>{isOnline}</span>
      <img className={styles.avatar} src={avatar} alt={name} width="48" />
      <p className={styles.name}>{name}</p>
    </>
  );
}

FriendListItem.defaultProps = {
  avatar: defaultImage,
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
