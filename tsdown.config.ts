import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: ['./cli.ts'],
  platform: 'node',
  dts: {
    isolatedDeclarations: true,
  },
})
