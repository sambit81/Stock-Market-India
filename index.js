import express from "express";
import axios from "axios";
import bodyParser from "body-parser";
import 'dotenv/config';

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(express.json());

const API_URL = "https://stock.indianapi.in/";

var stockName = null;

const config = {
    headers: { 'X-Api-Key': process.env.APIKEY },
};

app.get("/", async (req, res) => {
    try {
        const trending = await loadStocks('trending');
        const nseMostActive = await loadStocks('NSE_most_active');
        const bseMostActive = await loadStocks('BSE_most_active');
        const priceShockers = await loadStocks('price_shockers');

        res.render("index.ejs", { trending: trending, nseMostActive: nseMostActive, bseMostActive: bseMostActive, priceShockers: priceShockers });
    } catch (error) {
        res.status(404).json({ message: "Error fetching stock details." });
    }
});

app.post("/fetch-stock-data", async (req, res) => {
    stockName = req.body["stockName"];
    try {
        const result = await axios.get(API_URL + "stock?name=" + stockName, config);
        res.json(result.data);
    } catch (error) {
        res.status(404).json({ message: "Error fetching stock details."});
    }
});

app.post("/fetch-gainers-losers", async (req, res) => {
    try {
        const result = await axios.get(API_URL + "trending", config);
        res.json(result.data);
    } catch (error) {
        res.status(404).json({ message: "Error fetching stock details."});
    }
});

app.post("/fetch-nse-most-active", async (req, res) => {
    try {
        const result = await axios.get(API_URL + "NSE_most_active", config);
        res.json(result.data);
    } catch (error) {
        res.status(404).json({ message: "Error fetching stock details."});
    }
});

app.post("/fetch-bse-most-active", async (req, res) => {
    try {
        const result = await axios.get(API_URL + "BSE_most_active", config);
        res.json(result.data);
    } catch (error) {
        res.status(404).json({ message: "Error fetching stock details."});
    }
});

app.post("/fetch-price-shockers", async (req, res) => {
    try {
        const result = await axios.get(API_URL + "price_shockers", config);
        res.json(result.data);
    } catch (error) {
        res.status(404).json({ message: "Error fetching stock details."});
    }
});

app.listen(3000, () => {
    console.log(`Server running on port ${port}`);
});

async function loadStocks(endpoint) {
    const result = await axios.get(API_URL + endpoint, config);
    return JSON.stringify(result.data);
}