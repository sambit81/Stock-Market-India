# Stock Market India

Stock Market India is a Node.js-based web application that provides real-time insights into the Indian stock market, including trending stocks, top gainers and losers, price shockers, and the most active stocks.

---

## Features

- Fetch real-time stock market data from external APIs.
- Display top gainers, losers, and active stocks from NSE and BSE.
- Interactive UI for exploring stock data.
- Responsive design using Bootstrap.

---

## Installation and Setup

### Prerequisites

Ensure you have the following installed on your machine:
- [Node.js](https://nodejs.org/) (v14 or later)
- npm (comes with Node.js)

### Steps

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/sambit81/Stock-Market-India.git
   cd Stock-Market-India
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Set Up the API Key:**
   - Go to [Indian Stock Market API](https://indianapi.in/indian-stock-market) and generate an API key.
   - Create a `.env` file in the root directory and add the following:
     ```env
     APIKEY=your_generated_api_key
     ```

4. **Start the Server:**
   ```bash
   node index.js
   ```

5. **Access the Application:**
   Open your browser and navigate to `http://localhost:3000`.

---

## Project Structure

```
Stock Market India/
├── gifs/                     # GIFs demonstrating app functionality
│   ├── Search Stocks.gif
│   ├── Dark Mode.gif
│   ├── Market Trends.gif
│   ├── Mobile View.gif
├── public/                   # Static assets like CSS files
│   ├── styles/
│   │   └── main.css          # Styling for the main pages
├── views/                    # EJS templates for rendering UI
│   ├── index.ejs             # Dashboard template
├── README.md                 # Documentation for the project
├── index.js                  # Main entry point of the application
├── package.json              # Project metadata and dependencies
├── package-lock.json         # Lock file for dependencies
├── .env                      # Environment variables for API configuration
```

---

## Dependencies

The project uses the following npm packages:

- **express**: Handles server routing.
- **ejs**: Template engine for rendering dynamic HTML.
- **body-parser**: Parses incoming request bodies.
- **bootstrap**: CSS framework for responsive design.
- **dotenv**: Loads environment variables from a `.env` file.
- **axios**: Used for making HTTP requests.

Install all dependencies using:
```bash
npm install
```

---

## GIF Demonstrations

Below are some demonstrations of the application's functionality:

1. **Search Stocks:**
   ![Search Stocks](gifs/Search%20Stocks.gif)

2. **Dark Mode:**
   ![Dark Mode](gifs/Dark%20Mode.gif)

3. **Market Trends:**
   ![Market Trends](gifs/Market%20Trends.gif)

4. **Mobile View:**
   ![Mobile View](gifs/Mobile%20View.gif)

---

## How to Use the Application

1. Navigate to the home page (`http://localhost:3000`).
2. Explore sections like top gainers, losers, and active stocks.
3. Use the interactive UI to navigate through stock details.

---

## Future Enhancements

- Add user authentication for a personalized experience.
- Implement a stock watchlist feature.
- Include advanced analytics for better insights.
- Add support for real-time updates using WebSockets.

---

## License

This project is licensed under the MIT License. Feel free to use and modify it as needed.

