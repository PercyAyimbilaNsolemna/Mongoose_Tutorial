// This repository introduces students to all the CRUD operations in MongoDB using mongoose

//REquire the mongoose package 
const mongoose = require("mongoose");

//Creates a main method 
async function main() {
    //Creates a variable that store the URL to the mongoDB atlas cluster and connects to the fruitsDB database
    

    //const URL = "mongodb+srv://<username>:<password>@cluster0.az84zbp.mongodb.net/fruitsDB?retryWrites=true&w=majority";
    //Uses mongoose to connect to the fruits database
    await mongoose.connect(URL);
    console.log("Connected successfully to mongoDB");

    /*
    //Calls the addDocument function
    await addFruit();
    */

    /*
    //Calls the addPerson function
    await addPerson();
    */

    /*
    //Calls the insertManyDocuments function
    await insertManyFruits();
    */

    //Calls the readAllDEocuments function 
    await readAllDocuments();
}

//Creates a function that adds a collection and document(s) to the fruitsDB database
async function addFruit(){
    //Creates a schema or structure for the documents to be stored in the fruitsDB database
    const fruitSchema = new mongoose.Schema({
        name: String,
        score: Number,
        review: String
    });

    //Creates a model or collections in the fruitsDB databse in which documents will be inserted
    const Fruit = mongoose.model("Fruit", fruitSchema);

    //Adds new documents to the Fruits model or collection in the fruitsDB database
    const fruit = new Fruit(
        {
        name: "Apple",
        score: 8,
        review: "Apples taste good"
    }
    );

    //Saves the document(s) added to the fruits collection or model
    fruit.save();
}

//Creates a function that inserts a Person colllection to the database  and inserts a person to it
async function addPerson(){
    //Creates a schema or structure for the people collection
    const personSchema = new mongoose.Schema(
        {
            name: String,
            age: Number
        }
    );

    //Creates a model or collection for the document
    const Person = mongoose.model("Person", personSchema);

    //Adds a new person(document) to the people collection
    const person = new Person(
        {
            name: "John", 
            age: 37
        }
    );
    
    //Calls the mongoose save method to save the new person added to the people collection
    person.save();
}

//Creates a function that inserts many documents into the fruits collection
async function insertManyFruits() {
    //Inserts many fruits into the fruits collection
    //Creates a schema or structure for the Fruits collection
    const fruitSchema = new mongoose.Schema(
        {
            name: String, 
            score: Number,
            review: String
        }
    );

    //Creates a model or collection in the fruitsDB database
    const Fruit = mongoose.model("Fruit", fruitSchema);

    //Adds a kiwi fruit to the fruits collection
    const kiwi = new Fruit(
        {
            name: "Kiwi",
            score: 5,
            review: "somehow better"
        }
    );
    
    //Adds an orange to the fruits collection
    const orange = new Fruit(
        {
            name: "Orange",
            score: 4,
            review: "Orange is not that bad"
        }
    );

    //Adds pawpaw to the fruits collection
    const pawpaw = new Fruit(
        {
            name: "Pawpaw",
            score: 7,
            review: "Pawpaw tastes great"
        }
    );

    Fruit.insertMany([kiwi, orange, pawpaw])
}

//Creates a function that reads all the documents in the Fruit collection or model
async function readAllDocuments(){
    //Defines a schema or structure for the documents in the fruits collection or model
    const fruitSchema = new mongoose.Schema(
        {
        name: String, 
        score: Number,
        review: String
    }
    );

    //Creates a Fruits collection or model in the fruitsDB database
    const Fruit = mongoose.model('Fruit', fruitSchema);

    //Reads all the documents in the Fruit collection or model in the fruitsDB database
    const cursors = await Fruit.find({});

    //Outputs all the documents in the Fruit collection or model in the fruitsDB database
    console.log(cursors);
}

//Calls the main function and catches any error and logs it to the console
main().catch(function(error) {
    console.log(`Error: ${error}`);
})