// ex26_2.js - Ayelet Danieli - This fundamentals

// Your Task: Edit the storm object. Invoke the printSuperPower function using
// the storm object as the context of the function.
// So your output should be: my super power is flying.
// Well, Storm also controls the weather, so, whatever you choose!
// You cannot change the printSuperPower function

const storm = {
    // add code here
    superPower: "destroying houses",
    printSuperPower: printSuperPower,
    }
    function printSuperPower() {
    console.log("my superpower is " + this.superPower);
    }

    // this prints undefined
    printSuperPower();

    // this is the way to do it -> add a property in the object that is a function
    storm.printSuperPower();
