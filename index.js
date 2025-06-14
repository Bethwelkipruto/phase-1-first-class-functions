function receivesAFunction(callback) {
  return callback();
}

function returnsANamedFunction() {
  return function namedFunction() {
	return "I am a named function";
  };
}

function returnsAnAnonymousFunction() {
  return function () {
	return "I am anonymous";
  };
}
