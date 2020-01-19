const faker = require('faker');

const express = require("express"),
        app = express(),
        port = 8000
//print this message on the terminal
const server = app.listen(port, ()=>{
    console.log(`Listening on port ${port}`);
});


class User{
    constructor(firstName, lastName, phoneNumber, email, password){
        this._id = 0;
        this.firstName = firstName;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.password = password;
    }
}
const FakeUserData = [];

class Company{
    constructor(name, streetAddress, city, state, zip, country){
        this._id = 0;
        this.name = name;
        this.address = {
            streetAddress : streetAddress,
            city : city,
            state: state,
            zip: zip,
            country: country
        }
    }
}
const FakeCompanyData = [];
// To add students to JSON file, add using parameter

app.get("/api", (req, res) =>{
    res.json(FakeUserData);
    res.json(FakeCompanyData);

});

app.get("/api/new-user", (req, res) =>{// use api: standard convention: less confusion
    // push new created user data
    FakeUserData.push(
        new User(
            faker.name.firstName(),
            faker.name.lastName(),
            faker.phone.phoneNumber(),
            faker.internet.email(),
            faker.internet.password()
        ));
    res.json(FakeUserData);
    // res.redirect("/api");
});

app.get("/api/new-company", (req,res) =>{
    console.log("name: " + faker.company.companyName());
    console.log("address:"+
                faker.address.streetAddress()+" "+
                faker.address.city()+","+
                faker.address.stateAbbr()+" "+
                faker.address.zipCode()+","+
                faker.address.country()
                );

    FakeCompanyData.push(
        new Company(
            faker.company.companyName(),
            faker.address.streetAddress(),
            faker.address.city(),
            faker.address.stateAbbr(),
            faker.address.zipCode(),
            faker.address.country()
        ));
    res.json(FakeCompanyData);
    // res.redirect("/api");
});