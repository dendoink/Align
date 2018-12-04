'use strict'
require('./check-versions')()

process.env.NODE_ENV = 'production'

const ora = require('ora')
const rm = require('rimraf')
const path = require('path')
const chalk = require('chalk')
const webpack = require('webpack')
const config = require('../config')
const webpackConfig = require('./webpack.prod.conf')
const getData = require('./datagen')
const execa = require('execa')
const moment = require('moment')

const spinner = ora('building for production...')
spinner.start()
getData()
const commitMessage = process.argv.length === 3 ? process.argv[2] : `AutoUpdate${moment().format("dddd, MMMM Do YYYY, h:mm:ss a")}`
async function autoUpdate() {
  console.log(chalk.cyan(
    `Start to upload whole project to coding.net`
  ))
  await execa('git', ['status'], { stdio: 'inherit' })
  await execa('git', ['add', '-A'], { stdio: 'inherit' })
  await execa('git', ['commit', '-m', commitMessage], { stdio: 'inherit' })
  await execa('git', ['push', 'origin', 'master', '-f'], { stdio: 'inherit' })
  console.log(chalk.green(
    `finished`
  ))
}
rm(path.join(config.build.assetsRoot, config.build.assetsSubDirectory), err => {
  if (err) throw err
  webpack(webpackConfig, (err, stats) => {
    spinner.stop()
    if (err) throw err
    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false, // If you are using ts-loader, setting this to true will make TypeScript errors show up during build.
      chunks: false,
      chunkModules: false
    }) + '\n\n')

    if (stats.hasErrors()) {
      console.log(chalk.red('  Build failed with errors.\n'))
      process.exit(1)
    }
    console.log(chalk.cyan('  Build complete.\n'))
    console.log(chalk.yellow(
      '  Tip: built files are meant to be served over an HTTP server.\n' +
      '  Opening index.html over file:// won\'t work.\n'
    ))
    autoUpdate()
  })
})
