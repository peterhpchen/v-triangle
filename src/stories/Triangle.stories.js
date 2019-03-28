import { storiesOf } from '@storybook/vue'

import Triangle from '../components/Triangle';

import { withKnobs, number, select, color } from '@storybook/addon-knobs';

storiesOf('Triangle', module)
  .addDecorator(withKnobs)
  .add('Basic', () => ({
    components: { Triangle },
    props: {
        height: {
          type: Number,
          default: number('Height (px)', 64),
        },
        width: {
          type: Number,
          default: number('Width (px)', 64),
        },
        direction: {
            type: String,
            default: select('Direction', ['top', 'bottom', 'left', 'right', 'topLeft', 'topRight', 'bottomLeft', 'bottomRight'], 'top')
        },
        color: {
            type: String,
            default: color('Color', '#354951')
        }
    },
    computed: {
      height_() {
          return `${this.height}px`;
      },
      width_() {
          return `${this.width}px`;
      }
    },
    template: `<Triangle
      :height="height_"
      :width="width_"
      :direction="direction"
      :color="color"
    />`,
  }))
  .add('Top', () => ({
    components: { Triangle },
    props: {
        height: {
          type: Number,
          default: number('Height (px)', 64),
        },
        width: {
          type: Number,
          default: number('Width (px)', 64),
        },
        color: {
            type: String,
            default: color('Color', '#41b883')
        }
    },
    computed: {
      height_() {
          return `${this.height}px`;
      },
      width_() {
          return `${this.width}px`;
      }
    },
    template: `<Triangle
      :height="height_"
      :width="width_"
      direction="top"
      :color="color"
    />`,
  }))
  .add('Bottom', () => ({
    components: { Triangle },
    props: {
        height: {
          type: Number,
          default: number('Height (px)', 64),
        },
        width: {
          type: Number,
          default: number('Width (px)', 64),
        },
        color: {
            type: String,
            default: color('Color', '#41b883')
        }
    },
    computed: {
      height_() {
          return `${this.height}px`;
      },
      width_() {
          return `${this.width}px`;
      }
    },
    template: `<Triangle
      :height="height_"
      :width="width_"
      direction="bottom"
      :color="color"
    />`,
  }))
  .add('Left', () => ({
    components: { Triangle },
    props: {
        height: {
          type: Number,
          default: number('Height (px)', 64),
        },
        width: {
          type: Number,
          default: number('Width (px)', 64),
        },
        color: {
            type: String,
            default: color('Color', '#41b883')
        }
    },
    computed: {
      height_() {
          return `${this.height}px`;
      },
      width_() {
          return `${this.width}px`;
      }
    },
    template: `<Triangle
      :height="height_"
      :width="width_"
      direction="left"
      :color="color"
    />`,
  }))
  .add('Right', () => ({
    components: { Triangle },
    props: {
        height: {
          type: Number,
          default: number('Height (px)', 64),
        },
        width: {
          type: Number,
          default: number('Width (px)', 64),
        },
        color: {
            type: String,
            default: color('Color', '#41b883')
        }
    },
    computed: {
      height_() {
          return `${this.height}px`;
      },
      width_() {
          return `${this.width}px`;
      }
    },
    template: `<Triangle
      :height="height_"
      :width="width_"
      direction="right"
      :color="color"
    />`,
  }))
  .add('Top Right', () => ({
    components: { Triangle },
    props: {
        height: {
          type: Number,
          default: number('Height (px)', 64),
        },
        width: {
          type: Number,
          default: number('Width (px)', 64),
        },
        color: {
            type: String,
            default: color('Color', '#41b883')
        }
    },
    computed: {
      height_() {
          return `${this.height}px`;
      },
      width_() {
          return `${this.width}px`;
      }
    },
    template: `<Triangle
      :height="height_"
      :width="width_"
      direction="topRight"
      :color="color"
    />`,
  }))
  .add('Top Left', () => ({
    components: { Triangle },
    props: {
        height: {
          type: Number,
          default: number('Height (px)', 64),
        },
        width: {
          type: Number,
          default: number('Width (px)', 64),
        },
        color: {
            type: String,
            default: color('Color', '#41b883')
        }
    },
    computed: {
      height_() {
          return `${this.height}px`;
      },
      width_() {
          return `${this.width}px`;
      }
    },
    template: `<Triangle
      :height="height_"
      :width="width_"
      direction="topLeft"
      :color="color"
    />`,
  }))
  .add('Bottom Right', () => ({
    components: { Triangle },
    props: {
        height: {
          type: Number,
          default: number('Height (px)', 64),
        },
        width: {
          type: Number,
          default: number('Width (px)', 64),
        },
        color: {
            type: String,
            default: color('Color', '#41b883')
        }
    },
    computed: {
      height_() {
          return `${this.height}px`;
      },
      width_() {
          return `${this.width}px`;
      }
    },
    template: `<Triangle
      :height="height_"
      :width="width_"
      direction="bottomRight"
      :color="color"
    />`,
  }))
  .add('Bottom Left', () => ({
    components: { Triangle },
    props: {
        height: {
          type: Number,
          default: number('Height (px)', 64),
        },
        width: {
          type: Number,
          default: number('Width (px)', 64),
        },
        color: {
            type: String,
            default: color('Color', '#41b883')
        }
    },
    computed: {
      height_() {
          return `${this.height}px`;
      },
      width_() {
          return `${this.width}px`;
      }
    },
    template: `<Triangle
      :height="height_"
      :width="width_"
      direction="bottomLeft"
      :color="color"
    />`,
  }));