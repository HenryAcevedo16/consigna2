const ProductManager = require('./ProductManager');

const filePath = './productos.json';
const productManager = new ProductManager(filePath);

// Agregar productos utilizando el método addProduct
productManager.addProduct({
  title: 'Xbox Series X',
  description: 'Consola de videojuegos de alta potencia',
  price: 499.99,
  code: 'XBX-001',
  stock: 15
});

productManager.addProduct({
  title: 'Nintendo Switch',
  description: 'Consola híbrida para jugar en casa y en movimiento',
  price: 299.99,
  code: 'NSW-001',
  stock: 25
});

productManager.addProduct({
  title: 'Gaming Laptop ASUS ROG',
  description: 'Laptop gaming con potente rendimiento',
  price: 1499.99,
  code: 'LAP-001',
  stock: 10
});

productManager.addProduct({
  title: 'Logitech G Pro X Mechanical Keyboard',
  description: 'Teclado mecánico para gaming profesional',
  price: 129.99,
  code: 'KB-001',
  stock: 30
});

// Obtener un producto por ID
const productId = 1;
const productById = productManager.getProductById(productId);
console.log(productById);

// Actualizar un producto
const updatedProduct = productManager.updateProduct(productId, { price: 25.99, stock: 40 });
console.log(updatedProduct);

// Eliminar un producto
const deletedProduct = productManager.deleteProduct(productId);
console.log(deletedProduct);

// Mostrar todos los productos después de las operaciones anteriores
const allProducts = productManager.getProducts();
console.log(allProducts);