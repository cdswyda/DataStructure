const LinkedList = require('./LinkedList.js');

// test
const ll = new LinkedList();
(() => {
  let i = 0;
  const len = 10;
  // add
  while (i++ < len) {
    ll.add(i);
  }

  console.log('get');
  i = 0;
  while (i <= len) {
    console.log(i, ll.get(i));
    i++;
  }

  console.log('iterator');
  for (let node of ll) {
    console.log(node);
  }

  console.log('remove');
  i = 0;
  while (i <= len) {
    ll.remove(i);
    console.log([...ll]);
    i++;
  }
})();
