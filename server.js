const app = require('./app')
const db = require('./Database/db')
const logger = require('./logging/logger')

const port = 4000

//Database connection
db.connectToDB()

app.listen(port, () => {
    logger.info(`App running on port ${port}`);
});