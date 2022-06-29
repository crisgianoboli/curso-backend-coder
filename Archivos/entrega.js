class Contenedor {
  constructor(name, item) {
    this.name = name;
    this.item = [item];
  }

  saveData(description, price) {
    this.item.push({
      description: description,
      price: price,
    });
  }

  getObjetctById() {}

  getAllObject() {}

  deleteObjectById() {}

  deleteAllObject() {}
}

const item = new Contenedor("Phone", {
  description: "Iphone 8 plus",
  price: 750,
});

console.log(item);
