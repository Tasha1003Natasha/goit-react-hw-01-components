import styles from './FriendList.module.css';

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
