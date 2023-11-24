const Progress = ({ timer }: { timer: number }) => {
  return (
    <div className="h-2 w-full rounded-full bg-gray-300 my-4">
      <div
        className={`bg-blue-500 h-full rounded-full`}
        style={{
          width: `${(timer / 20) * 100}%`,
          transition: "1s linear",
        }}
      ></div>
    </div>
  );
};

export default Progress;
