import { ReactNode } from "react";
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export default function AnimatedGradientText({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "group relative mx-auto flex max-w-fit flex-row items-center justify-center rounded-2xl bg-white/40 px-4 py-1.5 text-sm font-medium backdrop-blur-sm transition-shadow duration-500 ease-out [--bg-size:300%]  dark:bg-black/10",
        className,
      )}
    >
      {children}
    </div>
  );
}
