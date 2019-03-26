import { shallowMount } from '@vue/test-utils';
import Triangle from '@/components/Triangle.vue';

describe('Triangle.vue', () => {
  const defaultValue = {
    direction: 'top',
    color: 'black',
  };

  it('should required `height` property', () => {
    const mockConsoleError = jest.spyOn(console, 'error').mockImplementationOnce(() => {});

    shallowMount(Triangle, {
      propsData: {
        width: '1px',
      }
    });

    expect(mockConsoleError.mock.calls[0][0]).toEqual(expect.stringContaining('Missing required prop: "height"'));

    mockConsoleError.mockRestore();
  });
  it('should required `width` property', () => {
    const mockConsoleError = jest.spyOn(console, 'error').mockImplementationOnce(() => {});

    shallowMount(Triangle, {
      propsData: {
        height: '1px',
      }
    });

    expect(mockConsoleError.mock.calls[0][0]).toEqual(expect.stringContaining('Missing required prop: "width"'));

    mockConsoleError.mockRestore();
  });
  it('should have default `direction` property', () => {
    const wrapper = shallowMount(Triangle, {
      propsData: {
        height: '1px',
        width: '1px',
      },
    });

    expect(wrapper.props('direction')).toBe(defaultValue.direction);
  });
  it('should have default `color` property', () => {
    const wrapper = shallowMount(Triangle, {
      propsData: {
        height: '1px',
        width: '1px',
      },
    });

    expect(wrapper.props('color')).toBe(defaultValue.color);
  });
  it('should have specify color on triangle when the color property setting', () => {
    const wrapper = shallowMount(Triangle, {
      propsData: {
        height: '1px',
        width: '1px',
        color: 'blue'
      },
    });

    expect(wrapper.element.style.borderBottomColor).toBe('blue');
  });
  it('should have top right direction', () => {
    const mockConsoleError = jest.spyOn(console, 'error').mockImplementationOnce(() => {});

    shallowMount(Triangle, {
      propsData: {
        height: '1px',
        width: '1px',
        direction: 'topRight'
      },
    });

    expect(mockConsoleError.mock.calls.length).toBe(0);

    mockConsoleError.mockRestore();
  });
  it('should have top left direction', () => {
    const mockConsoleError = jest.spyOn(console, 'error').mockImplementationOnce(() => {});

    shallowMount(Triangle, {
      propsData: {
        height: '1px',
        width: '1px',
        direction: 'topLeft'
      },
    });

    expect(mockConsoleError.mock.calls.length).toBe(0);

    mockConsoleError.mockRestore();
  });
  it('should have bottom right direction', () => {
    const mockConsoleError = jest.spyOn(console, 'error').mockImplementationOnce(() => {});

    shallowMount(Triangle, {
      propsData: {
        height: '1px',
        width: '1px',
        direction: 'bottomRight'
      },
    });

    expect(mockConsoleError.mock.calls.length).toBe(0);

    mockConsoleError.mockRestore();
  });
  it('should have bottom left direction', () => {
    const mockConsoleError = jest.spyOn(console, 'error').mockImplementationOnce(() => {});

    shallowMount(Triangle, {
      propsData: {
        height: '1px',
        width: '1px',
        direction: 'bottomLeft'
      },
    });

    expect(mockConsoleError.mock.calls.length).toBe(0);

    mockConsoleError.mockRestore();
  });
  it('should zero width and height', () => {
    const height = 1;
    const width = 1;
    const unit = 'px';
    const wrapper = shallowMount(Triangle, {
      propsData: {
        height: height + unit,
        width: width + unit,
      },
    });

    expect(wrapper.element.style.height).toBe('0px');
    expect(wrapper.element.style.width).toBe('0px');
  });
  it('should have top right direction triangle when the direction property is `topRight`', () => {
    const height = 1;
    const width = 1;
    const unit = 'px';
    const wrapper = shallowMount(Triangle, {
      propsData: {
        height: height + unit,
        width: width + unit,
        direction: 'topRight',
      },
    });

    expect(wrapper.element.style.border).toEqual(expect.anything());

    expect(wrapper.element.style.borderTopWidth).toBe(height + unit);
    
    expect(wrapper.element.style.borderLeftWidth).toBe(width + unit);
    expect(wrapper.element.style.borderLeftColor).toBe('transparent');
    
    expect(wrapper.element.style.borderRight).toBe('');
  });
  it('should have top left direction triangle when the direction property is `topLeft`', () => {
    const height = 1;
    const width = 1;
    const unit = 'px';
    const wrapper = shallowMount(Triangle, {
      propsData: {
        height: height + unit,
        width: width + unit,
        direction: 'topLeft',
      },
    });

    expect(wrapper.element.style.border).toEqual(expect.anything());

    expect(wrapper.element.style.borderTopWidth).toBe(height + unit);
    
    expect(wrapper.element.style.borderRightWidth).toBe(width + unit);
    expect(wrapper.element.style.borderRightColor).toBe('transparent');
    
    expect(wrapper.element.style.borderLeft).toBe('');
  });
  it('should have bottom right direction triangle when the direction property is `bottomRight`', () => {
    const height = 1;
    const width = 1;
    const unit = 'px';
    const wrapper = shallowMount(Triangle, {
      propsData: {
        height: height + unit,
        width: width + unit,
        direction: 'bottomRight',
      },
    });

    expect(wrapper.element.style.border).toEqual(expect.anything());

    expect(wrapper.element.style.borderBottomWidth).toBe(height + unit);
    
    expect(wrapper.element.style.borderLeftWidth).toBe(width + unit);
    expect(wrapper.element.style.borderLeftColor).toBe('transparent');
    
    expect(wrapper.element.style.borderRight).toBe('');
  });
  it('should have bottom left direction triangle when the direction property is `bottomLeft`', () => {
    const height = 1;
    const width = 1;
    const unit = 'px';
    const wrapper = shallowMount(Triangle, {
      propsData: {
        height: height + unit,
        width: width + unit,
        direction: 'bottomLeft',
      },
    });

    expect(wrapper.element.style.border).toEqual(expect.anything());

    expect(wrapper.element.style.borderBottomWidth).toBe(height + unit);
    
    expect(wrapper.element.style.borderRightWidth).toBe(width + unit);
    expect(wrapper.element.style.borderRightColor).toBe('transparent');
    
    expect(wrapper.element.style.borderLeft).toBe('');
  });
  it('should have top direction triangle when the direction property is `top`', () => {
    const height = 1;
    const width = 1;
    const unit = 'px';
    const wrapper = shallowMount(Triangle, {
      propsData: {
        height: height + unit,
        width: width + unit,
        direction: 'top',
      },
    });

    expect(wrapper.element.style.border).toEqual(expect.anything());

    expect(wrapper.element.style.borderBottomWidth).toBe(height + unit);
    
    expect(wrapper.element.style.borderLeftWidth).toBe((width / 2) + unit);
    expect(wrapper.element.style.borderLeftColor).toBe('transparent');
    
    expect(wrapper.element.style.borderRightWidth).toBe((height / 2) + unit);
    expect(wrapper.element.style.borderRightColor).toBe('transparent');
  });
  it('should have bottom direction triangle when the direction property is `bottom`', () => {
    const height = 1;
    const width = 1;
    const unit = 'px';
    const wrapper = shallowMount(Triangle, {
      propsData: {
        height: height + unit,
        width: width + unit,
        direction: 'bottom',
      },
    });

    expect(wrapper.element.style.border).toEqual(expect.anything());

    expect(wrapper.element.style.borderTopWidth).toBe(height + unit);
    
    expect(wrapper.element.style.borderLeftWidth).toBe((width / 2) + unit);
    expect(wrapper.element.style.borderLeftColor).toBe('transparent');
    
    expect(wrapper.element.style.borderRightWidth).toBe((height / 2) + unit);
    expect(wrapper.element.style.borderRightColor).toBe('transparent');
  });
  it('should have left direction triangle when the direction property is `left`', () => {
    const height = 1;
    const width = 1;
    const unit = 'px';
    const wrapper = shallowMount(Triangle, {
      propsData: {
        height: height + unit,
        width: width + unit,
        direction: 'left'
      },
    });

    expect(wrapper.element.style.border).toEqual(expect.anything());

    expect(wrapper.element.style.borderRightWidth).toBe(height + unit);
    
    expect(wrapper.element.style.borderTopWidth).toBe((width / 2) + unit);
    expect(wrapper.element.style.borderTopColor).toBe('transparent');
    
    expect(wrapper.element.style.borderBottomWidth).toBe((height / 2) + unit);
    expect(wrapper.element.style.borderBottomColor).toBe('transparent');
  });
  it('should have right direction triangle when the direction property is `right`', () => {
    const height = 1;
    const width = 1;
    const unit = 'px';
    const wrapper = shallowMount(Triangle, {
      propsData: {
        height: height + unit,
        width: width + unit,
        direction: 'right',
      },
    });

    expect(wrapper.element.style.border).toEqual(expect.anything());

    expect(wrapper.element.style.borderLeftWidth).toBe(height + unit);
    
    expect(wrapper.element.style.borderTopWidth).toBe((width / 2) + unit);
    expect(wrapper.element.style.borderTopColor).toBe('transparent');
    
    expect(wrapper.element.style.borderBottomWidth).toBe((height / 2) + unit);
    expect(wrapper.element.style.borderBottomColor).toBe('transparent');
  });
});
