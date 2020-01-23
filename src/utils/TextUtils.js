function formatCredits(value) {
	//let withCommas = value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	return formatNumber(value) + ' Credits';
}

function formatNumber(value) {
	return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function formatHyperdriveRating(value) {
	return 'Class ' + value;
}

export { formatCredits, formatNumber, formatHyperdriveRating };