class Machine {
    constructor() {
        this.enableMachine = false;
    }
    
    turnOn() {
        this.enableMachine = true;
        console.log('turnOn');
    }
    
    turnOff() {
        this.enableMachine = false;
    }
}


class HomeAppliance extends Machine {
    constructor() {
        super();
        this.enable = false;
    }
    
    plugIn() {
        this.enable = true;
        console.log('plugIn');
    }
    
    plugOff() {
        this.enable = false;
    }
}


class WashingMachine extends HomeAppliance {
    constructor() {
        super();
    }
    
    run() {
        
        if (this.plugIn) {
            console.log('Washing machine is run!!!');
        } else {
            console.log('Machine must be plugged on!');
        }
    }
    
}


let bosch = new WashingMachine();
bosch.plugIn();
bosch.turnOn();


class LightSource extends HomeAppliance {
    constructor() {
        super();
    }
    
    setLevel(lux) {
        
        if (this.plugIn) {
            {
                if (lux < 1 || lux > 100) {
                    this.luminosity = 0;
                } else {
                    this.luminosity = lux;
                }
                console.log('Освещенность равна ' + this.luminosity);
            }
            
        } else {
            console.log('Включите прибор в розетку!')
        }
    }
}

let lightBulb = new LightSource();
lightBulb.plugIn();
lightBulb.setLevel(55);
lightBulb.turnOn();

class AutoVehicle extends Machine {
    constructor() {
        super();
        this.setPositionX = 0;
        this.setPositionY = 0;
    }
    
    setPosition(x, y) {
        this.setPositionX = x;
        this.setPositionY = y;
    };
}

class Car extends AutoVehicle {
    constructor() {
        super();
        this.speed = 10;
    }
    
    setSpeed(speed) {
        this.speed = speed;
    }
    
    run(x, y) {
        if (this.turnOn) {
            console.log(this.setPositionX, this.setPositionY);
            let interval = setInterval(() => {
                if (this.setPositionX <= (x - this.speed)) {
                    this.setPosition(this.setPositionX + this.speed, this.setPositionY);
                } else {
                    this.setPositionX = x;
                }
                if (this.setPositionY <= (y - this.speed)) {
                    this.setPosition(this.setPositionX, this.setPositionY + this.speed);
                } else {
                    this.setPositionY = y;
                }
                if (this.setPositionX >= x && this.setPositionY >= y) {
                    clearInterval(interval);
                }
                console.log(this.setPositionX, this.setPositionY);
            }, 1000);
        } else {
            console.log('Заведите двигатель!');
        }
    }
    
}

var car = new Car();
car.setPosition(0, 0);
car.setSpeed(37);
car.run(162, 481);
    



