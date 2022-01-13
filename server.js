//import modules: path, express, session, exphbs, routes, helpers, sequelize, SequelizeStore, app, port
const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const helpers = require('./utils/helpers');

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

//set up handlebars.js engine with custom helpers. 
const hbs = exphbs.create({ helpers });

//create sess variables
const sess = {
    secret: 'Super secret secret',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};

//middleware: use-sess
app.use(session(sess));

//middleware: engine('handlebars', hbs.engine);
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

//middleware: ap.use express.json(), urlencoded, static(path.join(__dirnaem, 'public', routes))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

//sequelize sync to inform the server is listening 
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});

