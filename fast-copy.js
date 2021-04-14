const axios = require('axios')
const getHtmlSize = async (url) => {
  try {
    const response = await axios.get(url)
    return response.headers['content-length']
  } catch (e) {
    throw (e)
  }
}
const main = async () => {
  try {
    const url1 = 'https://en.wikipedia.org/wiki/Fravia'
    const url2 = 'https://en.wikipedia.org/wiki/Old_Red_Cracker'

    const p1 = getHtmlSize(url1)
    const p2 = getHtmlSize(url2)

    const [size1, size2] = await Promise.all([p1, p2])

    console.log(`size of page ${url1} : ${size1 / 1000} KB`)
    console.log(`size of page ${url2} : ${size2 / 1000} KB`)
  } catch (e) {
    console.error(e.message)
  }
}
main()

// const axios = require('axios')

// const getHtmlSize = async (url) => {
//   try {
//     const response = await axios.get(url)
//     return response.headers['content-length']
//   } catch (e) {
//     throw e
//   }
// }
// const main = async () => {
//   try {
//     const url1 = 'https://en.wikipedia.org/wiki/Fravia'
//     const url2 = 'https://en.wikipedia.org/wiki/Old_Red_Cracker'

//     const size1 = await getHtmlSize(url1)
//     console.log(`size of page ${url1}: ${size1 / 1000} KB`)

//     const size2 = await getHtmlSize(url2)
//     console.log(`size of pages ${url2}: ${size2 / 1000} KB`)
//   } catch (e) {
//     console.log(e.message)
//   }
// }
// main()

// const fsPromises = require('fs/promises')

// const USERS_FILE = 'users.json'

// const addUser = async (name, age, isDev) => {
//   try {
//     const stat = await fsPromises.stat(USERS_FILE)
//     if (stat.isFile()) {
//       let jsonString = await fsPromises.readFile(USERS_FILE, 'utf-8')
//       const users = JSON.parse(jsonString)
//       users[name] = { age: age, isDev: isDev }
//       jsonString = JSON.stringify(users)
//       await fsPromises.writeFile(USERS_FILE, jsonString)
//     }
//   } catch (e) {
//     if (e.code === 'ENOENT') {
//       const emptyJsonString = '{}'
//       await fsPromises.writeFile(USERS_FILE, emptyJsonString)
//       await addUser(name, age, isDev)
//     } else {
//       throw e
//     }
//   }
// }
// const main = async () => {
//   try {
//     await addUser('alice', 28, true)
//     await addUser('bob', 35, false)
//     await addUser('charlie', 28, false)
//     await addUser('dan', 42, true)
//     await addUser('eve', 51, true)
//   } catch (e) {
//     console.error(`main : ${e.message}`)
//   }
// }
// main()
// const fsPromises = require('fs/promises')

// console.log('Début')
// let p = new Promise((resolve, reject) => {

//   setTimeout(() => {
//     resolve('Good')
//     reject(new Error('Error during...'))
//   }, 1500)

// })
// p.then((message) => {
//   console.log(message)
// }).catch((e) => {
//   console.log(e.message)
// })


// console.log('Fin')