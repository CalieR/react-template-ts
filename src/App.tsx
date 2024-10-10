import { useEffect, useState } from 'react';
import './App.css';
import { Expense } from './types/types';
import getExpensesData from './service/expenseService';
import Table from './components/Table';

function App() {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [error, setError] = useState<string | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchExpenses = async () => {
    const response = await getExpensesData();
    setExpenses(response.data);
    setError(response.error);
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    fetchExpenses();
  }, []);

  return (
    <div id="template-text" className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Expenses</h1>
      <hr></hr>
      {loading && <p>Loading expenses....</p>}
      {!loading && error && <p>{error}</p>}
      {!loading && !error && expenses.length === 0 && <p>No expenses found</p>}
      {!loading && !error && expenses.length >= 1 && <Table expenses={expenses} />}
    </div>
  );
}

export default App;

// As the app grew I'd consider using something like a context to manage state.
// Potentially use another solution to handle loading / error states especially if the app gets more complex
