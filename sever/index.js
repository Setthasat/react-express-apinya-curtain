const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();

const PORT = process.env.PORT || 8888;

dotenv.config();
app.use(cors());
app.use(express.json());
