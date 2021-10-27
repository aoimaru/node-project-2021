"use strict";

exports.default_arg = (arg1=None, arg2="Hello") => {
    if (arg1) {
        console.log(arg1+" "+arg2)
    }else{
        console.log("default"+" "+arg2)
    }
}; 