export enum CheckStepVariant {
  BASIC,
  COMPLETED,
  ALREADY_FILLED,
  ACTIVE,
  ALREADY_CONNECTED,
}

interface ProgressCheckStepProps {
  variant: boolean;
}

export const ProgressCheckStep = ({ variant }: ProgressCheckStepProps) => {
  return (
    <div
      className={`${
        variant ? "active-indicator-already-filled" : "hidden"
      } w-[42px] h-[42px] flex justify-center items-center -ml-[5px]`}
    >
      <div className="w-8 h-8 active-indicator-completed flex justify-center items-center">
        <img src="/img/icon_check.svg" alt="check" className="w-4 h-4" />
      </div>
    </div>
  );
};
