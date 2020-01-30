const express = require('express')
require('./src/db/mongoose')
const Lock = require('./src/models/lock')
var randtoken = require('rand-token');

const app = express()

app.post('/lock/:id', async(req, res) => {
  const id = req.params.id;
  try {
    const lock = new Lock({
      number : id,
      token : randtoken.generate(16)
    });
    await lock.save();
    res.status(200).send({message: 'success', data: lock});
  } catch(e) {  
    res.status(500).send({msg: 'problem when creating new lock'});
  }
})
  
app.post('/unlock/:id', async(req, res) => {
  const id = req.params.id;
  const token = req.query.token;
  try {
    const lock = await Lock.findOne({'number': id, 'token': token});
    res.status(200).send({message: 'Unlocked'});
  } catch(e) {  
    res.status(500).send({msg: 'NO lock found With this number'});
  }
});

app.listen(3000, () => {
  console.log('Server is up on port 3000.')
})
