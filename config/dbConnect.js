const { default: mongoose } = require('mongoose')

const dbConnect = () => {
    try {
        const conn = mongoose.connect(`mongodb+srv://${process.env.DBUSER}:${process.env.DBPASSWORD}@${process.env.CLUSTER}.o1vbmd1.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`)

        console.log('Database Connected Successfully.')
    }
    catch (error) {
        console.log(`Database error: ${error}`)
    }
}

module.exports = dbConnect