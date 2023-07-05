const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const port = 3000

app.use(cors({
  origin: 'http://localhost:3001'
}));

app.use(express.json())

const getPrice = (data) => {
  const { regularMarketPrice, chartPreviousClose } = data;

  console.log(regularMarketPrice, chartPreviousClose)

  if(!regularMarketPrice || !chartPreviousClose) return;

  const diff = regularMarketPrice - chartPreviousClose;
  const percentage = (diff / chartPreviousClose) * 100;

  const sign = diff >= 0 ? "+" : "-";
  const diffFormat = Number(diff).toFixed(2);
  const percentageFormat = Number(percentage).toFixed(2);

  return `${sign}$${diffFormat} (${sign}${percentageFormat}%)`;
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/', async (req, res) => {
  const { symbol, range, interval } = req.body;
  try {
    const { data } = await axios.get(`https://query1.finance.yahoo.com/v8/finance/chart/${symbol}`, {
      params: {
        interval,
        range,
      }
    });

    const { result } = data.chart; 
    const chartDTO = {
      symbol: result[0].meta.symbol,
      regularMarketPrice: result[0].meta.regularMarketPrice || 'No data',
      priceToday: getPrice(result[0].meta) || 'No data',
      validRanges: result[0].meta.validRanges,
      range: result[0].meta.range,
      timestamps: result[0].timestamp,
      volumens: result[0].indicators.quote[0].volume,
      empty: !getPrice(result[0].meta)
    }

    res.status(200).json(chartDTO);
  } catch (error) {
    console.log(error)
    res.json({ error: error.message, status: error.response.status });
  }
})

app.listen(port, () => {
  console.log(`Working on port ${port}`)
})

