"use strict";

const PORT = 3000;

const ejs = require("ejs");
const express = require("express");
const fs = require("fs");

const app = express();

app.engine("ejs", ejs.renderFile);

app.get(
    "/", (req, res) => {
        // アクセスを確認するためのコメント
        console.log("Accessed! from: ", get_ip_adress(req));
        res.send("Hello World");
    }
);
// ***********************************
// 関数の動作確認のための関数
function get_ip_adress(req) {
    // アクセス元のIPアドレスを取得する関数
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    return ip
}; 
// ***********************************

app.listen(
    3000,
    () => console.log("Listening on port 3000...")
);
