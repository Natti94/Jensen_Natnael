const express = require('express')

require('dotenv').config()
config()
console.log(process.env.DB_URI);
