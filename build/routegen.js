exports.genRoutesFile = async function (pages) {
  function genRoute ({ pagePath, name}) {
    let filePath = `'../posts/${name}.md'`
    let code = `
  {
    path: ${JSON.stringify(pagePath)},
    component: () => import(${filePath})
  }`
    return code
  }
  const notFoundRoute = `,
  {
    path: '*',
    component: ThemeNotFound
  }`

  return (
    `let pageroutes = [${pages.map(genRoute).join(',')}]\n`+
    `export default pageroutes`
  )
}