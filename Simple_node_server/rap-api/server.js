const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000


app.use(cors())

let rappers = {
  '21 savage':{
    'age': 30,
    'birthName': 'Shéyaa Bin Abraham-Joseph',
    'birthLocation': 'London, England'
  },
  '50 cent':{
    'age':  47,
    'birthName': 'Curtis James Jackson III',
    'birthLocation': 'Queens, NEw York City,US'
  }

} 

app.get('/', (request, response)=>{
  response.sendFile(__dirname + '/index.html')
}) 

app.get('/api/rappers/:rapperName', (request, response)=>{
  const rapperName = request.params.rapperName.toLowerCase()
  console.log(rapperName);
  if(rappers[rapperName]){
    response.json(rappers[rapperName])
  } else{
    response.json('rapper not uploaded yet')
  }
})

app.listen(PORT, ()=>{
  console.log(`Server running on port ${PORT}`)}
) 