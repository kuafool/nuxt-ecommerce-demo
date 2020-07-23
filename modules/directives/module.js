const path = require('path')
const fs = require('fs')
const camelCase = require('../../utils/camel-case')

export default function(moduleOptions) {
  const options = { ...moduleOptions, ...this.options.directives }

  options.dir = options.dir
    ? options.dir.startsWith('~')
      ? options.dir
      : path.join('~', options.dir)
    : '~/directives'

  const absoluteBuildPath = path.resolve(this.options.buildDir)
  const absoluteDirectivesPath = path.resolve(
    options.dir.replace('~', this.options.srcDir),
  )

  const relativePath = path.relative(absoluteBuildPath, absoluteDirectivesPath)
  const files = fs
    .readdirSync(absoluteDirectivesPath, { withFileTypes: true })
    .filter(f => f.isFile())

  const PluginOptions = {
    directives: files.map(f => ({
      path: path
        .normalize(path.join(relativePath, f.name))
        .split(/[\\/]/g)
        .join(path.posix.sep),
      name: camelCase(path.parse(f.name).name),
    })),
  }

  this.addPlugin({
    src: path.resolve(__dirname, 'plugin.template'),
    fileName: 'directives.client.js',
    options: PluginOptions,
    ssr: false,
  })
}
