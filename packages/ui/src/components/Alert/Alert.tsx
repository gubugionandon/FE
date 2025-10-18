import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '../../utils/cn';

const alertVariants = cva('relative w-full rounded-lg border p-4', {
  variants: {
    variant: {
      info: 'bg-blue-100 border-blue-200 text-blue-800',
      success: 'bg-green-100 border-green-200 text-green-800',
      warning: 'bg-yellow-100 border-yellow-200 text-yellow-800',
      error: 'bg-red-100 border-red-200 text-red-800',
    },
  },
  defaultVariants: {
    variant: 'info',
  },
});

export interface AlertProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof alertVariants> {}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <div
        ref={ref}
        role="alert"
        className={cn(alertVariants({ variant, className }))}
        {...props}
      />
    );
  },
);
Alert.displayName = 'Alert';

export { Alert, alertVariants };
