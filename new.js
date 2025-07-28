let car={
    name:"fiat",
    model:"500",
    weight:"1200kg",
    color:"red",

    start: function() {
        console.log("Mobil dinyalakan");
    },
    drive: function() {
        console.log("Mobil berjalan");
    },
    brake: function() {
        console.log("Mobil direm");
    },
    stop: function() {
        console.log("Mobil berhenti");
    },
};
    console.log("car.name");
    console.log("car.color");
    car.start();
    car.drive();


let bike = {
    Brand: ["United", "Polygon"],
    gear: ["7", "21", "24"],
    color: ["red", "blue", "black"],

    start: function() {
        console.log("Sepeda mulai dikayuh");
    },
    pedal: function() {
        console.log("Sepeda di kayuh");
    },
    drive: function() {
        console.log("Sepeda di rem");
    },
    brake: function() {
        console.log("Sepeda berhenti");
    },
};

console.log(bike.Brand);
console.log(bike.color);
bike.start();
bike.pedal();
