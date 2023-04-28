const memory = {};

const loadData = function(code) {
  return code.reduce(function(memory, value, index) {
    memory[index] = value;
    return memory;
  }, memory);
}

const main = function() {
  const code = [0, 1, 10, 9];
}

exports.loadData = loadData;
