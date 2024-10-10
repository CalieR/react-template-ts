import { Expense } from '../types/types';
import { capitalise, formatAmount, formatDate } from '../utils';

type TableProps = {
  expenses: Expense[];
};

const Table = ({ expenses }: TableProps) => {
  const columns = [
    { header: 'Date', accessor: 'date' },
    { header: 'Merchant', accessor: 'merchant' },
    { header: 'Amount', accessor: 'amount' },
    { header: 'Description', accessor: 'description' },
    { header: 'Category', accessor: 'category' },
    { header: 'Status', accessor: 'status' },
  ];

  const expenseItems: Record<string, number | string>[] = expenses.map(
    (expense) => ({
      id: expense.id,
      date: formatDate(expense.date),
      merchant: expense.merchant,
      amount: formatAmount(expense.amount),
      category: capitalise(expense.category),
      description: expense.description,
      status: capitalise(expense.status),
    })
  );
  return (
    <div>
      <table className="table-auto">
        <thead className="min-w-full">
          <tr>
            {columns.map((column) => (
              <th key={column.accessor}>{column.header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {expenseItems.map((row) => (
            <tr key={row.id}>
              {columns.map((column) => (
                <td key={column.accessor}>{row[column.accessor]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

// With more time I would make the table more attractive to look at and easier to read 
// Also some additional functionality like sorting or search would make it more useful.
// If there were a large number of items returned I'd think about something like pagination.


