import { Button } from "../Button";
import { useState } from "react";
export const Step3Card = ({ setSteps }) => {
  const [activeCard, setActiveCard] = useState(1);
  return (
    <>
      <div className="page-headings mt-3">
        <h1 className="text-center font-bold text-2xl md:text-3xl mb-3">
          How are you planning to use Eden?
        </h1>
        <p className="text-center font-medium text-gray-400 text-base ">
          We'll streamline your setup experience accordingly.
        </p>
      </div>
      <div className="flex flex-col w-1/4 mt-8 gap-2">
        <div className="flex gap-2">
          <div
            className={`for-myself-card hover:bg-gray-100 rounded-md cursor-pointer border-2 p-3 h-[160px] w-[165px] flex flex-col justify-between ${
              activeCard === 1 && "border-[#664de5]"
            }`}
            onClick={() => setActiveCard(1)}
          >
            <i
              className={`material-icons ${
                activeCard === 1 && "text-[#664de5]"
              }`}
            >
              person
            </i>
            <p className="text-1xl font-bold">For Myself</p>
            <p className="text-sm font-bold  text-gray-400">
              Write Better, Think More Clearly, Stay Organized
            </p>
          </div>
          <div
            className={`with-team-card hover:bg-gray-100 rounded-md border-2 cursor-pointer p-3 h-[160px] w-[165px] flex flex-col justify-between ${
              activeCard === 2 && "border-[#664de5]"
            }`}
            onClick={() => setActiveCard(2)}
          >
            <i
              className={`material-icons ${
                activeCard === 2 && "text-[#664de5]"
              }`}
            >
              groups
            </i>
            <p className="text-1xl font-bold">With my team</p>
            <p className="text-sm font-bold  text-gray-400">
              Wikis, Docs, Tasks & Projects, all in one Place
            </p>
          </div>
        </div>
        <Button
          className="primary-solid p-3 my-1 w-full"
          buttonText="Create Workspace"
          setSteps={setSteps}
        />
      </div>
    </>
  );
};
