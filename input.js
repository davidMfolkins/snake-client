let connection;



const setupInput = function(conn) {
  connection = conn;

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  return stdin;
};

const handleUserInput = function() {
  
  process.stdin.on('data', (key) => {
    if (key === '\u0003') {
      console.log("BYE, love snek");
      process.exit();
    }
    if (key === 'w') {
      connection.write("Move: up");
    }
    if (key === 'a') {
      connection.write("Move: left");
    }
    if (key === 's') {
      connection.write("Move: down");
    }
    if (key === 'd') {
      connection.write("Move: right");
    }
    if (key === '1') {
      connection.write("Say: YAHOO");
    }
    if (key === '1') {
      connection.write("Say: YAHOO");
    }
    if (key === '1') {
      connection.write("Say: YAHOO");
    }
    if (key === '2') {
      connection.write("Say: I'm a snake");
    }
    if (key === '3') {
      connection.write("Say: GET OVER HERE");
    }
    if (key === '4') {
      connection.write("Say: IMMA GET THAT FOOD");
    }
    if (key === '5') {
      connection.write("Say: ZOOOOOOOOOM");
    }
  });
};

handleUserInput();

module.exports = setupInput;