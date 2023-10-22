const data = [
  { id: 1, parent: 0, text: "Top-level comment 1" },
  { id: 2, parent: 0, text: "Top-level comment 2" },
  { id: 3, parent: 1, text: "Reply to Top-level comment 1" },
  { id: 4, parent: 3, text: "Reply to Reply to Top-level comment 1" }
];

/**
 * Restructure the flat data array into a nested array.
 *
 * @param {array} data
 * @returns {array}
 */
function restructureArray() {
  // Create an array to hold the root elements
  const root = [];
  const dataForEach = {};
  data.forEach((item) => {
    dataForEach[item.id] = {
      ...item,
      children: []
    };
  });
  console.log(dataForEach);
  data.forEach((item) => {
    const parent = dataForEach[item.parent];
    console.log(parent);
    if (parent) {
      parent.children.push(dataForEach[item.id]);
    } else {
      root.push(dataForEach[item.id]);
    }
  });
  return root;
}

const result = restructureArray(data);

// Output the resut array as a tree.
console.log(JSON.stringify(result, null, 2));
