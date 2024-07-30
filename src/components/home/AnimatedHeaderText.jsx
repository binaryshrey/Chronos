import { ChevronRight } from 'lucide-react';

import AnimatedGradientText from '../../lib/animated-gradient-text';
function AnimatedHeaderText() {
  return (
    <div className="z-10 flex min-h-[4rem] items-center justify-center">
      <AnimatedGradientText>
        🎉 <hr className="mx-2 h-4 w-[1px] shrink-0 bg-gray-500" /> <span>Introducing Chronos v1.0</span>
      </AnimatedGradientText>
    </div>
  );
}

export default AnimatedHeaderText;
