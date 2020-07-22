import modules from './config/nuxt.config.modules'
import css from './config/nuxt.config.css'
import plugins from './config/nuxt.config.plugins'
import head from './config/nuxt.config.head'
import build from './config/nuxt.config.build'
import mode from './config/nuxt.config.mode'
import server from './config/nuxt.config.server'

export default {
  ...mode,
  ...head,
  ...modules,
  ...css,
  ...plugins,
  ...build,
  ...server,
}
