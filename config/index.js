'use strict';
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path');
const moment = require('moment');
module.exports = {
  comments: {
    repo: 'DendiSe7enGitHub/blog-comments-repo',
    theme: 'github-light'
  },
  userInfo: {
    name: 'Dendi.Tang',
    phone: '+86 13391328920',
    site: 'www.yoursite.com',
    email: 'dendise7en@gmail.com',
    birth: 'December 9,1992',
    skills: [
      { label: 'HTML', percentage: '80%' },
      { label: 'CSS3', percentage: '60%' },
      { label: 'Javascript', percentage: '60%' },
      { label: 'jQuery', percentage: '50%' },
      { label: 'React', percentage: '60%' },
      { label: 'Vue', percentage: '60%' },
      { label: 'Mini-Program', percentage: '60%' },
      { label: 'Git', percentage: '70%' },
      { label: 'Webpack', percentage: '50%' }
    ],
    location: `Shanghai,CN. I aim to make a difference through my creative solution.`,
    jobTitle: 'Frontend Developer',
    description: `Worked with project teams to create user-friendly and appealing application interfaces and websites.
    Cooperate with co-worker from different apartment of the company and do the best we can.`
  },
  ladingInfo: {
    // landing 显示的名称
    blogName: 'Dendionk',
    tagA: 'Dreamer',
    tagB: 'Coder',
    tagC: 'Writter',
    github: 'https://github.com/DendiSe7enGitHub',
    twitter: 'https://twitter.com/DendiDang',
    email: 'mailto:dendise7en@gmail.com',
    linkedIn: 'https://www.linkedin.com/in/%E7%BF%BC%E9%BE%99-%E5%94%90-826235130/'
  },
  commitMessage:
    process.argv.length === 3
      ? `${process.argv[2]}:[${moment().format(
          'dddd, MMMM Do YYYY, h:mm:ss a'
        )}]`
      : `AutoUpdate:[${moment().format('dddd, MMMM Do YYYY, h:mm:ss a')}]`,
  distOriginSSh: 'git@git.coding.net:dendise7en/static-site-source.git',
  deleteRemote: 'git remote rm origin',
  initLocal: 'git init',
  dev: {
    // Paths
    assetsSubDirectory: './',
    assetsPublicPath: '/',
    proxyTable: {},

    // Various Dev Server settings
    host: 'localhost', // can be overwritten by process.env.HOST
    port: 8080, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
    autoOpenBrowser: false,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-

    // Use Eslint Loader?
    // If true, your code will be linted during bundling and
    // linting errors and warnings will be shown in the console.
    useEslint: true,
    // If true, eslint errors and warnings will also be shown in the error overlay
    // in the browser.
    showEslintErrorsInOverlay: false,

    /**
     * Source Maps
     */

    // https://webpack.js.org/configuration/devtool/#development
    devtool: 'cheap-module-eval-source-map',

    // If you have problems debugging vue-files in devtools,
    // set this to false - it *may* help
    // https://vue-loader.vuejs.org/en/options.html#cachebusting
    cacheBusting: true,

    cssSourceMap: true
  },

  build: {
    // Template for index.html
    index: path.resolve(__dirname, '../dist/index.html'),
    // Paths
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: './',

    /**
     * Source Maps
     */

    productionSourceMap: true,
    // https://webpack.js.org/configuration/devtool/#production
    devtool: '#source-map',

    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],

    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  }
};
