const soap = require("soap");

const url = "http://localhost:8000/wsdl?wsdl";

// Create SOAP client and call the three functions
soap.createClient(url, (err, client) => {
  if (err) return console.error("Error creating SOAP client:", err);

  // sayHello()
  client.sayHello({ name: "World" }, (err, result) => {
    if (err) console.error("sayHello Error:", err);
    else console.log(" sayHello Result:", result);
  });

  // addNumbers()
  client.addNumbers({ num1: 5, num2: 7 }, (err, result) => {
    if (err) console.error("addNumbers Error:", err);
    else console.log(" addNumbers Result:", result);
  });

  // getStudentName()
  client.getStudentName({ studentId: 2 }, (err, result) => {
    if (err) console.error("getStudentName Error:", err);
    else console.log(" getStudentName Result:", result);
  });
});
