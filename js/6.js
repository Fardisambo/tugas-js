// class Animal{
//     speak(){
//         console.log("Animal speaks");
//     }
// }

// class Cat extends Animal{
//     speak(){
//         console.log("Cat meows");
//     }
// }
// const c = new Cat();
// c.speak(); 

// class BankAccount {
//     constructor() {
//         this._balance = 0;
//     }

//     deposit(amount) {
//         this._balance += amount;
//     }

//     showBalance() {
//         console.log(`Current balance: $${this._balance}`);
//     }
// }

// const akun = new BankAccount();
// akun.deposit(500000);
// akun.showBalance();

// akun._balance = 1000000; 
// akun.showBalance();

// class SecureAccount{
//     #balance = 0;

//     deposit(amount) {
//         this.#balance += amount;
//     }

//     showBalance() {
//         console.log(`Current balance: $${this.#balance}`);
//     }
// }

// const secureAkun = new SecureAccount();
// secureAkun.deposit(500000);
// // secureAkun.#balance=10000;
// secureAkun.showBalance();

// class message {
//     send() {
//         console.log("Mengirim pesan umum.");
//     }
// }

// class Email extends message {
//     send() {
//         console.log("mengirim email ke pengguna.");
//     }
// }

// class sms extends message {
//     send() {
//         console.log("mengirim sms ke nomor penerima.");
//     }
// }

// const generalMessage = new message();
// const emailMessage = new Email();
// const smsMessage = new sms();

// console.log("Sending messages:");
// generalMessage.send();
// emailMessage.send();
// smsMessage.send();

class User {
    #password; 
    
    constructor(username, password) {
        this.username = username;
        this.#password = password; 
    }
    
    checkPassword(input) {
        if (input === this.#password) {
            console.log("benar");
            return true;
        } else {
            console.log("salah");
            return false;
        }
    }
    
    // Method tambahan untuk menampilkan username (opsional)
    getUsername() {
        return this.username;
    }
}


const user = new User("john_doe", "kocak");
user.checkPassword("kocak"); 

