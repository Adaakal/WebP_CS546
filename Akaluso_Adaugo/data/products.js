// TODO: Export and implement the following functions in ES6 format
const mongoCollections = require('./mongoCollections');
const products = mongoCollections.products;

module.exports = {
  async create(
    productName,
    productDescription,
    modelNumber,
    price,
    manufacturer,
    manufacturerWebsite,
    keywords,
    categories,
    dateReleased,
    discontinued
  ) { 
    validateString(productName, "productName");
    validateString(productDescription, "productDescription");
    validateString(modelNumber, "modelNumber");
    validatePrice(price);
    validateString(manufacturer, "manufacturer");
    validateUrl(manufacturerWebsite);
    validateArray(keywords, "keywords");
    validateArray(categories, "categories");
    validateDate(dateReleased);
    if (typeof discontinued !== 'boolean') {
      throw 'Discontinued must be a boolean';
    }

    const productCollection = await products();

    let newProduct = {
      productName,
      productDescription,
      modelNumber,
      price,
      manufacturer,
      manufacturerWebsite,
      keywords,
      categories,
      dateReleased,
      discontinued
    };

    const insertInfo = await productCollection.insertOne(newProduct);
    if (insertInfo.insertedCount === 0 || !insertInfo.acknowledged || !insertInfo.insertedId) {
      throw 'Could not add product';
    }

    const newId = insertInfo.insertedId.toString();

    const product = await this.getProductById(newId);
    return product;
  },

  async getAll() {
    const productCollection = await products();
    let productList = await productCollection.find({}).toArray();
    if (!productList) {
      throw 'Could not get all dogs';
    }
    dogList = dogList.map((element) => {
      element._id = element._id.toString();
      return element;
    });
    return productList;
   },

  async get(id) { 
    let x = new ObjectId(id);
    if (!id) {
      throw 'You must provide an id to search for';
    }
    if (typeof id !== 'string')  {
      throw 'Id must be a string';
    }
    if (id.trim().length === 0) {
      throw 'Id must be a non-empty string';
    }
    id = id.trim();
    if (!ObjectId.isValid(id)) {
      throw 'invalid object ID';
    }
    const productCollection = await products();
    const prod = await productCollection.findOne({_id: new ObjectId(id)});
    if (prod === null) {
      throw 'No product with that id';
    }
    prod._id = prod._id.toString();
    return prod;
  },

  async remove(id) {
    if (!id) {
      throw "You must provide an id to search for";
    }
    if (typeof id !== 'string') {
      throw 'Id must be a string';
    }
    if (id.trim().length === 0) {
      throw 'Id must be a non-empty string';
    }
    id = id.trim();
    if (!ObjectId.isValid(id)) {
      throw 'invalid object ID';
    }
    const productCollection = await products();
    const removeInfo = await productCollection.findOneAndDelete({_id: new ObjectId(id)
    });

    if (!removeInfo) {
      throw  `Could not remove dog with id of ${id}`;
    }

    return `${removeInfo.productName} has been successfully deleted!`;  
  },

  async rename (id, newProductName) { 
    validateId(id);
    trimId(id);
    validateObjectId(id);
    validateString(newProductName, "newProductName");

    const productCollection = await products();
    const updatedInfo = await productCollection.findOneAndUpdate(
      {_id: new ObjectId(id)},
      {$set: {productName: newProductName}},
      {returnOriginal: false}
    );

    if (!updatedInfo) {
      throw 'Could not update product successfully';
    }
    updatedInfo._id = updatedInfo._id.toString();
    return updatedInfo;
    
  }

}

