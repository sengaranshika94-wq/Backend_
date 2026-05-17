const app = require("./src/app")
const mongoose = require("mongoose")

async function connectToDb() {
    try {
        await mongoose.connect(
            "mongodb://anshika:CG2iXEENQ9XnGoTm@ac-ul9tw63-shard-00-00.ercrrny.mongodb.net:27017,ac-ul9tw63-shard-00-01.ercrrny.mongodb.net:27017,ac-ul9tw63-shard-00-02.ercrrny.mongodb.net:27017/day-5?ssl=true&replicaSet=atlas-lv3rca-shard-0&authSource=admin&appName=cohort2"
        )
        console.log("Connected to DB")
    } catch (err) {
        console.log(err)
    }
}

connectToDb()

app.listen(3000, () => {
    console.log("server started on port 3000")
})