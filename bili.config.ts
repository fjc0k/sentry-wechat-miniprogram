import { Config } from 'bili'

const config: Config = {
  input: 'src/index.ts',
  banner: true,
  env: {
    SDK_VERSION: JSON.stringify(require('./package.json').version),
  },
  output: {
    dir: 'lib',
    format: ['cjs', 'cjs-min'],
  },
  bundleNodeModules: true,
  plugins: {
    babel: false,
  },
}

export default config
