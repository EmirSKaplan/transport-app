const fs = require("fs");
const flatted = require("flatted");

const save = (fileName, objects) => {
  fs.writeFileSync(
    `data/${fileName}.json`,
    flatted.stringify(objects, null, 2)
  );
};
const load = (fileName) => {
  const file = fs.readFileSync(`data/${fileName}.json`, "utf8");
  return flatted.parse(file);
};
const insert = (fileName, object) => {
  const objects = load(fileName);
  save(fileName, objects.concat(object));
};
const remove = (fileName, index) => {
  const objects = load(fileName);
  objects.splice(index, 1);
  save(fileName, objects);
};
const findByName = (fileName, name) => {
  const objects = load(fileName);
  return objects.find((n) => n.name == name);
};

module.exports = { save, load, insert, remove, findByName };
