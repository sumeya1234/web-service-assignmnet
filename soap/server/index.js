const express = require('express');
const soap = require('soap');
const fs = require('fs');
const path = require('path');

const app = express ();
const port = 8000;
const wsdlPath = path. join(__dirname, 'service.wsdl');
const xml = fs.readFileSync(wsdlPath, 'utf8');

const service = {
  MyService: {
    MyServicePort: {
    sayHello: ({ name }) => ({ greeting: `Hello, ${name}!` }),
    addNumbers: ({ num1, num2 }) => ({ sum: num1 + num2 }),
    getStudentName: ({ studentId }) => {
      const students = { 1: 'Alice', 2: 'Bob', 3: 'Charlie' };
      return { studentName: students[studentId] || 'Unknown Student' };
      },
    },
  },
};
const server = app.listen(port, () => {
  console.log( `SOAP server running at http://localhost:${port}/wsdl`);
  soap.listen(server, '/wsdl', service, xml);
});