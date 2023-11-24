const ButtonRetry = ({ score }: { score: number }) => {
  return (
    <div className="absolute flex items-center justify-center backdrop-filter backdrop-blur-md h-screen w-full">
      <div className="bg-slate-100 min-w-[300px] shadow-2xl h-[180px] text-center p-6 rounded-md space-y-3">
        <h1 className="text-2xl font-semibold">Quiz Finished</h1>
        <p className="text-xl font-medium">Your Score: {score}</p>
        <button
          className="bg-blue-500 w-full rounded-md px-4 py-2 text-slate-200"
          onClick={() => window.location.reload()}
        >
          Retry
        </button>
      </div>
    </div>
  );
};

export default ButtonRetry;
