const bitcoincharts = require('bitcoincharts-promise')
 
const options = {
    timeframe: 1,
    resolution: '30-min',
    transpose: false // Set true to unzip the resulting array 
}
 
bitcoincharts.getOHLC()
	.then ( (OHLC) => {
		console.log(OHLC);
	} )
