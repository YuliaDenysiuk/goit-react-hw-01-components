import PropTypes from "prop-types";
import defaultImage from "../default.jpg";

function FriendListItem({ avatar, name, isOnline }) {
  return (
    <>
      <span class="status">{isOnline}</span>
      <img class="avatar" src={avatar} alt={name} width="48" />
      <p class="name">{name}</p>
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
