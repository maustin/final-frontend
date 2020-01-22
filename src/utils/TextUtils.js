function formatCredits(value) {
	let withCommas = value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	return withCommas + ' Credits';
}

export { formatCredits };