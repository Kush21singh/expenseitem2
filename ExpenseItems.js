
import './ExpenseItems.css';

function ExpenseItem() {
  const expenseDate = new Date(2021, 3, 28);
  const expenseTitle = 'Car Insurance';
  const expenseAmount = 294.67;
  const locationOfExpenditure = 'Auto Shop'; 

  return (
    <div className='expense-item'>
      <div>{expenseDate.toISOString()}</div>

      <h2>{expenseTitle}</h2>
      <div className='expense-item__price'>${expenseAmount}</div>

      <div className='expense-item__location'>
        Location: {locationOfExpenditure}
      </div>
    </div>
  );
}

export default ExpenseItem;