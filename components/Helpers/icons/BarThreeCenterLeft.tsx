import { IconProps } from "@/types/IconProps";


export default function BarThreeCenterLeft({ width = 14, height = 9 }: IconProps) {
  return (
    <svg className="fill-current"
      width={width}
      height={height}
      viewBox="0 0 14 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="14" height="1" />
      <rect y="8" width="14" height="1" />
      <rect y="4" width="10" height="1" />
    </svg>
  );
}
