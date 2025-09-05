export class Player {
    constructor(name,level,xp) {
      this.name=name
      this.level=level
    } 
    info(){
      console.log(`${this.name} has reached level ${this.level}!`)
    }
  
    levelUp(){
            this.level++;
            return `${this.name} subió un nivel, ahora es nivel ${this.level}`
    }
  }
  const Tara = new Player("Tara",6)
  console.log(Tara.levelUp())
