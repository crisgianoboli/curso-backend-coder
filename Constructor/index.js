class Usuario {

  constructor(nombre, apellido, libros, mascotas) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.libro = [libros];
    this.mascotas = [mascotas];
  }

  getFullName() {
    console.log('Hola, mi nombre completo es: '`${this.nombre}, ${this.apellido}` )
  }

  addMascotas(mascota) {
    this.mascotas.push(mascota)
  }

  countMascotas(){
    return this.mascotas.length
  }

  addBook(title, author){
    this.libro.push({
      title: title,
      author: author
    })
  }

  getBookName() {
    return this.libro.map((key) => key.title)
  }
}

const persona = new Usuario('cristian', 'gianoboli', {title: 'madMax', author: 'cris'}, 'loro')
const persona1 = new Usuario('diego', 'gutierrez')


persona.addMascotas('gatos')
console.log(persona)
console.log(persona.getBookName())






