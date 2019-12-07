const express = require('express')
const path = require('path')
const json = require('./db.json')
const fs = require('fs')
const cors = require('cors')
const app = express()
const bodyParser = require('body-parser')

const generateId = () => {
  return `f${(~~(Math.random()*1e8)).toString(16)}`;
}

app.use(express.static(path.join(__dirname, '../../dist')));
app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(async (req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});

app.get('/', (req, res) => {
  const pathToHtml = path.resolve(__dirname, '../../dist/index.html');
  const constentFromHtml = fs.readFileSync(pathToHtml, 'utf-8');
  res.send(constentFromHtml);
});

app.get('/api/db', (req, res) => {
  console.log()
  json.bestsellers.map(el => {
    el.id =  generateId()
  })
  json.coffee.map(el => {
    el.id =  generateId()
  })
  json.goods.map(el => {
    el.id =  generateId()
  })
  res.json(json);
});

const rawParser = bodyParser.raw({type: '*/*'});
app.post('/api/db', rawParser, (req, res) => {
  const data = req.body
  json.contacts.push(data)
  res.json(json)
});

const port = process.env.PORT || 5050;
app.listen(port);

console.log('App is listening on port ' + 'port');