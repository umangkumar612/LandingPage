

## Binance Futures Testnet Trading Bot — Python Project (Downloadable ZIP)

I'll generate a complete, internship-ready Python project and package it as a single `.zip` you can download and push to GitHub. This is **not** a web app inside Lovable — it's a standalone Python codebase delivered as an artifact.

### What you'll get

A zipped project: `trading_bot.zip` containing:

```
trading_bot/
├── bot/
│   ├── __init__.py
│   ├── client.py            # BinanceFuturesClient: HMAC-SHA256 signing, signed requests, error handling
│   ├── orders.py            # place_market_order, place_limit_order, place_stop_limit_order
│   ├── validators.py        # symbol/side/type/qty/price validation with clear errors
│   ├── logging_config.py    # File + console logging, separate log files per order type
│   └── config.py            # Loads .env, base URL = https://testnet.binancefuture.com
├── webapp/
│   ├── app.py               # Flask UI
│   └── templates/index.html # Dark Binance-style dashboard (black bg, green BUY / red SELL)
├── logs/
│   ├── market_order.log     # Sample log entries
│   └── limit_order.log
├── cli.py                   # argparse CLI entry point with Rich output (tables, banners, colors)
├── .env.example             # Placeholder keys (BINANCE_API_KEY=, BINANCE_SECRET_KEY=)
├── .gitignore
├── requirements.txt         # requests, python-dotenv, rich, flask
└── README.md                # Full docs: setup, testnet key steps, run commands, examples, error handling
```

### Features included

**Core (all mandatory items):**
- MARKET and LIMIT order types, BUY/SELL sides
- CLI: `python cli.py --symbol BTCUSDT --side BUY --type MARKET --qty 0.001`
- Real Binance USDT-M Futures Testnet endpoints (`/fapi/v1/order`) with HMAC-SHA256 signed requests
- Clean formatted output: request summary + response details (orderId, status, executedQty, avgPrice, transactTime) + success/failure banner
- `.env`-based secrets, never hardcoded
- Validation: symbol format, side, type, qty > 0, price required for LIMIT
- Error handling: invalid symbol, missing price, bad qty, API rejection, timeout, network, auth

**Bonus (all three):**
- **STOP-LIMIT** order type (`--type STOP_LIMIT --price ... --stop-price ...`)
- **Rich CLI**: colored output, request/response tables, success/failure banners
- **Flask web UI**: dark trading dashboard, form (symbol/side/type/qty/price), green BUY / red SELL buttons, result panel

### Code quality
- OOP `BinanceFuturesClient` wrapper, reusable order functions
- PEP8, docstrings, beginner-readable comments
- Logs every request payload, response JSON, and error with timestamps

### README covers
Project overview, features, folder structure, how to get Binance Testnet keys (step-by-step), install, run commands, MARKET/LIMIT examples, assumptions, error handling table.

### Delivery
After implementation, you'll see a `<lov-artifact>` link to download `trading_bot.zip`. I'll also QA by unzipping and dry-running `cli.py --help` and validators to confirm it runs without errors before handing it over.

### Notes
- `.env.example` ships with placeholders — you fill in your real Testnet keys locally.
- No live orders are placed during generation; the bot only hits `https://testnet.binancefuture.com`.

