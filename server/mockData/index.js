const fs = require('fs/promises')
const path = require('path')
const dbPath = path.join(__dirname, 'productsMock.json')
const notes = require('./productsMock.json')

async function readDb() {
  const result = Object.keys(notes).map((el) => {
    return { ...notes[el], _id: el }
  })
  console.log(result)
  const db = await fs.writeFile(dbPath, JSON.stringify(result))
  console.log(db)
}
readDb()
