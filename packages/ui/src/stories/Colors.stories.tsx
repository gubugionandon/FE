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
        <h1 className="text-title-4xl text-grey-900 dark:text-grey-0">
          Color Palette
        </h1>
        <p className="text-body-md text-grey-600 dark:text-grey-400 mt-2">
          Use the theme switcher in the toolbar to toggle between light and dark
          modes.
        </p>
      </div>

      {/* Yellow 컬러 팔레트 */}
      <div>
        <h2 className="text-headline-2xl-semibold text-grey-900 dark:text-grey-0 mb-6">
          Yellow Palette
        </h2>

        {/* Gradation */}
        <div className="mb-8">
          <h3 className="text-body-md-semibold text-grey-700 dark:text-grey-300 mb-4">
            Gradation
          </h3>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            <div className="space-y-2">
              <div className="border-grey-300 dark:border-grey-700 h-16 w-full rounded-lg border bg-yellow-600"></div>
              <div className="text-grey-800 dark:text-grey-200 text-sm font-medium">
                Yellow 600
              </div>
              <div className="text-grey-500 dark:text-grey-400 text-xs">
                #E8AE00
              </div>
            </div>
            <div className="space-y-2">
              <div className="border-grey-300 dark:border-grey-700 h-16 w-full rounded-lg border bg-yellow-700"></div>
              <div className="text-grey-800 dark:text-grey-200 text-sm font-medium">
                Yellow 700
              </div>
              <div className="text-grey-500 dark:text-grey-400 text-xs">
                #D29A00
              </div>
            </div>
            <div className="space-y-2">
              <div className="border-grey-300 dark:border-grey-700 h-16 w-full rounded-lg border bg-yellow-800"></div>
              <div className="text-grey-800 dark:text-grey-200 text-sm font-medium">
                Yellow 800
              </div>
              <div className="text-grey-500 dark:text-grey-400 text-xs">
                #BD8700
              </div>
            </div>
            <div className="space-y-2">
              <div className="border-grey-300 dark:border-grey-700 h-16 w-full rounded-lg border bg-yellow-900"></div>
              <div className="text-grey-800 dark:text-grey-200 text-sm font-medium">
                Yellow 900
              </div>
              <div className="text-grey-500 dark:text-grey-400 text-xs">
                #A67100
              </div>
            </div>
          </div>
        </div>

        {/* Primary */}
        <div className="mb-8">
          <h3 className="text-body-md-semibold text-grey-700 dark:text-grey-300 mb-4">
            Primary
          </h3>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <div className="border-grey-300 dark:border-grey-700 h-20 w-full rounded-lg border bg-yellow-500"></div>
              <div className="text-grey-800 dark:text-grey-200 text-sm font-medium">
                Yellow 500
              </div>
              <div className="text-grey-500 dark:text-grey-400 text-xs">
                #FFBF00
              </div>
            </div>
          </div>
        </div>

        {/* Secondary */}
        <div>
          <h3 className="text-body-md-semibold text-grey-700 dark:text-grey-300 mb-4">
            Secondary
          </h3>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
            <div className="space-y-2">
              <div className="border-grey-300 dark:border-grey-700 h-16 w-full rounded-lg border bg-yellow-400"></div>
              <div className="text-grey-800 dark:text-grey-200 text-sm font-medium">
                Yellow 400
              </div>
              <div className="text-grey-500 dark:text-grey-400 text-xs">
                #FFCC33
              </div>
            </div>
            <div className="space-y-2">
              <div className="border-grey-300 dark:border-grey-700 h-16 w-full rounded-lg border bg-yellow-300"></div>
              <div className="text-grey-800 dark:text-grey-200 text-sm font-medium">
                Yellow 300
              </div>
              <div className="text-grey-500 dark:text-grey-400 text-xs">
                #FFD454
              </div>
            </div>
            <div className="space-y-2">
              <div className="border-grey-300 dark:border-grey-700 h-16 w-full rounded-lg border bg-yellow-200"></div>
              <div className="text-grey-800 dark:text-grey-200 text-sm font-medium">
                Yellow 200
              </div>
              <div className="text-grey-500 dark:text-grey-400 text-xs">
                #FFE28A
              </div>
            </div>
            <div className="space-y-2">
              <div className="border-grey-300 dark:border-grey-700 h-16 w-full rounded-lg border bg-yellow-100"></div>
              <div className="text-grey-800 dark:text-grey-200 text-sm font-medium">
                Yellow 100
              </div>
              <div className="text-grey-500 dark:text-grey-400 text-xs">
                #FFEBB0
              </div>
            </div>
            <div className="space-y-2">
              <div className="border-grey-300 dark:border-grey-700 h-16 w-full rounded-lg border bg-yellow-50"></div>
              <div className="text-grey-800 dark:text-grey-200 text-sm font-medium">
                Yellow 50
              </div>
              <div className="text-grey-500 dark:text-grey-400 text-xs">
                #FFF9E6
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Grey 컬러 팔레트 */}
      <div>
        <h2 className="text-headline-2xl-semibold text-grey-900 dark:text-grey-0 mb-6">
          Grey Scale
        </h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6">
          <div className="space-y-2">
            <div className="bg-grey-1000 border-grey-300 dark:border-grey-700 h-16 w-full rounded-lg border"></div>
            <div className="text-grey-800 dark:text-grey-200 text-sm font-medium">
              Grey 1000
            </div>
            <div className="text-grey-500 dark:text-grey-400 text-xs">
              #FFFFFF
            </div>
          </div>
          <div className="space-y-2">
            <div className="bg-grey-950 border-grey-300 dark:border-grey-700 h-16 w-full rounded-lg border"></div>
            <div className="text-grey-800 dark:text-grey-200 text-sm font-medium">
              Grey 950
            </div>
            <div className="text-grey-500 dark:text-grey-400 text-xs">
              #FCFCFC
            </div>
          </div>
          <div className="space-y-2">
            <div className="bg-grey-900 border-grey-300 dark:border-grey-700 h-16 w-full rounded-lg border"></div>
            <div className="text-grey-800 dark:text-grey-200 text-sm font-medium">
              Grey 900
            </div>
            <div className="text-grey-500 dark:text-grey-400 text-xs">
              #F9F8F7
            </div>
          </div>
          <div className="space-y-2">
            <div className="bg-grey-800 border-grey-300 dark:border-grey-700 h-16 w-full rounded-lg border"></div>
            <div className="text-grey-800 dark:text-grey-200 text-sm font-medium">
              Grey 800
            </div>
            <div className="text-grey-500 dark:text-grey-400 text-xs">
              #EFEEED
            </div>
          </div>
          <div className="space-y-2">
            <div className="bg-grey-700 border-grey-300 dark:border-grey-700 h-16 w-full rounded-lg border"></div>
            <div className="text-grey-800 dark:text-grey-200 text-sm font-medium">
              Grey 700
            </div>
            <div className="text-grey-500 dark:text-grey-400 text-xs">
              #E3E1DF
            </div>
          </div>
          <div className="space-y-2">
            <div className="bg-grey-600 border-grey-300 dark:border-grey-700 h-16 w-full rounded-lg border"></div>
            <div className="text-grey-800 dark:text-grey-200 text-sm font-medium">
              Grey 600
            </div>
            <div className="text-grey-500 dark:text-grey-400 text-xs">
              #C6C5C3
            </div>
          </div>
          <div className="space-y-2">
            <div className="bg-grey-500 border-grey-300 dark:border-grey-700 h-16 w-full rounded-lg border"></div>
            <div className="text-grey-800 dark:text-grey-200 text-sm font-medium">
              Grey 500
            </div>
            <div className="text-grey-500 dark:text-grey-400 text-xs">
              #A8A7A4
            </div>
          </div>
          <div className="space-y-2">
            <div className="bg-grey-400 border-grey-300 dark:border-grey-700 h-16 w-full rounded-lg border"></div>
            <div className="text-grey-800 dark:text-grey-200 text-sm font-medium">
              Grey 400
            </div>
            <div className="text-grey-500 dark:text-grey-400 text-xs">
              #7E7E7B
            </div>
          </div>
          <div className="space-y-2">
            <div className="bg-grey-300 border-grey-300 dark:border-grey-700 h-16 w-full rounded-lg border"></div>
            <div className="text-grey-800 dark:text-grey-200 text-sm font-medium">
              Grey 300
            </div>
            <div className="text-grey-500 dark:text-grey-400 text-xs">
              #6A6968
            </div>
          </div>
          <div className="space-y-2">
            <div className="bg-grey-200 border-grey-300 dark:border-grey-700 h-16 w-full rounded-lg border"></div>
            <div className="text-grey-800 dark:text-grey-200 text-sm font-medium">
              Grey 200
            </div>
            <div className="text-grey-500 dark:text-grey-400 text-xs">
              #3C3B3A
            </div>
          </div>
          <div className="space-y-2">
            <div className="bg-grey-100 border-grey-300 dark:border-grey-700 h-16 w-full rounded-lg border"></div>
            <div className="text-grey-800 dark:text-grey-200 text-sm font-medium">
              Grey 100
            </div>
            <div className="text-grey-500 dark:text-grey-400 text-xs">
              #2C2C2C
            </div>
          </div>
          <div className="space-y-2">
            <div className="bg-grey-50 border-grey-300 dark:border-grey-700 h-16 w-full rounded-lg border"></div>
            <div className="text-grey-800 dark:text-grey-200 text-sm font-medium">
              Grey 50
            </div>
            <div className="text-grey-500 dark:text-grey-400 text-xs">
              #191918
            </div>
          </div>
          <div className="space-y-2">
            <div className="bg-grey-0 border-grey-300 dark:border-grey-700 h-16 w-full rounded-lg border"></div>
            <div className="text-grey-800 dark:text-grey-200 text-sm font-medium">
              Grey 0
            </div>
            <div className="text-grey-500 dark:text-grey-400 text-xs">
              #131312
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
};
