class Animal {
    constructor(name, size, kind, habitat) {
        this.name = name;
        this.size = size;
        this.kind = kind;
        this.habitat = habitat;
    }
    greet = () => {
        return `I am ${this.name}, a ${this.size} ${this.kind} from ${this.habitat} habitats.`;
    }
}

class Pet extends Animal {
    constructor(name, size, kind, habitat, owner) {
        super(name, size, kind, habitat);
        this.owner = owner;
    }
    greet = () => {
        return `I am ${this.name}, a ${this.size} ${this.kind} from ${this.habitat} habitats. My owner is ${this.owner}.`;
    }
}

class WorkAnimal extends Animal {
    constructor(name, size, kind, habitat, job) {
        super(name, size, kind, habitat);
        this.job = job;
    }
    greet = () => {
        return `I am ${this.name}, a ${this.size} ${this.kind} from ${this.habitat} habitats. My job is ${this.job}.`;
    }
}

const wildLemur = new Animal("Zoboomafoo", "Medium", "Lemur", "Madagascar Jungle");
const goldFish = new Pet("Goldie", "Small", "Gold Fish", "Aquatic", "Jeff");
const chicken = new WorkAnimal("Bonzu", "Small", "Chicken", "Worldwide", "Egg Laying");

console.log(wildLemur.greet());
console.log(goldFish.greet());
console.log(chicken.greet());