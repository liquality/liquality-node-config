import express from "express"
import cors from "cors"
import helmet from "helmet"
import config from './config.json'  assert { type: "json" }

if (!config) {
    process.exit(1)
}

const app = express()

app.use(helmet())
app.use(cors())
app.use(express.json())

app.get('/', function (req, res) {
  res.json(config)
})



app.listen(3000, () => {
    console.log(`Listening on port 3000`)
})

