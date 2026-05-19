const app = require("./src/app")
const mongoose = require("mongoose")

async function connectToDb() {
    try {
        await mongoose.connect(process.env.MONGO_URI)
            
        console.log("Connected to DB")
    } catch (err) {
        console.log(err)
    }
}

connectToDb()

app.listen(3000, () => {
    console.log("server started on port 3000")
})