import Daemon from './Daemon';
import Magician from './Magician';


try {
  const daemon = new Daemon('Petya', 'Daemon');

  const magician = new Magician('Vasya', 'Magician');

  daemon.position = 2;
  magician.position = 4;

  console.log(`attack daemon: ${daemon.attack}, magician: ${magician.attack}`);

  daemon.stoned = true;
  magician.stoned = true;
  console.log(`attack daemon: ${daemon.attack}, magician: ${magician.attack}`);
} catch (err) {
  console.log(`${err.name}: ${err.message}`);
}
