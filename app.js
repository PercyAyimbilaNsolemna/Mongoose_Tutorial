// This repository introduces students to all the CRUD operations in MongoDB using mongoose

//REquire the mongoose package 
const mongoose = require("mongoose");

//Creates a main method 
async function main() {
    //Creates a variable that store the URL to the mongoDB atlas cluster and connects to the fruitsDB database
    

    const URL = "mongodb+srv://<username>:<password>@cluster0.az84zbp.mongodb.net/fruitsDB?retryWrites=true&w=majority";
    //Uses mongoose to connect to the fruits database
    await mongoose.connect(URL);
    console.log("Connected successfully to mongoDB");

    /*
    //Calls the addDocument function
    await addDocument();
    */

    //Calls the addPerson function
    await addPerson();

}

//Creates a function that adds a collection and document(s) to the fruitsDB database
async function addDocument(){
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

//Calls the main function and catches any error and logs it to the console
main().catch(function(error) {
    console.log(`Error: ${error}`);
})