const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

class ProductManager {
  constructor(filePath) {
    this.path = filePath;
    this.products = this.readProductsFromFile();
  }

  readProductsFromFile() {
    try {
      const data = fs.readFileSync(this.path, 'utf8');
      return JSON.parse(data);
    } catch (error) {
      return [];
    }
  }

  saveProductsToFile() {
    const data = JSON.stringify(this.products, null, 2);
    fs.writeFileSync(this.path, data, 'utf8');
  }

  addProduct(product) {
    // Verificar si ya existe un producto con el mismo código
    const existingProduct = this.products.find(p => p.code === product.code);

    if (existingProduct) {
      // Si existe, actualiza el producto existente en lugar de crear uno nuevo
      return this.updateProduct(existingProduct.id, product);
    }

    // Si no existe, crea un nuevo producto con un nuevo ID
    const newProduct = {
      id: uuidv4(),
      ...product,
    };

    this.products.push(newProduct);
    this.saveProductsToFile();
    return newProduct;
  }

  getProducts() {
    return this.products;
  }

  getProductById(id) {
    return this.products.find(product => product.id === id);
  }

  updateProduct(id, updatedFields) {
    const index = this.products.findIndex(product => product.id === id);
    if (index !== -1) {
      this.products[index] = { ...this.products[index], ...updatedFields, id };
      this.saveProductsToFile();
      return this.products[index];
    }
    return null;
  }

  deleteProduct(id) {
    const index = this.products.findIndex(product => product.id === id);
    if (index !== -1) {
      const deletedProduct = this.products.splice(index, 1)[0];
      this.saveProductsToFile();
      return deletedProduct;
    }
    return null;
  }
}

module.exports = ProductManager;