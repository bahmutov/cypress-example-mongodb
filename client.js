const { MongoClient } = require("mongodb");
// Connection URI
const uri = "mongodb://mongoadmin:secret@localhost:27888/?authSource=admin";

// Create a new MongoClient
const client = new MongoClient(uri);
async function run() {
  try {
    // Connect the client to the server
    await client.connect();

    const db = client.db('pizza')
    const pizzas = db.collection('pizzas')
    const p = {
      name: 'pizza name',
      town: 'Napoli'
    }
    const result = await pizzas.insertOne(p)
    console.log(result)

    // Establish and verify connection
    // await client.db("pizza").command({ ping: 1 });
    // console.log("Connected successfully to server");



  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
