<template>
  <div
    :style="style"
  />
</template>

<script>
export default {
  name: 'VTriangle',
  props: {
    height: {
      type: String,
      required: true,
      validator(value) {
        const validateRe = /^(\d*\.?\d*)(ch|em|ex|rem|vh|vw|vmin|vmax|px|cm|mm|in|pc|pt)$/;
        return !!validateRe.exec(value);
      },
    },
    width: {
      type: String,
      required: true,
      validator(value) {
        const validateRe = /^(\d*\.?\d*)(ch|em|ex|rem|vh|vw|vmin|vmax|px|cm|mm|in|pc|pt)$/;
        return !!validateRe.exec(value);
      },
    },
    direction: {
      type: String,
      default: 'up',
      validator(value) {
        const directionTypes = ['up', 'down', 'left', 'right', 'topRight', 'topLeft', 'bottomRight', 'bottomLeft'];
        return directionTypes.includes(value);
      },
    },
    color: {
      type: String,
      default: 'black',
    },
  },
  computed: {
    style() {
      const { height, width, color } = this;

      const result = {
        width: 0,
        height: 0,
      };

      if (this.direction === 'topRight') {
        return {
          ...result,
          'border-top': `${height} ${color} solid`,
          'border-left': `${width} transparent solid`,
        };
      }
      if (this.direction === 'topLeft') {
        return {
          ...result,
          'border-top': `${height} ${color} solid`,
          'border-right': `${width} transparent solid`,
        };
      }
      if (this.direction === 'bottomRight') {
        return {
          ...result,
          'border-bottom': `${height} ${color} solid`,
          'border-left': `${width} transparent solid`,
        };
      }
      if (this.direction === 'bottomLeft') {
        return {
          ...result,
          'border-bottom': `${height} ${color} solid`,
          'border-right': `${width} transparent solid`,
        };
      }

      const widthRe = /^(\d*\.?\d*)(ch|em|ex|rem|vh|vw|vmin|vmax|px|cm|mm|in|pc|pt)$/;
      const widthReResult = widthRe.exec(width);

      if(!widthReResult || widthReResult.length === 0) return;
        
      const widthNumber = widthReResult[1] / 2; // split equally to two border
      const widthUnit = widthReResult[2];

      if (this.direction === 'up') {
        return {
          ...result,
          'border-bottom': `${height} ${color} solid`,
          'border-left': `${widthNumber}${widthUnit} transparent solid`,
          'border-right': `${widthNumber}${widthUnit} transparent solid`,
        };
      }
      if (this.direction === 'down') {
        return {
          ...result,
          'border-top': `${height} ${color} solid`,
          'border-left': `${widthNumber}${widthUnit} transparent solid`,
          'border-right': `${widthNumber}${widthUnit} transparent solid`,
        };
      }
      if (this.direction === 'left') {
        return {
          ...result,
          'border-right': `${height} ${color} solid`,
          'border-top': `${widthNumber}${widthUnit} transparent solid`,
          'border-bottom': `${widthNumber}${widthUnit} transparent solid`,
        };
      }
      return { // right
        ...result,
        'border-left': `${height} ${color} solid`,
        'border-top': `${widthNumber}${widthUnit} transparent solid`,
        'border-bottom': `${widthNumber}${widthUnit} transparent solid`,
      };
    },
  },
};
</script>