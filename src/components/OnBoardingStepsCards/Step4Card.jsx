import { Button } from "../Button";

export const Step4Card = ({ setSteps }) => {
  return (
    <>
      <div className="page-headings mt-3 onboarding-success-card">
        <i
          className={`material-icons text-[#664de5] flex items-center justify-center my-4`}
        >
          check_circle
        </i>
        <h1 className="text-center font-bold text-2xl md:text-3xl mb-3">
          Congratulations, Eren!
        </h1>

        <p className="text-center font-medium text-gray-400 text-base ">
          You have completed onboarding, you can start using Eden!
        </p>
      </div>
      <div className="flex flex-col w-1/2 sm:w-1/4 md:1/4 my-8 gap-2">
        <Button
          className="primary-solid p-3 my-1 w-full primary-bg-color hover:primary-bg-light-color text-white rounded-md"
          buttonText="Launch Eden"
          setSteps={setSteps}
        />
      </div>
    </>
  );
};
