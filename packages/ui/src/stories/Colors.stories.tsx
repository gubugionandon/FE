import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta = {
    title: 'Design System/Colors',
    parameters: {
        layout: 'padded',
    },
};

export default meta;
type Story = StoryObj;

export const ColorPalette: Story = {
    render: () => (
        <div className="space-y-12">
            {/* 헤더 */}
            <div>
                <h1 className="text-title-4xl text-grey-900 dark:text-grey-0">Color Palette</h1>
                <p className="text-body-md text-grey-600 dark:text-grey-400 mt-2">
                    Use the theme switcher in the toolbar to toggle between light and dark modes.
                </p>
            </div>

            {/* Yellow 컬러 팔레트 */}
            <div>
                <h2 className="text-headline-2xl-semibold mb-6 text-grey-900 dark:text-grey-0">Yellow Palette</h2>

                {/* Gradation */}
                <div className="mb-8">
                    <h3 className="text-body-md-semibold mb-4 text-grey-700 dark:text-grey-300">Gradation</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="space-y-2">
                            <div className="w-full h-16 bg-yellow-600 rounded-lg border border-grey-300 dark:border-grey-700"></div>
                            <div className="text-sm font-medium text-grey-800 dark:text-grey-200">Yellow 600</div>
                            <div className="text-xs text-grey-500 dark:text-grey-400">#E8AE00</div>
                        </div>
                        <div className="space-y-2">
                            <div className="w-full h-16 bg-yellow-700 rounded-lg border border-grey-300 dark:border-grey-700"></div>
                            <div className="text-sm font-medium text-grey-800 dark:text-grey-200">Yellow 700</div>
                            <div className="text-xs text-grey-500 dark:text-grey-400">#D29A00</div>
                        </div>
                        <div className="space-y-2">
                            <div className="w-full h-16 bg-yellow-800 rounded-lg border border-grey-300 dark:border-grey-700"></div>
                            <div className="text-sm font-medium text-grey-800 dark:text-grey-200">Yellow 800</div>
                            <div className="text-xs text-grey-500 dark:text-grey-400">#BD8700</div>
                        </div>
                        <div className="space-y-2">
                            <div className="w-full h-16 bg-yellow-900 rounded-lg border border-grey-300 dark:border-grey-700"></div>
                            <div className="text-sm font-medium text-grey-800 dark:text-grey-200">Yellow 900</div>
                            <div className="text-xs text-grey-500 dark:text-grey-400">#A67100</div>
                        </div>
                    </div>
                </div>

                {/* Primary */}
                <div className="mb-8">
                    <h3 className="text-body-md-semibold mb-4 text-grey-700 dark:text-grey-300">Primary</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <div className="w-full h-20 bg-yellow-500 rounded-lg border border-grey-300 dark:border-grey-700"></div>
                            <div className="text-sm font-medium text-grey-800 dark:text-grey-200">Yellow 500</div>
                            <div className="text-xs text-grey-500 dark:text-grey-400">#FFBF00</div>
                        </div>
                    </div>
                </div>

                {/* Secondary */}
                <div>
                    <h3 className="text-body-md-semibold mb-4 text-grey-700 dark:text-grey-300">Secondary</h3>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                        <div className="space-y-2">
                            <div className="w-full h-16 bg-yellow-400 rounded-lg border border-grey-300 dark:border-grey-700"></div>
                            <div className="text-sm font-medium text-grey-800 dark:text-grey-200">Yellow 400</div>
                            <div className="text-xs text-grey-500 dark:text-grey-400">#FFCC33</div>
                        </div>
                        <div className="space-y-2">
                            <div className="w-full h-16 bg-yellow-300 rounded-lg border border-grey-300 dark:border-grey-700"></div>
                            <div className="text-sm font-medium text-grey-800 dark:text-grey-200">Yellow 300</div>
                            <div className="text-xs text-grey-500 dark:text-grey-400">#FFD454</div>
                        </div>
                        <div className="space-y-2">
                            <div className="w-full h-16 bg-yellow-200 rounded-lg border border-grey-300 dark:border-grey-700"></div>
                            <div className="text-sm font-medium text-grey-800 dark:text-grey-200">Yellow 200</div>
                            <div className="text-xs text-grey-500 dark:text-grey-400">#FFE28A</div>
                        </div>
                        <div className="space-y-2">
                            <div className="w-full h-16 bg-yellow-100 rounded-lg border border-grey-300 dark:border-grey-700"></div>
                            <div className="text-sm font-medium text-grey-800 dark:text-grey-200">Yellow 100</div>
                            <div className="text-xs text-grey-500 dark:text-grey-400">#FFEBB0</div>
                        </div>
                        <div className="space-y-2">
                            <div className="w-full h-16 bg-yellow-50 rounded-lg border border-grey-300 dark:border-grey-700"></div>
                            <div className="text-sm font-medium text-grey-800 dark:text-grey-200">Yellow 50</div>
                            <div className="text-xs text-grey-500 dark:text-grey-400">#FFF9E6</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Grey 컬러 팔레트 */}
            <div>
                <h2 className="text-headline-2xl-semibold mb-6 text-grey-900 dark:text-grey-0">Grey Scale</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    <div className="space-y-2">
                        <div className="w-full h-16 bg-grey-1000 rounded-lg border border-grey-300 dark:border-grey-700"></div>
                        <div className="text-sm font-medium text-grey-800 dark:text-grey-200">Grey 1000</div>
                        <div className="text-xs text-grey-500 dark:text-grey-400">#FFFFFF</div>
                    </div>
                    <div className="space-y-2">
                        <div className="w-full h-16 bg-grey-950 rounded-lg border border-grey-300 dark:border-grey-700"></div>
                        <div className="text-sm font-medium text-grey-800 dark:text-grey-200">Grey 950</div>
                        <div className="text-xs text-grey-500 dark:text-grey-400">#FCFCFC</div>
                    </div>
                    <div className="space-y-2">
                        <div className="w-full h-16 bg-grey-900 rounded-lg border border-grey-300 dark:border-grey-700"></div>
                        <div className="text-sm font-medium text-grey-800 dark:text-grey-200">Grey 900</div>
                        <div className="text-xs text-grey-500 dark:text-grey-400">#F9F8F7</div>
                    </div>
                    <div className="space-y-2">
                        <div className="w-full h-16 bg-grey-800 rounded-lg border border-grey-300 dark:border-grey-700"></div>
                        <div className="text-sm font-medium text-grey-800 dark:text-grey-200">Grey 800</div>
                        <div className="text-xs text-grey-500 dark:text-grey-400">#EFEEED</div>
                    </div>
                    <div className="space-y-2">
                        <div className="w-full h-16 bg-grey-700 rounded-lg border border-grey-300 dark:border-grey-700"></div>
                        <div className="text-sm font-medium text-grey-800 dark:text-grey-200">Grey 700</div>
                        <div className="text-xs text-grey-500 dark:text-grey-400">#E3E1DF</div>
                    </div>
                    <div className="space-y-2">
                        <div className="w-full h-16 bg-grey-600 rounded-lg border border-grey-300 dark:border-grey-700"></div>
                        <div className="text-sm font-medium text-grey-800 dark:text-grey-200">Grey 600</div>
                        <div className="text-xs text-grey-500 dark:text-grey-400">#C6C5C3</div>
                    </div>
                    <div className="space-y-2">
                        <div className="w-full h-16 bg-grey-500 rounded-lg border border-grey-300 dark:border-grey-700"></div>
                        <div className="text-sm font-medium text-grey-800 dark:text-grey-200">Grey 500</div>
                        <div className="text-xs text-grey-500 dark:text-grey-400">#A8A7A4</div>
                    </div>
                    <div className="space-y-2">
                        <div className="w-full h-16 bg-grey-400 rounded-lg border border-grey-300 dark:border-grey-700"></div>
                        <div className="text-sm font-medium text-grey-800 dark:text-grey-200">Grey 400</div>
                        <div className="text-xs text-grey-500 dark:text-grey-400">#7E7E7B</div>
                    </div>
                    <div className="space-y-2">
                        <div className="w-full h-16 bg-grey-300 rounded-lg border border-grey-300 dark:border-grey-700"></div>
                        <div className="text-sm font-medium text-grey-800 dark:text-grey-200">Grey 300</div>
                        <div className="text-xs text-grey-500 dark:text-grey-400">#6A6968</div>
                    </div>
                    <div className="space-y-2">
                        <div className="w-full h-16 bg-grey-200 rounded-lg border border-grey-300 dark:border-grey-700"></div>
                        <div className="text-sm font-medium text-grey-800 dark:text-grey-200">Grey 200</div>
                        <div className="text-xs text-grey-500 dark:text-grey-400">#3C3B3A</div>
                    </div>
                    <div className="space-y-2">
                        <div className="w-full h-16 bg-grey-100 rounded-lg border border-grey-300 dark:border-grey-700"></div>
                        <div className="text-sm font-medium text-grey-800 dark:text-grey-200">Grey 100</div>
                        <div className="text-xs text-grey-500 dark:text-grey-400">#2C2C2C</div>
                    </div>
                    <div className="space-y-2">
                        <div className="w-full h-16 bg-grey-50 rounded-lg border border-grey-300 dark:border-grey-700"></div>
                        <div className="text-sm font-medium text-grey-800 dark:text-grey-200">Grey 50</div>
                        <div className="text-xs text-grey-500 dark:text-grey-400">#191918</div>
                    </div>
                    <div className="space-y-2">
                        <div className="w-full h-16 bg-grey-0 rounded-lg border border-grey-300 dark:border-grey-700"></div>
                        <div className="text-sm font-medium text-grey-800 dark:text-grey-200">Grey 0</div>
                        <div className="text-xs text-grey-500 dark:text-grey-400">#131312</div>
                    </div>
                </div>
            </div>
        </div>
    ),
};
