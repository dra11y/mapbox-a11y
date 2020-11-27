import babel from 'rollup-plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: ['src/index.js'],
  output: [{
    name: 'MapboxA11y',
    file: 'dist/mapbox-gl-a11y.js',
    format: 'umd',
    sourcemap: true,
    indent: false,
  }, /* disable examples for now {
    name: 'MapboxA11y',
    file: 'examples/mapbox-gl-a11y.js',
    format: 'umd',
    sourcemap: true,
    indent: false,
  } */],
  treeshake: true,
  plugins: [
    // rollup requires a babel passthrough to transpile special
    // proposed "class properties" syntax
    babel(),
    resolve(),
    commonjs(),
  ],
};
