const cluster = require('cluster');
const os = require('os');
const numCPUs = os.cpus().length;

if (cluster.isMaster) {
  console.log(`Proceso maestro ${process.pid} en ejecución`);
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }
  cluster.on('exit', (worker, code, signal) => {
    console.log(`Proceso hijo ${worker.process.pid} murió. Creando uno nuevo...`);
    cluster.fork();
  });
} else {
  require('./server');
  console.log(`Proceso hijo ${process.pid} en ejecución`);
}
