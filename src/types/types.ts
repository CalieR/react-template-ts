export type Expense = {
    id: number;
    merchant: string;
    amount: number;
    description: string;
    date: string;
    category: string;
    status: string;
}

// "id": 1,
//     "merchant": "AWS",
//     "amount": 1260,
//     "description": "Hosting for hobby project",
//     "date": "2022-05-24T12:00:00.000Z",
//     "category": "training",
//     "status": "draft"