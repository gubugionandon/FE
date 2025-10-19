import type { Meta, StoryObj } from '@storybook/react';
import { ThemeToggle } from '../components/ThemeToggle/ThemeToggle';

const meta: Meta<typeof ThemeToggle> = {
    title: 'Design System/Theme Toggle',
    component: ThemeToggle,
    parameters: {
        layout: 'centered',
    },
};

export default meta;
type Story = StoryObj<typeof ThemeToggle>;

export const Default: Story = {
    args: {},
};

export const ThemeShowcase: Story = {
    render: () => (
        <div className="space-y-8 p-8">
            <div className="flex items-center justify-between">
                <h2 className="text-headline-2xl-semibold">테마 토글</h2>
                <ThemeToggle />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Light Mode Preview */}
                <div className="space-y-4">
                    <h3 className="text-body-md-semibold">Light Mode</h3>
                    <div className="p-6 bg-grey-0 dark:bg-grey-1000 rounded-lg border border-grey-300 dark:border-grey-700">
                        <div className="space-y-4">
                            <div className="p-4 bg-yellow-500 dark:bg-yellow-500 rounded">
                                <p className="text-grey-1000 dark:text-grey-0">Primary Yellow</p>
                            </div>
                            <div className="p-4 bg-grey-100 dark:bg-grey-900 rounded">
                                <p className="text-grey-800 dark:text-grey-200">Light Grey Background</p>
                            </div>
                            <div className="p-4 bg-grey-800 dark:bg-grey-200 rounded">
                                <p className="text-grey-0 dark:text-grey-1000">Dark Grey Background</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Dark Mode Preview */}
                <div className="space-y-4">
                    <h3 className="text-body-md-semibold">Dark Mode</h3>
                    <div className="p-6 bg-grey-1000 dark:bg-grey-0 rounded-lg border border-grey-700 dark:border-grey-300">
                        <div className="space-y-4">
                            <div className="p-4 bg-yellow-500 dark:bg-yellow-500 rounded">
                                <p className="text-grey-0 dark:text-grey-1000">Primary Yellow</p>
                            </div>
                            <div className="p-4 bg-grey-900 dark:bg-grey-100 rounded">
                                <p className="text-grey-200 dark:text-grey-800">Light Grey Background</p>
                            </div>
                            <div className="p-4 bg-grey-200 dark:bg-grey-800 rounded">
                                <p className="text-grey-1000 dark:text-grey-0">Dark Grey Background</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ),
};
