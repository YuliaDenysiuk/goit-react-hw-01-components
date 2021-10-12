import './App.css';
import user from './data/user.json';
import statisticalData from './data/statistical-data.json';
import friendsData from './data/friends.json';
import transactionData from './data/transactions.json';
import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import FriendList from './components/FriendList/FriendList';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';

function App() {
  return (
    <div>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statisticalData} />
      <FriendList friends={friendsData} />
      <TransactionHistory items={transactionData} />
    </div>
  );
}

export default App;
