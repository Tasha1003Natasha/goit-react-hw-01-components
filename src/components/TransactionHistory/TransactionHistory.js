import PropTypes from 'prop-types';

export const TransactionHistory = ({ items }) => {
  return (
    <table className="transaction-history">
      <thead>
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id}>
            <th>Type {type}</th>
            <th>Amount {amount}</th>
            <th>Currency {currency}</th>
          </tr>
        ))}
      </thead>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
