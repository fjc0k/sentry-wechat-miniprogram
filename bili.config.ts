import { Config } from 'bili'

const config: Config = {
  input: 'src/index.ts',
  banner: true,
  output: {
    dir: 'lib',
    format: ['cjs', 'esm'],
  },
  plugins: {
    babel: false,
  },
}

export default config
