
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import pug from 'rollup-plugin-pug-html';

export default {
  input: 'src/main.js',
  output: {
    file: 'public/js/bundle.js',
    format: 'iife'
  },
  plugins: [
    resolve({ jsnext: true, main: true }),
    commonjs(),
    pug({
      pretty: true,
      context: {}, // pass options
    })
  ],
};
