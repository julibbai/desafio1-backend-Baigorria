class ProductManager {
  constructor() {
    this.products = [];
    this.productIdCounter = 1;
  }

  addProduct(product) {
    if (
      !product.title ||
      !product.description ||
      !product.price ||
      !product.thumbnail ||
      !product.code ||
      !product.stock
    ) {
      console.error("Todos los campos son obligatorios.");
      return;
    }

    if (this.products.some((p) => p.code === product.code)) {
      console.error("El código del producto ya existe.");
      return;
    }

    product.id = this.productIdCounter++;
    this.products.push(product);
    console.log("Producto agregado correctamente:", product);
  }

  getProducts() {
    return this.products;
  }

  getProductById(id) {
    const foundProduct = this.products.find((p) => p.id === id);
    if (foundProduct) {
      return foundProduct;
    } else {
      console.log("Not found");
    }
  }
}

// Ejemplo de uso
const productManager = new ProductManager();
productManager.addProduct({
  title: "producto prueba",
  description: "Este es un producto prueba",
  price: 200,
  thumbnail: "Sin imagen",
  code: "abc123",
  stock: 25,
});

const products = productManager.getProducts();
console.log("Productos:", products);

// modifico el id para encontrar el producto que quiero
let productIdToFind = 1;

let foundProduct = productManager.getProductById(productIdToFind);
console.log("Producto encontrado:", foundProduct);

//si agrego el mismo producto, me dice que ya existe
productManager.addProduct({
  title: "producto prueba",
  description: "Este es un producto prueba",
  price: 200,
  thumbnail: "Sin imagen",
  code: "abc123",
  stock: 25,
});

//si busco un producto con un id que no existe, me dice Not Found

productIdToFind = 4;

foundProduct = productManager.getProductById(productIdToFind);
