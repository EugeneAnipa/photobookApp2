import express from "express";
import morgan from "morgan";
import fs from "node:fs";

var accessLogStream = fs.createWriteStream("access.log", {
  flags: "a",
});

const morGan = morgan("combined", { stream: accessLogStream });

export { morGan };
