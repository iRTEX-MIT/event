# Compatibility of exchange methods

Not all exchanges provide the data that can be requested by the environment method.

Below is a table on what data the exchanges provide.

#### Table of compatibility

| Method           | ByBit | Deribit | Bittrex | BitMex |
|----------------- | ----- | ------- | ------- | ------ |
|{exchange}.price|✔|✔|✔|✔|
|{exchange}.positions|✔|✔|||
|{exchange}.volume| | | |✔|
|{exchange}.buy|✔|✔|||
|{exchange}.sell|✔|✔|||
|{exchange}.editOrder| |✔|||
|{exchange}.orders| |✔|||
|{exchange}.cancelAll| |✔|||
|{exchange}.getDepositAddress| |✔|||
|{exchange}.getHistoricalVolatility| |✔|||

You can call methods that are not compatible with your exchanger, but they will either return the void or fail to perform their functions.    