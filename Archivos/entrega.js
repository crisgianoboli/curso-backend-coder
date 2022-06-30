const fs = require("fs");

class Contenedor {
  constructor(file) {
    this.file = file;
  }

  async saveData(item) {
    const products = await this.getAllObject();
    let newId;
    if (products.length == 0) {
      newId = 1;
    } else {
      newId = products[products.length - 1].id + 1;
    }
    const newProduct = { ...item, id: newId };
    products.push(newProduct);
    try {
      await fs.promises.writeFile(this.file, JSON.stringify(products, null, 2));
      return newId;
    } catch (error) {
      return console.log(error);
    }
  }

  getObjetctById() {}

  async getAllObject() {
    try {
      const items = await fs.promises.readFile(this.file, "utf-8");
      return JSON.parse(items);
    } catch (error) {
      return [];
    }
  }

  deleteObjectById() {}

  deleteAllObject() {}
}

const product = new Contenedor("product.txt");

product.saveData({
  title: "Escuadra",
  price: 123.45,
  thumbnail:
    "https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png",
});
