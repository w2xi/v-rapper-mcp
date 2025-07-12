import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: ['./cli.ts'],
  platform: 'neutral',
  dts: {
    isolatedDeclarations: true,
  },
})
