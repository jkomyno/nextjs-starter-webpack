import { defineConfig } from 'prisma/config'

export default defineConfig({
  schema: './prisma/schema.prisma',
  migrations: {
    seed: 'tsx ./prisma/seed.ts',
  },
})
