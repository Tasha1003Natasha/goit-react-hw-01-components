import PropTypes from 'prop-types';
import styles from './FriendList.module.css';

// const getRandomHexColor = () => {
//   const getRandom = `# ${Math.floor(Math.random() * 16777215).toString(16)}`;
//   return getRandom;
// };
// const generateColor = () => {
//   return Math.random() > 0.5 ? 'red' : 'blue';
// };

export const Friends = ({ isOnline, avatar, name }) => {
  return (
    <li className={styles.item}>
      <span
        className={styles.status}
        style={{
          backgroundColor: isOnline ? 'red' : 'green',
        }}
      ></span>
      <img
        className={styles.avatar}
        src={avatar}
        alt="User avatar"
        width="48"
      />
      <p className="name">{name}</p>
    </li>
  );
};

Friends.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.any.isRequired,
};
