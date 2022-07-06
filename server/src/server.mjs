import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from "dotenv";
import dotenvExpand from "dotenv-expand";
import { fileURLToPath } from 'url';
import { dirname } from 'path';

let port = 8000;

// use same env file for both frontend and backend applications
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
var myEnv = dotenv.config({ path: __dirname + "/../../.env" })
dotenvExpand.expand(myEnv)

// CORS settings
let corsOptions = {
    origin: 'http://localhost:8080',
    methods: ['GET', 'POST'],
    optionSuccessStatus: 200
}

const app = express();
app.use(cors(corsOptions))
app.use(bodyParser.json())

app.get('/getUser', function (req, res) {
    res.send(process.env.USER_NAME);
})

app.post('/getChartData', function (req, res) {
    console.log(req.body)
    var chartType = req.body.chartType;
    if (chartType === "barChart") {
        var barData = [
            ['2014', 1000, 400, 200],
            ['2015', 1170, 460, 250],
            ['2016', 660, 1120, 300],
            ['2017', 1030, 540, 350]]
        res.send(barData);
    }
    res.status(500).json("Invalid params");
})

app.listen(port, () => {
    console.log("Server starting on port", port);
})