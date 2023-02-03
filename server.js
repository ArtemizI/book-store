const { application } = require('express');
const express = require('express');
const app = express();
const port = 6001;

var userRouter = express.Router()
var bookListRouter = express.Router()

app.get('/', (req, res) => {
    res.send('conncted')
})

userRouter.use(function (res, res, next) {
    console.log('User qury time : ', Date())
    next();
})

userRouter.get('/:id', function (req, res, next) {
    res.send('User ' + req.params.id + " last successful login " + Date())
    next();
})

userRouter.get('/:id/commetns/', (req, res) => {
    res.send('Get user comments ' + req.params.id)
})

userRouter.post('/:id/comments', (req, res) => {
    res.send('User ' + res.params.id + 'Create new comment')
})

userRouter.post('/:id/comments/:comment_id', (req, res) => {
    res.send('User ' + res.params.id + ' Edit comment ' + res.params.comment_id)
})

userRouter.delete('/:id/comments/:comment_id', (req, res) => {
    res.send('User ' + res.params.id + ' Delete comment ' + res.params.comment_id)
})

bookListRouter.get('', (req, res) => {
    res.send('Response book list')
})

bookListRouter.post('/isbn/:isbn', (req, res) => {
    res.send('Response book list isbn ' + req.params.isbn)
})

bookListRouter.get('/isbn/:isbn', (req, res) => {
    res.send('Response book list isbn ' + req.params.isbn)
})

bookListRouter.post('/name/:name', (req, res) => {
    res.send('Response book list name' + req.params.name)
})

bookListRouter.get('/name/:name', (req, res) => {
    res.send('Response book list name ' + req.params.name)
})

app.use("/user", userRouter)
app.use("/book_list", bookListRouter)

app.listen(port, () => {
    console.log(`App listening on URl http://localhost: ${port}`);
})