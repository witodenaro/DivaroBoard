const BaseDatabase = require('../base/base');

const statusProperties = ['type', 'title', 'color'];

const initialStatuses = [
  {
    title: 'Open',
    type: 'open',
    color: 'white',
    id: 0,
  },
  {
    title: 'In progress',
    type: 'inProgress',
    color: 'red-300',
    id: 1,
  },
  {
    title: 'Published',
    type: 'published',
    color: 'yellow-300',
    id: 2,
  },
];

class StatusesDatabase extends BaseDatabase {
  checkUniqueFields(fields, status) {
    this.load();

    this.database.forEach((element) => {
      fields.forEach((field) => {
        if (status[field] === element[field]) {
          throw new Error(field + ' must be unique.');
        }
      });
    });
  }

  validateStatus(status) {
    statusProperties.forEach((property) => {
      if (
        !(status.hasOwnProperty(property) !== undefined && status[property])
      ) {
        throw new Error(
          'Status must have the following properties: ' +
            statusProperties.join(', ')
        );
      }
    });
  }

  insertOne(status) {
    this.validateStatus(status);
    this.checkUniqueFields(['type'], status);

    return super.insertOne(status);
  }

  deleteById(id) {
    if (id < initialStatuses.length - 1) {
      return null;
    }

    return super.deleteById(id);
  }
}

module.exports = new StatusesDatabase('statuses', initialStatuses);
