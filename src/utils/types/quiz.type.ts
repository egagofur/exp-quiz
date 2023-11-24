export interface IOption {
  label: string;
  isCorrect: boolean;
}

export interface IQuestion {
  id: number;
  question: string;
  options: IOption[];
}
