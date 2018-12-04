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
const shell = require('shelljs')
// const execa = require('execa')


const spinner = ora('building for production...')
spinner.start()
getData()
async function autoUpdate() {
  console.log(chalk.cyan(
    `Start to upload whole project to coding.net`
  ))
  if (!shell.which('git')) {
    //向命令行打印git命令不可用的提示信息
    shell.echo('Sorry, this script requires git');
    //退出当前进程
    shell.exit(1);
  }
  // 推送当前目录代码
  await shell.exec('git add .')
  await shell.exec(`git commit -m '${config.commitMessage}'`).code
  await shell.exec('git push origin master -f');
  console.log(chalk.green(
    `main dir-> succeed`
  ))
  console.log(chalk.cyan(
    `Start to upload dist to coding.net`
  ))
  // 推送子目录代码
  await shell.cd('dist');
  await shell.exec(config.initLocal)
  await shell.exec(config.deleteRemote)
  await shell.exec(`git remote add origin '${config.distOriginSSh}'`)
  await shell.exec('git add .')
  let code = await shell.exec(`git commit -m '${config.commitMessage}'`).code
  if (code !== 0) {
    await shell.echo('Error: Git commit failed');
    await shell.exit(code);
  } else {
    await shell.exec('git push origin master -f');
    console.log(chalk.green(
      `dist-> succeed`
    ))
  }
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
