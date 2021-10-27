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
// const func_dec = require("./lib/func_dec/fd.js");
// func_dec.default_arg("Not default");
// func_dec.default_arg();
// ***********************************