import { useState, useEffect } from "react";
import { IOption, IQuestion } from "../../utils/types/quiz.type";
import { initialQuoestions } from "../../data/dummy";
import { randomArray } from "../../utils/utils";
import ButtonRetry from "../button/ButtonRetry";
import Timer from "../timer/timer";
import Progress from "../progress/progress";
import QuestionMenu from "../question-menu/questionMenu";
import Footer from "../footer/footer";

const Quiz = () => {
  const [questions, setQuestions] = useState<IQuestion[]>(
    randomArray(initialQuoestions)
  );
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState<IOption | null>(null);
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(20);
  const [anwered, setAswered] = useState<number[]>([]);

  const isQuizFinished = currentQuestion === questions.length;
  const isNextButtonDisabled = selectedOption === null;

  useEffect(() => {
    if (!isQuizFinished) {
      const interval = setInterval(() => {
        setTimer((prev) => (prev > 0 ? prev - 1 : 0));
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [isQuizFinished, currentQuestion]);

  useEffect(() => {
    if (timer === 0 && selectedOption === null) {
      handleTimeout();
    }
  }, [timer, selectedOption]);

  useEffect(() => {
    setQuestions(initialQuoestions.slice().sort(() => Math.random() - 0.5));
    setCurrentQuestion(0);
  }, []);

  const handleOptionClick = (option: IOption) => {
    if (!anwered.includes(currentQuestion)) {
      setSelectedOption(option);
    }
  };

  const checkAnswer = () => {
    if (!anwered.includes(currentQuestion)) {
      if (selectedOption) {
        const isCorrect = selectedOption.isCorrect;
        setScore((prev) => (isCorrect ? prev + 20 : prev - 20));
      } else {
        setScore((prev) => prev - 20);
      }
      setAswered((prev) => [...prev, currentQuestion]);
    }
  };

  const handleTimeout = () => {
    checkAnswer();
    setCurrentQuestion((prev) => prev + 1);
    setSelectedOption(null);
    setTimer(20);
  };

  const handleNext = () => {
    checkAnswer();
    setCurrentQuestion((prev) => prev + 1);
    setSelectedOption(null);
    setTimer(20);
  };

  return (
    <section className="w-full h-screen bg-blue-500 text-gray-900 flex justify-center items-center">
      {
        <div className="w-full max-w-md bg-white p-4 px-6 rounded-lg">
          <Timer timer={timer} />
          <Progress timer={timer} />
          <QuestionMenu
            anwered={anwered}
            questions={questions}
            currentQuestion={currentQuestion}
            handleOptionClick={handleOptionClick}
            selectedOption={selectedOption}
          />
          <hr className="my-4" />
          <Footer
            currentQuestion={currentQuestion}
            handleNext={handleNext}
            isNextButtonDisabled={isNextButtonDisabled}
            questions={questions}
          />
        </div>
      }
      {isQuizFinished && <ButtonRetry score={score} />}
    </section>
  );
};

export default Quiz;
