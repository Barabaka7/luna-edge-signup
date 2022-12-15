import { ProgressCheckStep } from "./ProgressIndicatorsGraphics.tsx/ProgressCheckStep";
import { ProgressLine } from "./ProgressIndicatorsGraphics.tsx/ProgressLine";

export const ProgressIndicator = () => {
  return (
    <div className="flex flex-col justify-between items-start font-inter">
      <div className="flex items-center gap-4">
        <ProgressCheckStep />
        <span className="text-mdDarkBlue-60 font-medium active-indicator">
          Welcome
        </span>
      </div>
      <ProgressLine />
      <div className="flex items-center gap-4">
        <ProgressCheckStep />
        <span className="text-mdDarkBlue-60">Connect your Shopify store</span>
      </div>
      <ProgressLine />
      <div className="flex items-center gap-4">
        <ProgressCheckStep />
        <span className="text-mdDarkBlue-60">
          Connect your customer support email
        </span>
      </div>
      <ProgressLine />
      <div className="flex items-center gap-4">
        <ProgressCheckStep />
        <span className="text-mdDarkBlue-60">Done</span>
      </div>
    </div>
  );
};
