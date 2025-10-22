import type { Meta, StoryObj } from '@storybook/react';
import { Typography } from '../components/Typography/Typography';

const meta: Meta = {
  title: 'Design System/Typography',
  parameters: {
    layout: 'padded',
  },
};

export default meta;
type Story = StoryObj;

export const TypographyShowcase: Story = {
  render: () => (
    <div className="space-y-12">
      {/* Title 계층 */}
      <div>
        <h2 className="text-headline-2xl-semibold mb-6 text-gray-600">Title</h2>
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="w-32 text-sm text-gray-500">title-4xl-bold</div>
            <Typography variant="title-4xl-bold">Ag bold</Typography>
            <div className="text-xs text-gray-400">32px / 700</div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-32 text-sm text-gray-500">title-4xl-semibold</div>
            <Typography variant="title-4xl-semibold">Ag semibold</Typography>
            <div className="text-xs text-gray-400">32px / 600</div>
          </div>
        </div>
      </div>

      {/* Headline 계층 */}
      <div>
        <h2 className="text-headline-2xl-semibold mb-6 text-gray-600">
          Headline
        </h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-body-md-semibold mb-3 text-gray-500">
              3xl (24px)
            </h3>
            <div className="space-y-3">
              <div className="flex items-center gap-4">
                <div className="w-32 text-sm text-gray-500">
                  headline-3xl-regular
                </div>
                <Typography variant="headline-3xl-regular">
                  Ag regular
                </Typography>
                <div className="text-xs text-gray-400">24px / 400</div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-32 text-sm text-gray-500">
                  headline-3xl-medium
                </div>
                <Typography variant="headline-3xl-medium">Ag medium</Typography>
                <div className="text-xs text-gray-400">24px / 500</div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-32 text-sm text-gray-500">
                  headline-3xl-semibold
                </div>
                <Typography variant="headline-3xl-semibold">
                  Ag semibold
                </Typography>
                <div className="text-xs text-gray-400">24px / 600</div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-body-md-semibold mb-3 text-gray-500">
              2xl (22px)
            </h3>
            <div className="space-y-3">
              <div className="flex items-center gap-4">
                <div className="w-32 text-sm text-gray-500">
                  headline-2xl-regular
                </div>
                <Typography variant="headline-2xl-regular">
                  Ag regular
                </Typography>
                <div className="text-xs text-gray-400">22px / 400</div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-32 text-sm text-gray-500">
                  headline-2xl-medium
                </div>
                <Typography variant="headline-2xl-medium">Ag medium</Typography>
                <div className="text-xs text-gray-400">22px / 500</div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-32 text-sm text-gray-500">
                  headline-2xl-semibold
                </div>
                <Typography variant="headline-2xl-semibold">
                  Ag semibold
                </Typography>
                <div className="text-xs text-gray-400">22px / 600</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Body 계층 */}
      <div>
        <h2 className="text-headline-2xl-semibold mb-6 text-gray-600">Body</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-body-md-semibold mb-3 text-gray-500">
              xl (20px)
            </h3>
            <div className="space-y-3">
              <div className="flex items-center gap-4">
                <div className="w-32 text-sm text-gray-500">
                  body-xl-regular
                </div>
                <Typography variant="body-xl-regular">Ag regular</Typography>
                <div className="text-xs text-gray-400">20px / 400</div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-32 text-sm text-gray-500">body-xl-medium</div>
                <Typography variant="body-xl-medium">Ag medium</Typography>
                <div className="text-xs text-gray-400">20px / 500</div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-32 text-sm text-gray-500">
                  body-xl-semibold
                </div>
                <Typography variant="body-xl-semibold">Ag semibold</Typography>
                <div className="text-xs text-gray-400">20px / 600</div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-body-md-semibold mb-3 text-gray-500">
              lg (18px)
            </h3>
            <div className="space-y-3">
              <div className="flex items-center gap-4">
                <div className="w-32 text-sm text-gray-500">
                  body-lg-regular
                </div>
                <Typography variant="body-lg-regular">Ag regular</Typography>
                <div className="text-xs text-gray-400">18px / 400</div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-32 text-sm text-gray-500">body-lg-medium</div>
                <Typography variant="body-lg-medium">Ag medium</Typography>
                <div className="text-xs text-gray-400">18px / 500</div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-32 text-sm text-gray-500">
                  body-lg-semibold
                </div>
                <Typography variant="body-lg-semibold">Ag semibold</Typography>
                <div className="text-xs text-gray-400">18px / 600</div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-body-md-semibold mb-3 text-gray-500">
              md (16px)
            </h3>
            <div className="space-y-3">
              <div className="flex items-center gap-4">
                <div className="w-32 text-sm text-gray-500">
                  body-md-regular
                </div>
                <Typography variant="body-md-regular">Ag regular</Typography>
                <div className="text-xs text-gray-400">16px / 400</div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-32 text-sm text-gray-500">body-md-medium</div>
                <Typography variant="body-md-medium">Ag medium</Typography>
                <div className="text-xs text-gray-400">16px / 500</div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-32 text-sm text-gray-500">
                  body-md-semibold
                </div>
                <Typography variant="body-md-semibold">Ag semibold</Typography>
                <div className="text-xs text-gray-400">16px / 600</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Caption 계층 */}
      <div>
        <h2 className="text-headline-2xl-semibold mb-6 text-gray-600">
          Caption
        </h2>
        <div className="space-y-3">
          <div className="flex items-center gap-4">
            <div className="w-32 text-sm text-gray-500">caption-sm-regular</div>
            <Typography variant="caption-sm-regular">Ag regular</Typography>
            <div className="text-xs text-gray-400">14px / 400</div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-32 text-sm text-gray-500">caption-sm-medium</div>
            <Typography variant="caption-sm-medium">Ag medium</Typography>
            <div className="text-xs text-gray-400">14px / 500</div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-32 text-sm text-gray-500">
              caption-sm-semibold
            </div>
            <Typography variant="caption-sm-semibold">Ag semibold</Typography>
            <div className="text-xs text-gray-400">14px / 600</div>
          </div>
        </div>
      </div>
    </div>
  ),
};
