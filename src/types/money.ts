export interface MoneyItem {
  name: string;
  amount: number;
  date: string;
  id: number;
}

export interface MoneyProps {
  name: "Income" | "Expence";
  list: MoneyItem[];
  setList: (value: MoneyItem[]) => void;
}
