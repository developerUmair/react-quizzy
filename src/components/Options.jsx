import { useQuiz } from "../contexts/QuizContext";

const Options = ({ question }) => {
  const { dispatch, answer } = useQuiz();

  const hasAnswer = answer !== null;
  return (
    <div className="options">
      {question?.options.map((option, index) => (
        <button
          key={option}
          className={`btn btn-option ${index === answer ? "answer" : ""} ${
            hasAnswer
              ? index === question.correctOption
                ? "correct"
                : "wrong"
              : ""
          }`}
          onClick={() => dispatch({ type: "newAnswer", payload: index })}
          disabled={hasAnswer}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default Options;
