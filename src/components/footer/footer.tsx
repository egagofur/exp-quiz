import { IQuestion } from "../../utils/types/quiz.type";

interface FooterProps {
  currentQuestion: number;
  handleNext: () => void;
  isNextButtonDisabled: boolean;
  questions: IQuestion[];
}

const Footer = ({
  currentQuestion,
  handleNext,
  isNextButtonDisabled,
  questions,
}: FooterProps) => {
  return (
    <div className="flex justify-between items-center">
      <h1 className="text-base font-medium">
        {currentQuestion + 1} of {questions.length} Qustions
      </h1>
      <button
        onClick={handleNext}
        disabled={isNextButtonDisabled}
        className={`bg-blue-500 rounded-md px-4 py-2 text-slate-200 ${
          isNextButtonDisabled && "opacity-50 cursor-not-allowed"
        }`}
      >
        {currentQuestion === questions.length - 1 ? "Submit" : "Next Que"}
      </button>
    </div>
  );
};

export default Footer;
