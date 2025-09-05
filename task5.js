export class Player {
    constructor(name,level,xp) {
      this.name=name
      this.level=level
      this.xp=xp
    } 
    info(){
      console.log(`${this.name} has reached level ${this.level}!`)
    }
 raiseXP(){
        this.xp +=10
        return this.levelUp()
    }
    levelUp(){
        if(this.xp >= 100){
            this.level++;
            this.xp -=100;
            return `${this.name} ha alanzado 100pts de experiencia y subió un nivel, ahora es nivel ${this.level}`
        }else{
            return `${this.name} tiene ${this.xp} de xp y aún no es suficiente para sufir de nivel`
        }
    }

  }
  const Tara = new Player("Tara",6,90)
  console.log(Tara.raiseXP())
  console.log(Tara.levelUp())