const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000


app.use(cors())

let savage = {
  'age': 30,
  'birthName': 'Shéyaa Bin Abraham-Joseph',
  'birthLocation': 'London, England'
}

app.get('/', (request, response)=>{
  response.sendFile(__dirname + '/index.html')
})

app.get('/api/savage', (request, response)=>{
  response.json(savage)
})

app.listen(PORT, ()=>{
  console.log(`Server running on port ${PORT}`)}
) 