const path = require("path");
import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import babel from "rollup-plugin-babel";
import json from "rollup-plugin-json";
import vue from 'rollup-plugin-vue';
import postcss from 'rollup-plugin-postcss';
import {uglify} from 'rollup-plugin-uglify'
module.exports = {
  input: path.resolve(__dirname, "./src/index.js"),
  output: [
    {
      file: path.resolve(__dirname, "./dist/js-utils.min.umd.js"),
      format: "umd",
      name: "JsUtilsUMDHome", globals:{
        vue:'vue'
      }
    },
    {
      file: path.resolve(__dirname, "./dist/js-utils.min.es.js"),
      format: "es",
      name: "JsUtilsESHome", globals:{
        vue:'vue'
      }
    },
  ],
  plugins: [ // 顺序很重要
    vue(),
    babel(({
        exclude:'node_modules/**',
        "runtimeHelpers": true,
        plugins: [
          [
            "@babel/transform-runtime",
            {
              absoluteRuntime: false,
              corejs: false,
              helpers: true,
              regenerator: true,
              version: "7.0.0-beta.0",
            },
          ],
        ],
    })),
    resolve(), //解决第三方依赖打包问题
    commonjs(), // commonjs 语法模块
    json(), //正确实现json 文件打包
     //打包vue 组件
    postcss({
        plugins:[]
    }), 
    uglify(),// 压缩代码
  ],
  external:['vue']
};
