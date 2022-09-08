import express from 'express'

const port = process.env.PORT || 3000
const app = express()

app.use(express.json())

app.get('/', (req, res) => {
  return res.send('Hello, World!')
})

app.listen(3000, () => console.log(`node running at ${port}`))
