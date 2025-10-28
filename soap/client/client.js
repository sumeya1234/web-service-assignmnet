const soap = require('soap');
const url = 'http://localhost:8000/wsdl?wsdl';

soap. createClient(url, (err, client) =>{
  if (err) return console.error(err);

  client.sayHello({ name: 'World' }, (err, result) => {
    if (err) console.error(err);
    else console.log('sayHello:', result);
  });

  client.addNumbers({ num1: 5, num2: 7 }, (err, result) => {
    if (err) console.error(err);
    else console.log('addNumbers:', result);
  });

  client.getStudentName({ studentId: 2 }, (err, result) => {
    if (err) console.error(err);
    else console.log('getStudentName:', result);
  });

});