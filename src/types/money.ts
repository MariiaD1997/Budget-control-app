export interface MoneyItem {
  title: string;
  amount: number;
  date: string;
  id: number;
}

export interface MoneyProps {
  name: "Income" | "Expence";
  list: MoneyItem[];
  setList: (value: MoneyItem[]) => void;
  balance: number;
}

export interface MoneyTableProps {
  name: string
}