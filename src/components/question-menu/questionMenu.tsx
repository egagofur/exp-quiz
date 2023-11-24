import IconChecklist from "../../assets/IconChecklist";
import IconX from "../../assets/IconX";
import { IOption, IQuestion } from "../../utils/types/quiz.type";
import { getOptionColor } from "../../utils/utils";

interface Props {
  questions: IQuestion[];
  currentQuestion: number;
  handleOptionClick: (option: IOption) => void;
  selectedOption: IOption | null;
  anwered: number[];
}

const QuestionMenu = ({
  questions,
  currentQuestion,
  handleOptionClick,
  selectedOption,
  anwered,
}: Props) => {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">
        {questions[currentQuestion]?.question}
      </h1>
      <ul className="flex flex-col gap-4">
        {questions[currentQuestion]?.options?.map((option) => (
          <button
            key={option.label}
            onClick={() => handleOptionClick(option)}
            disabled={
              selectedOption !== null || anwered.includes(currentQuestion)
            }
            className={`${getOptionColor(option, selectedOption)}
          rounded-md px-4 py-2 text-start border border-blue-300 font-medium`}
          >
            <span className="flex justify-between">
              {option.label}
              {getOptionColor(option, selectedOption) ===
                "bg-green-300 text-green-800" && <IconChecklist />}
              {getOptionColor(option, selectedOption) ===
                "bg-red-300 text-red-800" && <IconX />}
            </span>
          </button>
        ))}
      </ul>
    </div>
  );
};

export default QuestionMenu;
