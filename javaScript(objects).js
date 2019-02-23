class Player{
	constructor(name, type){
		this.name=name;
		this.type=type;

	}
	introduce(){
		console.log(`Hi I am ${this.name}, I'm a ${this.type}`)
	}

}
class Wizard extends Player{
	constructor(name, type){
		super(name, type)
	}
	haha(){
		console.log(`Heeee I'm a ${this.type}`);
	}
}
const wizard1=new Wizard("Noorain", "Amateur");
const wizard2=new Wizard("OSK", "Beginner");
