import { IOption, IQuestion } from "./types/quiz.type";

export const randomArray = (array: IQuestion[]) =>
  [...array].sort(() => Math.random() - 0.5);

export const getOptionColor = (
  option: IOption,
  selectedOption: IOption | null
) => {
  if (selectedOption && option.isCorrect) {
    return "bg-green-300 text-green-800";
  } else if (
    selectedOption &&
    selectedOption?.label === option.label &&
    !option.isCorrect
  ) {
    return "bg-red-300 text-red-800";
  }
  return "bg-indigo-100";
};
