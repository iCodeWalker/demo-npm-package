#!/usr/bin/env node

import express from "express";

const app = express();

app.get("/", (req, res) => {
  console.log("Hi there");
});

app.listen(3050, () => {
  console.log("Listening on port: 3050");
});
