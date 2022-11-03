export interface MoneyItem {
  title: string;
  amount: number;
  date: string;
  id: number;
}

export interface MoneyProps {
  name: "Income" | "Expence";
  balance: number;
}

export interface MoneyTableProps {
  name: string;
}
