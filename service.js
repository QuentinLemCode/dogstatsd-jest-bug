const ddtrace = require('dd-trace');

function call() {
  ddtrace.dogstatsd.increment('service.call');
  return 'Hello world';
}

module.exports = {
  call: call,
};
