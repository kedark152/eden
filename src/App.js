import "./App.css";
import { ProgressBar } from "./components/ProgressBar";
import { useState } from "react";
import brandLogo from "./asset/brand-logo.png";
import { Step4Card } from "./components/OnBoardingStepsCards/Step4Card";
import { Step3Card } from "./components/OnBoardingStepsCards/Step3Card";
import { Step2Card } from "./components/OnBoardingStepsCards/Step2Card";
import { Step1Card } from "./components/OnBoardingStepsCards/Step1Card";

function App() {
  const [step, setSteps] = useState(1);

  if (step > 4) {
    setSteps(4);
    alert("Thanks for completing all steps, Please reload to start over");
  }

  return (
    <div className="App">
      <div className="container-main flex flex-col items-center">
        <div className="brand mt-10 flex items-center justify-center">
          <img src={brandLogo} alt="brand-logo" />
          <span className="text-4xl font-bold ">Eden</span>
        </div>
        <div className="progress-bar-container my-12">
          <ProgressBar step={step} setSteps={setSteps} />
        </div>

        {
          {
            1: <Step1Card setSteps={setSteps} />,
            2: <Step2Card setSteps={setSteps} />,
            3: <Step3Card setSteps={setSteps} />,
            4: <Step4Card setSteps={setSteps} />,
          }[step]
        }
      </div>
    </div>
  );
}

export default App;
