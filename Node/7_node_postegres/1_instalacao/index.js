const express = require('express');

const exphbs = require('express-handlebars');

const {Pool} = require('pg');

const app = express();

app.engine('handlebars', exphbs.engine());

app.set('view engine', 'handlebars');

app.use(
    express.urlencoded({
        extended: true,
    }),
);

app.use(express.json());

app.use(express.static('public'));

// const port = 3000;

app.get('/', (req, res) => {
    res.render('home')
});


//Inserindo dados no banco

app.post('/books/insertbook', async(req,res) =>{
    const{title, author, publication_year} = req.body;

    const query = `INSERT INTO books (title, author, publication_year) VALUES($1, $2, $3)`

    try{
        await pool.query(query, [title, author, publication_year]);
        res.redirect('/')
    }catch(err){
        console.log(`Erro ao inserir livro: ${err}`)
        res.status(500).send('Erro ao inserir o livro')
    }
});

app.get('/books', (req,res) =>{
    const query = 'SELECT * FROM books'

    pool.query(query, (err, data) => {
        if(err){
            console.log('Erro ao executar a query SELECT', err);
            res.status(500).send('Erro ao buscar livros');
        }

        const books = data.rows;
        res.render('books', {books});
    })
});

app.get('/books/:id', (req,res) => {
    const id = req.params.id;

    const query = 'SELECT * FROM books WHERE idbooks = $1'

    pool.query(query, [id], (err,data) => {
        if(err){
            console.log('Erro ao buscar: ', err);
            res.status(500).send('Erro ao buscar livro');
        }

        const book = data.rows[0];
        if(!book){
            res.status(404).send('Livro não encontrado');
            return;
        }

        res.render('book', {book})
    })
});

app.get('/books/edit/:id', (req, res) => {
    const id = req.params.id
    const query = `SELECT * FROM BOOKS WHERE idbooks = $1`

    pool.query(query, [id], (err, result) =>{
        if(err){
            console.log('Erro ao buscar livro', err)
            res.result(500).send('Erroao buscar livro');
            return;
        }

        const book = result.rows[0];
        if(!book){
            res.status(404).send('Livro nãoencontrado')
        }

        res.render('editbook', {book})
    })
});

app.post('/books/updatebook', (req, res) => {
    const {id, title, author, publication_year} = req.body;
    const query = `UPDATE books SET title = $1, author = $2, publication_year = $3 WHERE idbooks = $4`

    pool.query(query, [title, author, publication_year, id], (err, result) => {
        if(err){
            console.log('Erro ao atualizar livro', err);
            res.result(500).send('Erro ao tentar atualizar livro');
            return;
        }

        if(result.rowCount === 0){
            res.status(404).send('Livro não encontrado para atualização');
            return;
        }

        res.redirect('/books')
    })
});


//Excluindo Dados

app.post('/books/remove/:id', (req, res) => {

    const id = req.params.id;

    const query = `DELETE FROM books WHERE idbooks = $1`;

    pool.query(query, [id], (err, result) => {
        if(err){
            console.log('Erro ao deletar livro', err);
            res.result(500).send('Erro ao tentar deletar livro');
            return;
        }

        if(result.rowCount === 0){
            res.status(404).send('Livro não encontrado para atualização');
            return;
        }

        res.redirect('/books');
    })
});


const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: 'BemVindo!',
    port: 5432,
});

pool.connect((err) =>{
    if(err){
        console.log('Erro ao conectar com o Postgres', err);
    }else{
        console.log('Conectado com o Postgres');
        app.listen(3000, ()=>{
            console.log('Servidor rodando na porta 3000')
        });
    }
});

module.exports = pool;