/**
 * Globally register all base components for convenience, because they
 * will be used very frequently. Components are registered using the
 * PascalCased version of their file name.
 */
import Vue from 'vue'

// https://webpack.js.org/guides/dependency-management/#require-context
const components = require.context(
  // The relative path of the components folder
  '~/components/global',
  // Whether or not to look in subfolders
  true,
  // The regular expression used to match base component filenames
  /[A-Z]\w+\.(vue|js)$/
)

components.keys().forEach((fileName = '') => {
  // Get the component config
  const componentConfig = components(fileName)
  const componentName = fileName
    ?.split('/')
    ?.pop()
    ?.replace(/\.\w+$/, '')

  Vue.component(componentName, componentConfig.default || componentConfig)
})
