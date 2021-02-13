const express = require('express') // express 모듈 가져오기
const app = express() // express로 application 만들기
const port = 5000 // 아무거나 넣어도 됨

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://jeewoonkim:jeewoonkim@boilerplate.zimhj.mongodb.net/<dbname>?retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopology:true, useCreateIndex:true, useFindAndModify:false
}).then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err))

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log('Example app listening on port ${port}!'))
