// class Animal {
//     constructor(name) {
//         this.name = name;
//     }
//     eat() {
//         console.log(`${this.name} sedang makan.`);
//     }
// }

// class Cat extends Animal {
//     constructor(name, color) {
//         super(name);
//         this.color = color;
//     }
//     meow() {
//         console.log(`${this.name} si ${this.color} mengeong`);
//     }
// }

// const kucing = new Cat("Tom", "abu-abu");
// kucing.eat();
// kucing.meow();

// class Animal {
//     constructor(name) {
//         this.name = name;
//     }
    
//     speak() {
//         console.log(`${this.name} bersuara`);
//     }
// }

// class Dog extends Animal {
//     bark() {
//         console.log(`${this.name} mengoggong`);
//     }
// }

// class Bird {
//     constructor(name) {
//         this.name = name;
//     }
    
//     fly() {
//         console.log(`${this.name} sedang terbang`);
//     }
// }


// const animal = new Animal("Hewan Umum");
// animal.speak(); 

// const dog = new Dog("Buddy");
// dog.speak(); 
// dog.bark();  

// const bird = new Bird("Tweety");
// bird.fly();  


class Employee {
    constructor(name, position, salary) {
        this.name = name;
        this.position = position;
        this.salary = salary;
    }

    info() {
        console.log(`${this.name} bekerja sebagai ${this.position} dengan gaji ${this.salary}`);
    }
}


class Manager extends Employee {
    constructor(name, position, salary, department) {
        super(name, position, salary);
        this.department = department;
    }

    lead() {
        console.log(`${this.name} memimpin departemen ${this.department}`);
    }
}


const emp1 = new Employee("Rina", "Staff IT", 5000000);
emp1.info();

const mgr1 = new Manager("Budi", "Manager IT", 10000000, "Teknologi Informasi");
mgr1.info();     
mgr1.lead();     
