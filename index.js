const express = require('express') // express 모듈 가져오기
const app = express() // express로 application 만들기
const port = 5000 // 아무거나 넣어도 됨
const bodyParser = require("body-parser")
const config = require('./config/key')
const {User} = require("./models/User")

// application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));

// application/json
app.use(bodyParser.json());

const mongoose = require('mongoose')
mongoose.connect(config.mongoURI, {
    useNewUrlParser: true, useUnifiedTopology:true, useCreateIndex:true, useFindAndModify:false
}).then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err))

app.get('/', (req, res) => res.send('Hello World!'))

app.post('/register', (req, res) => {
    // 회원가입할 때 필요한 정보들을 clinet에서 가져오면
    // 그것들을 db에 넣어준다.

    const user = new User(req.body)

    user.save((err, doc) => {
        if (err) return res.json({success: false, err})
        return res.status(200).json({
            success: true
        })
    })
})

app.listen(port, () => console.log('Example app listening on port ${port}!'))
