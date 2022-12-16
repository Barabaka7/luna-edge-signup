interface ProgressLineProps {
  status: boolean;
}

export const ProgressLine = ({ status }: ProgressLineProps) => {
  return (
    <div
      className={`h-12 ml-[15px] ${status ? "active-line" : "basic-line"}`}
    ></div>
  );
};
