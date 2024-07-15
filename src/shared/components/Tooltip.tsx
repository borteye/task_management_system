type TooltipProps = {
  text: string;
  visible: boolean;
};

const Tooltip = ({ text, visible }: TooltipProps) => {
  return (
    <div
      className={`absolute left-full ml-6 py-1 px-2 hidden md:block bg-black text-white text-sm rounded-lg shadow-lg ${
        visible ? "opacity-100" : "opacity-0"
      } transition-opacity duration-300`}
      style={{ whiteSpace: "nowrap" }}
    >
      {text}
    </div>
  );
};

export default Tooltip;
