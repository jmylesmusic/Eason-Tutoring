import serve from 'rollup-plugin-serve';
import copy from 'rollup-plugin-copy';
import scss from 'rollup-plugin-scss';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import livereload from 'rollup-plugin-livereload';

const development = process.env.NODE_ENV === 'dev';
export default {
    input: 'main.js',
    output: {
        file: 'build/bundle.js',
        format: 'iife'
    },
    plugins: [
        copy({ 
            targets: [
                {
                    src: 'index.html', dest: 'build' 
                }
            ]
        }),
        scss(), // will output compiled styles to output.css
        resolve(),
        commonjs(),
        development && livereload('build'),
        development && serve('build'),
    ]
};