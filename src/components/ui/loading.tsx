import { Loader2 } from "lucide-react";

const Loading = ({
  color,
  size,
  fullscreen,
}: {
  color?: string;
  size?: number;
  fullscreen?: boolean;
}) => {
  return (
    <div
      className={`flex justify-center items-center size-fit animate-spin ${
        fullscreen && "h-screen w-screen"
      }`}
    >
      <Loader2 color={color} size={size} />
    </div>
  );
};

export default Loading;
