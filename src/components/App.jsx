// import {ProfileList} from './Profile/ProfileList';
// import user from '../data/user.json';
// //////////////////2 д/з/////////////////////////////////////////
// import data from '../data/data.json';
// import {Statistics} from './Statistics/Statistics';
// //////////////////3 д/з/////////////////////////////////////////
// import friends from '../data/friends.json';
// import {FriendList} from './FriendList/FriendList';
// //////////////////4 д/з/////////////////////////////////////////
import transactions from '../data/transactions.json';
import {TransactionHistory} from './TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
     {/* <ProfileList user={user}/> */}

      {/* <Statistics title="Upload stats" stats={data} /> */}

      {/* <Statistics stats={data} /> */}

      {/* <FriendList friends={friends} />; */}

      <TransactionHistory items={transactions} />;

    </div>
  );
};
