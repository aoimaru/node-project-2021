"use strict"

exports.cb = (num) => {
    if (typeof num == "number") {
        if (num < 10) {
            console.log("num is under 10");
        }else{
            console.log("num is over 10");
        }
    }else{
        console.log("Invalid argument!");
    }
};