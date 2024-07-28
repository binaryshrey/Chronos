import { ChevronRight } from "lucide-react";

import { cn } from "../../lib/utils";
import AnimatedGradientText from "../../lib/animated-gradient-text";
function AnimatedHeaderText() {
  return (
    <div className="z-10 flex min-h-[4rem] items-center justify-center">
      <AnimatedGradientText>
        🎉 <hr className="mx-2 h-4 w-[1px] shrink-0 bg-gray-500" />{" "}
        <span>
          Introducing Chronos v1.0
        </span>
        <ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
      </AnimatedGradientText>
    </div>
  );
}

export default AnimatedHeaderText;