const arrays = require('./arrays');

const findMany = (model, query) => {
  return new Promise((resolve, reject) => {
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
    return {
      success: true,
      items
    };
  } catch (error) {
    return {
      success: false,
      error
    };
  }
}
const findOne = (model, query) => {
  return new Promise((resolve, reject) => {
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
    return {
      success: true,
      item
    };
  } catch (error) {
    return {
      success: false,
      error
    };
  }
}
const bulkCreate = (model, detailsArray) => {
  return new Promise((resolve, reject) => {
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
    return {
      success: true,
      items
    };
  } catch (error) {
    return {
      success: false,
      error
    };
  }
}
const create = (model, details) => {
  return new Promise((resolve, reject) => {
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
    return {
      success: true,
      item
    };
  } catch (error) {
    return {
      success: false,
      error
    };
  }
}

const update = (model, criteria, changes) => {
  return new Promise((resolve, reject) => {
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
    return {
      success: true,
      result
    };
  } catch (error) {
    return {
      success: false,
      error
    };
  }
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
