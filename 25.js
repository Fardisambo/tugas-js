// function car(name, color, model, year, weight) {
//     this.name = name;
//     this.color = color;
//     this.model = model;
//     this.year = year;
//     this.weight = weight;

//     this.start = function() {
//         console.log(`${this.name} ${this.color} dinyalakan`);
//     };
//     this.drive = function() {
//         console.log(`${this.name} ${this.year} sedang berjalan`);
//     };
// }

// let car1 = new car("Toyota", "Red", "Corolla", 2020, 1500);
// let car2 = new car("Honda", "Blue", "Civic", 2021, 1400);

// car1.start();
// car2.drive();


// function bike(name, color, model, year) {
//     this.name = name;
//     this.color = color;
//     this.model = model;
//     this.year = year;

//     this.naiki = function() {
//         console.log(`${this.name} ${this.color} dinaiki`);
//     };
//     this.padle = function() {
//         console.log(`${this.name} ${this.color} sedang di kayuh`);
//     };
// }

// let bike1 = new bike("Polygon", "Red", 2020);
// let bike2 = new bike("Motop", "Blue", 2021);

// bike1.naiki();
// bike2.padle();

// class Car {
//     constructor(name, model, weight, color) {
//         this.name = name;
//         this.model = model;
//         this.weight = weight;
//         this.color = color;
//     }

//     start() {
//         console.log(`${this.name} Mobil dinyalakan.`);
//     }

//     drive() {
//         console.log(`${this.name} Mobil berjalan`);
//     }

//     brake() {
//         console.log( `${this.name} Mobil direm`);
//     }

//     stop() {
//         console.log( `${this.name} Mobil berhenti`);
//     }
// }
// let car1 = new Car("Fiat", "500", "1200kg", "red");
// car1.start();

// class Bike {
//     constructor(name, color, model, year) {
//         this.name = name;
//         this.color = color;
//         this.model = model;
//         this.year = year;
//     }

//     naiki() {
//         console.log(`${this.name} ${this.color} dinaiki`);
//     }

//     padle() {
//         console.log(`${this.name} ${this.color} sedang di kayuh`);
//     }
// }

// let bike1 = new Bike("Polygon", "Merah", 2020);
// let bike2 = new Bike("Motop", "Biru", 2021);

// bike1.naiki();
// bike2.padle();

// Class Student to store student information
class Student {
    constructor(name, nim, department, year) {
        this.name = name;
        this.nim = nim;
        this.department = department;
        this.year = year;
    }

    introduce() {
        console.log(`Halo, saya ${this.name}, mahasiswa ${this.department}, angkatan ${this.year}`);
    }

    isSenior() {
        return this.year < 2025;
    }
}

// Example usage
const student1 = new Student("Budi", "123456", "Teknik Informatika", 2023);
student1.introduce(); 
console.log(student1.isSenior());  


