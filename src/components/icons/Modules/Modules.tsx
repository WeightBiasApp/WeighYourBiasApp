// src/components/icons/Modules.tsx

interface Props {
  className?: string;
}

export const Modules = ({ className = "" }: Props): JSX.Element => {
  return (
    <img
      className={`w-[49.06px] h-[45.8px] ${className}`}
      alt="Modules"
      src="https://c.animaapp.com/mbkhdg5z7Qnrtt/img/group-40.png"
    />
  );
};
