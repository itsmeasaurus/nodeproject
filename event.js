const EventEmitter = require('events');

const eventEmitter = new EventEmitter();

eventEmitter.emit('start');
eventEmitter.on('start',()=>console.log('Start event'));
