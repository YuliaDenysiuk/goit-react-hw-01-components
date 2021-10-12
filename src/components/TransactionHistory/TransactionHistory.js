import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.css';

function TransactionHistory({ items }) {
  return (
    <table className={styles.transactions}>
      <thead>
        <tr className={styles.head}>
          <th className={styles.name}>Type</th>
          <th className={styles.name}>Amount</th>
          <th className={styles.name}>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(item => (
          <tr className={styles.data} key={item.id}>
            <td className={styles.name}>{item.type}</td>
            <td className={styles.name}>{item.amount}</td>
            <td className={styles.name}>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ),
};

export default TransactionHistory;
