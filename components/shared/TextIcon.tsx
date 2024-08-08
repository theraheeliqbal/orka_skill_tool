export type TextIconProps = {
  icon?: React.ReactNode;
  label?: string;
  labelClassName?: string;
  onClick?: () => void;
  className?: string;
};

const TextIcon = ({
  icon,
  label,
  labelClassName = "",
  onClick,
  className = "",
}: TextIconProps) => {
  return (
    <button
      className={`flex items-center justify-between gap-1 focus:outline-none ${className}`}
      onClick={onClick}
    >
      {icon && icon}
      {label && <p className={`text-xs ${labelClassName}`}>{label}</p>}
    </button>
  );
};

export default TextIcon;
