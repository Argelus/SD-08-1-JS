export class Player {
    constructor(name,level) {
      this.name=name
      this.level=level
    } 
    info(){
      console.log(`${this.name} has reached level ${this.level}!`)
    }

  }
  const Tara = new Player("Tara",6)
  console.log(Tara.info())
