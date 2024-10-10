import { Expense } from '../types/types';

type ApiResponse<T> = {
  data: T;
  error?: string;
};

const getExpensesData = async (): Promise<ApiResponse<Expense[]>> => {
  try {
    const response = await fetch(
      'https://expenses-backend-mu.vercel.app/expenses',
      {
        headers: {
          'Content-Type': 'application/json',
          Username: 'calie.rushton',
        },
      }
    );
    const body = await response.json();
    return {
      data: body,
    };
  } catch (error) {
    console.log(error);
    return {
      data: [],
      error: 'Error fetching data',
    };
  }
};

export default getExpensesData;


