const arrays = require('./arrays');

const findMany = (model, query) => {
  return Promise((resolve, reject) => {
    model.findAll(query)
      .then(items => {
        resolve(arrays.init(items));
      })
      .catch(error => {
        reject(error);
      });
  })
};
const findManySync = async (model, query) => {
  let items = null;
  try {
    items = await findMany(model, query);
    return items;
  } catch (err) {
    console.error(err);
  }
  return items;
}
const findOne = (model, query) => {
  return Promise((resolve, reject) => {
    model.findOne(query)
      .then(item => {
        resolve(item);
      })
      .catch(error => {
        reject(error);
      });
  })
};
const findOneSync = async (model, query) => {
  let item = null;
  try {
    item = await findOne(model, query);
  } catch (err) {
    console.error(err);
  }
  return item;
}
const bulkCreate = (model, detailsArray) => {
  return Promise((resolve, reject) => {
    model.bulkCreate(detailsArray, { returning: true })
      .then(items => {
        resolve(arrays.init(items));
      })
      .catch(error => {
        reject(error);
      });
  });
}
const bulkCreateSync = async (model, detailsArray) => {
  let items = null;
  try {
    items = await bulkCreate(model, detailsArray);
  } catch (err) {
    console.error(err);
  }
  return items;
}
const create = (model, details) => {
  return Promise((resolve, reject) => {
    model.create(details, { returning: true })
    .then(item => {
      resolve(item);
    })
    .catch(error => {
      reject(error);
    });
  })
}
const createSync = async (model, details) => {
  let item = null;
  try {
    item = await create(model, details);
  } catch (err) {
    console.error(err);
  }
  return item;
}

const update = (model, criteria, changes) => {
  return Promise((resolve, reject) => {
    model.update(changes, criteria)
    .then(result => {
      resolve(result);
    })
    .catch(error => {
      reject(error);
    });
  })
}
const updateSync = async (model, criteria, changes) => {
  let result = null;
  try {
    result = await update(model, criteria, changes);
  } catch (err) {
    console.error(err);
  }
  return result;
}

module.exports = {
  findMany,
  findManySync,
  findOne,
  findOneSync,
  bulkCreate,
  bulkCreateSync,
  create,
  createSync,
  update,
  updateSync
};
