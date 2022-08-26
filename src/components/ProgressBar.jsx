export const ProgressBar = ({ setSteps, step }) => {
  return (
    <div className="progress-bar flex">
      {Array.from({ length: 4 }).map((item, index) => {
        return (
          <div key={index} className="relative flex items-center">
            <div
              className={`h-8 w-8 rounded-full flex items-center cursor-pointer
                 justify-center text-white ${
                   index + 1 <= step
                     ? "primary-bg-color"
                     : "bg-gray-50 border text-black"
                 } `}
              onClick={() => setSteps(index + 1)}
            >
              {index + 1}
            </div>
            {index < 3 && ( //to limit progress line till 4th step
              <div className="md:w-20 w-12 bg-gray-200 h-[2px] transition">
                <div
                  className={`primary-bg-color h-[2px] ${
                    index + 1 < step
                      ? "w-full"
                      : index + 1 === step
                      ? "w-1/2"
                      : "w-0"
                  }`}
                ></div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
