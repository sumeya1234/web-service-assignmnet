const express = require("express");
const soap = require("soap");
const fs = require("fs");
const path = require("path");

const app = express();
const port = 8000;

// Load WSDL file
const wsdlPath = path.join(__dirname, "service.wsdl");
const xml = fs.readFileSync(wsdlPath, "utf8");

// Define the service implementation
const service = {
  MyService: {
    MyServicePort: {
      sayHello: ({ name }) => {
        return { greeting: `Hello, ${name}!` };
      },
      addNumbers: ({ num1, num2 }) => {
        return { sum: num1 + num2 };
      },
      getStudentName: ({ studentId }) => {
        const students = { 1: "Alice", 2: "Bob", 3: "Charlie" };
        return { studentName: students[studentId] || "Unknown Student" };
      },
    },
  },
};

// Start Express server and attach SOAP service
const server = app.listen(port, () => {
  console.log(`✅ SOAP Server running at http://localhost:${port}/wsdl`);
  soap.listen(server, "/wsdl", service, xml);
});
