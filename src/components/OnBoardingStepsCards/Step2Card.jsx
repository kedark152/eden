import { Button } from "../Button";
export const Step2Card = ({ setSteps }) => {
  return (
    <>
      <div className="page-headings mt-3">
        <h1 className="text-center font-bold text-2xl md:text-3xl mb-3">
          Let's set up a Home for all your work
        </h1>
        <p className="text-center font-medium text-gray-400 text-base ">
          You can always create another workspace later
        </p>
      </div>
      <form className="card-1 flex flex-col w-3/4 md:w-2/4 lg:w-1/4 gap-2">
        <label
          htmlFor="workspace-name"
          className="block text-sm font-bold text-gray-600"
        >
          Workspace Name
        </label>
        <input
          type="text"
          id="workspace-name"
          placeholder="Eden"
          className="h-10 border-2 rounded-md border-gray-300 focus:border-purple-800 p-3 placeholder-gray-400"
        />
        <label
          htmlFor="display-name"
          className="mt-2 block  text-sm font-bold text-gray-600"
        >
          Workspace URL <span className="text-gray-400">(optional)</span>
        </label>
        <div className="flex">
          <input
            type="text"
            placeholder="www.eden.com/"
            disabled
            className="sm:w-2/3  w-4/5 border-2 border-gray-200  rounded-l-md text-center border-r-none "
          />
          <input
            type="text"
            id="display-name"
            placeholder="Example"
            className=" sm:w-3/4 w-1/2 h-10 border-2 rounded-tr-md rounded-br-md border-gray-300 focus:border-purple-800 p-3 placeholder-gray-400"
          />
        </div>
        <Button
          className="primary-solid p-3 my-1 w-full primary-bg-color hover:primary-bg-light-color text-white rounded-md"
          buttonText="Create Workspace"
          setSteps={setSteps}
        />
      </form>
    </>
  );
};
