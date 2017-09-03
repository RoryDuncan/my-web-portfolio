
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export default {
  input: 'src/main.js',
  output: {
    file: 'public/js/bundle.js',
    format: 'iife'
  },
  plugins: [
    resolve({ jsnext: true, main: true }),
    commonjs(),
  ],
  
};