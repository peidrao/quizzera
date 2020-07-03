require('dotenv').config();

module.exports = {
    db_dev: process.env.DB || 'mongodb+srv://pedrao:tecnologiamongodb@cluster0-5ftnz.mongodb.net/usuarios?retryWrites=true&w=majority'
};
