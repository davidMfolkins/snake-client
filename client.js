const net = require('net');

/**
 * Establishes connection with the game server
 */

const connect = function() {
  const conn = net.createConnection({
    host: '135.23.222.131',
    port: 50542
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');

  conn.on('connect', () => {
    console.log("Succesfully connected to game server!")
  });

  conn.on('data', () => {
    console.log("you ded cuz you idled");
    console.log("it's got a sharp tongue this server!")
  });

  conn.on('connect', () => {
    conn.write("Name: DF");
  });

  return conn;
};

module.exports = connect;