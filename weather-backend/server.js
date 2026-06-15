import 'dotenv/config'
import express from 'express'
import cors from 'cors'

const app = express()
app.use(cors())

app.get('/weather', async (req, res) => {
  const city = req.query.city
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}&units=metric`
    )
    const data = await response.json()
    res.json(data)
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Something went wrong' })
  }
})

app.listen(3000, () => console.log('Server running on port 3000'))