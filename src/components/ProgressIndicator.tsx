import { useState } from "react";
import {
  ProgressCheckStep,
  CheckStepVariant,
} from "./ProgressIndicatorsGraphics.tsx/ProgressCheckStep";
import { ProgressLine } from "./ProgressIndicatorsGraphics.tsx/ProgressLine";

export const ProgressIndicator = () => {
  const [isAlreadyFilled, setIsAlreadyFilled] = useState(false);
  const [isCompleted, setIsCompleted] = useState(true);
  const [isActive, setIsActive] = useState(true);

  return (
    <div className="flex flex-col justify-between items-start font-inter">
      <div className="flex items-center gap-4">
        <ProgressCheckStep variant={isCompleted} />
        <span className="active-text">Welcome</span>
      </div>
      <ProgressLine status={isActive} />
      <div className="flex items-center gap-4">
        <ProgressCheckStep variant={isAlreadyFilled} />
        <span className="text-mdDarkBlue-60">Connect your Shopify store</span>
      </div>
      <ProgressLine status={!isActive} />
      <div className="flex items-center gap-4">
        <ProgressCheckStep variant={isAlreadyFilled} />
        <span className="text-mdDarkBlue-60">
          Connect your customer support email
        </span>
      </div>
      <ProgressLine status={!isActive} />
      <div className="flex items-center gap-4">
        <ProgressCheckStep variant={isAlreadyFilled} />
        <span className="text-mdDarkBlue-60">Done</span>
      </div>
    </div>
  );
};
