import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'ffq9uvoa',
    dataset: 'production',
  },

  studioHost: 'backoffice--combo-no-wave',
  deployment: {
    autoUpdates: true,
    appId: 's2yh2796zoflqgaggn8bkd5b',
  },
  // typegen: {
  //   generates: 'studio/types/generated.ts',
  // },
  schemaExtraction: {
    enabled: true,
  },
  typegen: {
    enabled: true,
  },
})
