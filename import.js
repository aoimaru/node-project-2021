"use strict";

// ***********************************
// 関数の外部ファイル呼び出し動作確認のための関数
const extent_function = require("./lib/extention/extention.js");

extent_function.func();
const nakamura = extent_function.naive_func("nakamura");
console.log(nakamura);
// ***********************************


// ***********************************
// 変数の宣言と代入について
const var_dec = require("./lib/var_dec/var_dec.js");

var_dec.variable();

// ***********************************


// ***********************************
// 変数のデフォルト引数
const func_dec = require("./lib/func_dec/fd.js");
// func_dec.default_arg("Not default");
// func_dec.default_arg();
// ***********************************


// ***********************************
// 条件分岐
const cond_branch = require("./lib/condtion_branch/cb.js");

cond_branch.cb("中村");
cond_branch.cb(9);
cond_branch.cb(12);
// ***********************************


// // ***********************************
// // 条件分岐
// const cond_branch = require("./lib/condtion_branch/cb.js");

// cond_branch.cb("中村");
// cond_branch.cb(9);
// cond_branch.cb(12);
// // ***********************************


// ***********************************
// this
const ft = require("./lib/func_this/ft.js");

const item = ft.func_this();
console.log(item);
// ***********************************