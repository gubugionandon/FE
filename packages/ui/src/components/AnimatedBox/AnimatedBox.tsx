import { HTMLMotionProps, motion } from 'framer-motion';
import * as React from 'react';
import { cn } from '../../utils/cn';

export type AnimatedBoxProps = Omit<HTMLMotionProps<'div'>, 'ref'>;

const AnimatedBox = React.forwardRef<HTMLDivElement, AnimatedBoxProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        className={cn('h-24 w-24 rounded-lg bg-blue-500', className)}
        whileHover={{ scale: 1.2, rotate: 90 }}
        whileTap={{ scale: 0.8, rotate: -90, borderRadius: '100%' }}
        transition={{ type: 'spring', stiffness: 400, damping: 17 }}
        {...props}
      >
        {children}
      </motion.div>
    );
  },
);
AnimatedBox.displayName = 'AnimatedBox';

export { AnimatedBox };
