const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')

dotenv.config()
const URI = process.env.URI
const PORT = 3000

const app = express()
app.use(cors())
app.use(express.json())



const { MongoClient, ServerApiVersion } = require('mongodb');

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(URI, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        const db = await client.db("db-first-test")
        const collection = db.collection('collection-3')


        // Send a ping to confirm a successful connection
        await client.db("db-first-test").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
    }
}
run().catch(console.dir);



app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`)
})