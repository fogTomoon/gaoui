import { describe, expect, it } from 'vitest';

import { shallowMount } from '@vue/test-utils';
import button from '../button.vue';
// The component to test
describe('test button', () => {
  it('should render slot', () => {
    const wrapper = shallowMount(button, {
      slots: {
        default: 'easyest'
      }
    });
    // Assert the rendered text of the component
    expect(wrapper.text()).toContain('easyest');
  });
});

// describe('开始测试一', () => {
//   it('should be helloeasyest', () => {
//     expect('hello' + 'easyest').toBe('helloeasyest');
//   });
// });
