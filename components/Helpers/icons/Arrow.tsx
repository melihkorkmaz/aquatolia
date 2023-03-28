import { twJoin } from "tailwind-merge";

interface ArrowProps {
  direction?: "left" | "right" | "up" | "down";
  className?: string;
  width?: number;
  height?: number;
}

export const Arrow = ({
  className,
  direction = "down",
  width = 5.7,
  height = 1.2,
}: ArrowProps) => {

  return (
    <svg
      width="10"
      height="5"
      viewBox="0 0 10 5"
      fill="none"
      className={twJoin(
        "fill-current", 
        className,
        direction === "left" && "rotate-90",
        direction === "up" && "rotate-180",
        direction === "right" && "rotate-[270deg]"
      )} 
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="9.18359"
        y="0.90918"
        width={width}
        height={height}
        transform="rotate(135 9.18359 0.90918)"
      />
      <rect
        x="5.08984"
        y="5"
        width={width}
        height={height}
        transform="rotate(-135 5.08984 5)"
      />
    </svg>
  );
};
