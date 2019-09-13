import Users from '../controllers/user';
import Books from '../controllers/book';

export default (app) => {
    app.get('/api', (req, res) => res.status(200)
        .send({
            message: 'Welcome to the BookStore API!',
        }));

    // Books
    app.post('/api/users/:userId/books', (req, res) => Books(req, res).create());
    app.get('/api/books', (req, res) => Books(req, res).list());
    app.get('/api/books/:bookId', (req, res) => Books(req, res).listOne());
    app.put('/api/books/:bookId', (req, res) => Books(req, res).update())
    app.delete('/api/books/:bookId', (req, res) => Books(req, res).delete())

    // Users
    app.post('/api/users', (req, res) => Users(req, res).create()); // API route for user to signup 

};