
const express = require("express");
const  faker  = require("faker");
const app = express();
const port = 8000;

class User {
  constructor (id, firstName, lastName, phoneNo, email, password) {
    id = faker.datatype.uuid();
    firstName = faker.name.firstName();
    lastName = faker.name.lastName();
    phoneNo = faker.phone.phoneNo();
    email = faker.internet.email();
    password = faker.internet.password();
  }
}

class Company {
  constructor (id, name, address) {
    this.id = id;
    this.name = name;
    this.address = address
  }
}

const createCompany = () => {
  const newFakeCompany = new Company(
    faker.datatype.uuid(),
    faker.company.companyName(),
    {
      street: faker.address.streetName(),
      city: faker.address.cityName(),
      state: faker.address.state(),
      zipCode: faker.address.zipCode(),
      country: faker.address.country(),
    }
  );
  return newFakeCompany;
};

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

app.get("/api/users/new", (req, res) => {
  const User1 = new User();
  res.json(User1);
});

app.get("/api/companies/new", (req,res) => {
  const newCompany1 = createCompany();
  res.json(newCompany1);
});

app.get("/api/user/company", (req, res) => {
  const newCompany1 = createCompany();
  const User1 = new User();
  res.json([newCompany1, User1]);
});

app.listen( port, () => console.log(`Listening on port: ${port}`) );