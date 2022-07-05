const fs = require("fs");

export default class Contenedor {
  constructor(ruta) {
    this.ruta = ruta;
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
      await fs.promises.writeFile(this.ruta, JSON.stringify(products, null, 2));
      return newId;
    } catch (error) {
      return console.log(error);
    }
  }

  async getObjetctById() {
    try {
      const items = await fs.promises.readFile(this.ruta, "utf-8");
      const listItems = JSON.parse(items);
      const idItem = listItems.filter((element, index) => {
        return element.id === 1;
      });
      // console.log(idItem);
    } catch (error) {
      return [];
    }
  }

  async getAllObject() {
    try {
      const items = await fs.promises.readFile(this.ruta, "utf-8");
      return JSON.parse(items);
    } catch (error) {
      return [];
    }
  }

  deleteObjectById() {}

  async deleteAllObject() {
    try {
      const items = await fs.promises.readFile(this.ruta, "utf-8");
      const listItems = JSON.parse(items);
      const newList = listItems.splice(0, listItems.length);
      console.log(newList);
    } catch (error) {
      return [];
    }
  }
}

const product = new Contenedor("product.txt");

/* product.saveData({
  title: "Iphone 8 Plus",
  price: 699.99,
  id: 3,
  thumbnail:
    "http://www.vicionet.com/Vel/373-large_default/apple-iphone-8-plus-64gb.jpg",
}); */
console.log(product.deleteAllObject());
