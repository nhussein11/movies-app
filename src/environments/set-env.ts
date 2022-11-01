const appVersion = require('../../package.json').version
require('dotenv').config({
  path: 'src/environments/.env',
})

const targetPath = './src/environments/environment.ts'
const envConfigFile = `export const environment = {
  production: false,
  apiKey: '${process.env['THE_MOVIE_DATABASE_API_KEY']}',
}
`
const targetProdPath = './src/environments/environment.prod.ts'
const prodEnvConfigFile = `export const environment = {
  production: true,
  apiKey: '${process.env['THE_MOVIE_DATABASE_API_KEY']}',
}
`

const setEnv = () => {
  const fs = require('fs')
  const writeFile = fs.writeFile

  console.log(
    'The file `environment.ts` will be written with the following content: \n'
  )

  writeFile(targetPath, envConfigFile, (err: any) => {
    if (!err) {
      console.log(
        `Angular environment.ts file generated correctly at ${targetPath} \n`
      )
    } else {
      console.error(err)
      throw err
    }
  })
  writeFile(targetProdPath, prodEnvConfigFile, (err: any) => {
    if (!err) {
      console.log(
        `Angular environment.ts file generated correctly at ${targetPath} \n`
      )
    } else {
      console.error(err)
      throw err
    }
  })
}

setEnv()
