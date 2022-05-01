import { Story, Meta } from '@storybook/react/types-6-0'
import CartList, { CartListProps } from '.'

import mockItems from './mock'

export default {
  title: 'CartList',
  component: CartList,
  args: {
    items: mockItems,
    total: 'R$ 330,00',
  },
  argTypes: {
    items: {
      control: {
        type: 'array',
        options: {
          control: {
            type: 'object',
            options: {
              title: {
                control: {
                  type: 'text',
                },
              },
              price: {
                control: {
                  type: 'text',
                },
              },
              img: {
                control: {
                  type: 'text',
                },
              },
            },
          },
        },
      },
    },
  },
  parameters: {
    backgrounds: {
      default: 'won-dark',
    },
  },
} as Meta

export const Default: Story<CartListProps> = (args) => (
  <div style={{ maxWidth: 800 }}>
    <CartList {...args} />
  </div>
)