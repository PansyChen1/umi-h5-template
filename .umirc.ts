import { IConfig } from 'umi-types';
// const pxtoRem = require('postcss-plugin-px2rem');
const pxToViewPort = require('postcss-px-to-viewport');

// ref: https://umijs.org/config/
const config: IConfig =  {
  treeShaking: true,

  // extraPostCSSPlugins: [
  //   pxtoRem({
  //     rootValue: 100,//14/100=0.14rem
  //     unitPrecision: 2,//单位转换后保留的精度
  //     propWhiteList: [],//可转换为rem的css属性
  //     // propBlackList: [],//不可转换为rem的css属性
  //     // exclude:/(\/|\\)(node_modules)(\/|\\)/,//忽略某些文件夹下的文件或特定文件
  //     selectorBlackList: [],//需要忽略的CSS选择器，不会转为rem
  //     // minPixelValue: 0//设置最小的转换数值，如果为1的话，只有大于1的值会被转换
  //   })
  // ],

  extraPostCSSPlugins: [
    pxToViewPort({
      viewportWidth: 750,// 设计稿的视口宽度
      viewportHeight: 1334,
      unitPrecision: 2,//单位转换后保留的精度
      viewportUnit: 'vw',//希望使用的视口单位
      selectorBlackList: [],// 需要忽略的CSS选择器，不会转为视口单位，使用原有的px等单位
      minPixelValue: 1,//设置最小的转换数值，如果为1的话，只有大于1的值会被转换
      mediaQuery: false,//媒体查询里的单位是否需要转换单位
      // exclude: /(\/|\\)(node_modules)(\/|\\)/,//忽略某些文件夹下的文件或特定文件
    }),
  ],

  cssLoaderOptions:{
    localIdentName: '[local]'
  },
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: false,
      title: 'umi-h5-template',
      dll: false,

      routes: {
        exclude: [
          /components\//,
        ],
      },
    }],
  ],
}

export default config;
