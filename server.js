const app = require('./app')
const db = require('./Database/db')

const port = 4000

//Database connection
db.connectToDB()

app.listen(port, () => {
    console.log(`App running on port ${port}`);
});