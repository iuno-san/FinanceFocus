
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ExpenseService {
  expenses: Expense[] = [];

  addExpense(name: string, amount: number, category: string): void {
    const expense: Expense = { name, amount, category };
    this.expenses.push(expense);
  }

  getExpenses(): Expense[] {
    return this.expenses;
  }

  updateExpense(index: number, name: string, amount: number, category: string): void {
    const updatedExpense: Expense = { name, amount, category };
    this.expenses[index] = updatedExpense;
  }

  deleteExpense(index: number): void {
    this.expenses.splice(index, 1);
  }

  getTotalExpenses(): number {
    return this.expenses.reduce((total, expense) => total + expense.amount, 0);
  }
}

interface Expense {
  name: string;
  amount: number;
  category: string;
}
