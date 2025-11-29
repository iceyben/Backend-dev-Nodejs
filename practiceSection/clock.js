
// first we define our class

class Time {
    myHour = function(){
        return new Date().getHours();
    }

    myMinutes = function(){
        return new Date().getMinutes();
    }
}

let currentTime = new Time();
console.log(`The current time: ${currentTime.myHour()}:${currentTime.myMinutes()}`);