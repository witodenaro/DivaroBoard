const path = require('path');
const fs = require('fs');

class BaseDatabase {
  constructor(name, initialData) {
    this.name = name;
    this.path = path.resolve(__dirname, '..', name, name + '.json');

    try {
      fs.accessSync(this.path);
      console.info(name + ' database is ready to work.');
    } catch (error) {
      try {
        fs.writeFileSync(this.path, JSON.stringify(initialData || []));
        console.info(name + ' database initialized.');
      } catch (error) {
        console.info(name + ": couldn't initialize database.", error);
      }
    }

    this.database = null;
  }

  load() {
    const JSONData = fs.readFileSync(this.path, {
      encoding: 'utf-8',
    });

    this.database = JSON.parse(JSONData);
  }

  find(where) {
    this.load();

    const data = this.database;

    let filteredData = data;

    for (const key in where) {
      filteredData = filteredData.filter((element) => {
        return element[key] === where[key];
      });
    }

    return filteredData;
  }

  insertOne(element) {
    this.load();

    let newElement = null;

    if (element) {
      newElement = { ...element, id: this.database.length.toString() };
      this.database.push(newElement);
    }

    this.save();

    return newElement;
  }

  updateOne(id, update) {
    this.load();

    let updatedElement = null;

    if (id && update) {
      this.database = this.database.map((element) => {
        if (element.id !== id) {
          return element;
        }

        return (updatedElement = {
          ...element,
          ...update,
        });
      });
    }

    this.save();

    return updatedElement;
  }

  save() {
    try {
      fs.writeFileSync(this.path, JSON.stringify(this.database, null, 2));

      console.info(this.name + ' DB successfully saved!');
    } catch (error) {
      console.info(this.name + " DB couldn't be saved.", error);
    }
  }

  deleteById(id) {
    this.load();

    let deletedElement = null;

    this.database = this.database.filter((element) => {
      if (element.id === id) {
        deletedElement = element;
        return false;
      }

      return true;
    });

    this.save();

    return deletedElement;
  }

  updateMany(where, update) {
    let filteredData = this.database;

    this.database = filteredData.map((element) => {
      for (const key in where) {
        if (element[key] !== where[key]) return element;
      }

      return { ...element, ...update };
    });

    this.save();
  }
}

module.exports = BaseDatabase;
