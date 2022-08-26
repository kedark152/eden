import { Button } from "../Button";
export const Step1Card = ({ setSteps }) => {
  return (
    <>
      <div className="page-headings mt-3">
        <h1 className="text-center font-bold text-2xl md:text-3xl mb-3">
          Welcome! First things first...
        </h1>
        <p className="text-center font-medium text-gray-400 text-base ">
          You can always change them later
        </p>
      </div>
      <form className="card-1 flex flex-col w-1/4 mt-8 gap-2">
        <label
          htmlFor="full-name"
          className="block text-sm font-bold text-gray-600"
        >
          Full Name
        </label>
        <input
          type="text"
          id="full-name"
          placeholder="Steve Jobs"
          className="h-10 border-2 rounded-md border-gray-300 focus:border-purple-800 p-3 placeholder-gray-400"
        />
        <label
          htmlFor="display-name"
          className="mt-2 block  text-sm font-bold text-gray-600"
        >
          Display Name
        </label>
        <input
          type="text"
          id="display-name"
          placeholder="Steve"
          className="h-10 border-2 rounded-md border-gray-300 focus:border-purple-800 p-3 placeholder-gray-400"
        />
        <Button
          className="primary-solid p-3 my-1 w-full primary-bg-color hover:primary-bg-light-color text-white rounded-md"
          buttonText="Create Workspace"
          setSteps={setSteps}
        />
      </form>
    </>
  );
};
