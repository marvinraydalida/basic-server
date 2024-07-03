import express from 'express';

const app = express()
const PORT = 3000

app.get('/', (req,res) => {
    res.send('Hello World');
})

app.get('/test', (req,res) => {
    res.send('Test');
})

app.listen(PORT, () => {
    console.log('server launched');
})