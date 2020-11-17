// Using "createElement", "appendChild", "for Loop in for Loop", parseInt, insertRow, insertCell

const inputRows = document.getElementById('inputRows')
const inputColumns = document.getElementById('inputColumns')
const result = document.getElementById('result')

const generateTable = () => {
	//reset
	result.innerHTML = ""

	const rows = inputRows.value
	const columns = inputColumns.value 
	let table = document.createElement('table')

	// cell.innerHTML = 1

	for (let r = 0; r < rows; r++) {
		let row = table.insertRow(r)
		for(let s = 0; s < columns; s++) {
			let cell = row.insertCell(s);
			let cellText = `${r +1}.${s + 1}`
			cell.append(cellText)
		}
	}

	//el loop también se podría escribir así, cambiando los números:
	// for (let r = 1; r <= rows; r++) {
	// 	let row = table.insertRow()
	// 	for(let s = 1; s <= columns; s++) {
	// 		let cell = row.insertCell();
	// 		let cellText = `${r}.${s}`
	// 		cell.append(cellText)
	// 	}
	// }

	result.append(table)
}
