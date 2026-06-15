import { defineConfig } from 'sanity'
import { structuredArrayTypes } from 'sanity/migrate'
import { deskTool } from 'sanity/desk'
import post from './src/sanity/schemas/post'

export default defineConfig({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: '2024-01-01',
  basePath: '/studio',
  plugins: [deskTool()],
  schema: {
    types: [post],
  },
})