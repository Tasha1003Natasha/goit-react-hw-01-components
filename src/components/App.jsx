// import {Profile} from './Profile/Profile';
import {ProfileList} from './Profile/ProfileList';
import user from '../data/user.json';
// //////////////////2 д/з/////////////////////////////////////////
// import data from '../data/data.json';
// import {Statistics} from './Statistics/Statistics';


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
    <ProfileList user={user}/>
    {/* <Statistics title="Upload stats" stats={data} /> */}
     {/* <Statistics stats={data} /> */}
    </div>
  );
};
