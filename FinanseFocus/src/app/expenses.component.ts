import { Component } from '@angular/core';

interface Expense {
  name: string;
  category: string;
  amount: number;
}

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css'],
})
export class ExpensesComponent {
  categories: string[] = ['Food', 'Transport', 'Shopping', 'Entertainment', 'Health', 'Education', 'Others', 'House', 'Fees', 'Sport'];
  expenses: Expense[] = [];
  newExpense: Expense = { name: '', category: '', amount: 0 };
  editingIndex: number | null = null;

  addExpense() {
    if (this.newExpense.name && this.newExpense.category && this.newExpense.amount >= 0) {
      if (this.editingIndex !== null) {
        this.expenses[this.editingIndex] = { ...this.newExpense };
        this.editingIndex = null;
      } else {
        this.expenses.push({ ...this.newExpense });
      }

      this.newExpense = { name: '', category: '', amount: 0 };
    }
  }

  editExpense(index: number) {
    this.newExpense = { ...this.expenses[index] };
    this.editingIndex = index;
  }

  removeExpense(index: number) {
    this.expenses.splice(index, 1);
  }
}
