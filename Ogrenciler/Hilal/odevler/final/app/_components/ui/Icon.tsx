import { ICONS } from "../../../constants/icons";
import { IconProps } from "../../../constants/types";
import clsx from "clsx";

const Icon = ({
  name,
  size,
  className = "",
  onClick,
}: IconProps) => {
  const iconSVG = ICONS[name];

  return !iconSVG ? (
  <span>icon not found</span>
  ) : (
    <span
      className={clsx("icon centered-aligned-flex-row m-0 p-0 text-green", onClick && "cursor-pointer", className)}
      style={
        size
          ? { width: `${size}px`, height: `${size}px`,  color: "var(--bs-body-color)",
            fill: "var(--bs-body-color)",  }
          : { fill: "var(--bs-body-color)"}
      }
      onClick={onClick}
    >
      {iconSVG}
    </span>
  );
};

export default Icon;
