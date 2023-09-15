// Function to generate and download the Excel sheet
function generateExcel() {
    const table = document.querySelector('table');
    const rows = Array.from(table.querySelectorAll('tr'));

    const data = rows.map(row => Array.from(row.querySelectorAll('td, th')).map(cell => cell.innerText));
    const headers = data.shift();

    const worksheet = XLSX.utils.aoa_to_sheet([headers, ...data]);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Report');

    const wbout = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const blob = new Blob([wbout], { type: 'application/octet-stream' });
    const url = URL.createObjectURL(blob);

    // Create a link and click it to download the file
    const a = document.createElement('a');
    a.href = url;
    a.download = 'report.xlsx';
    document.body.appendChild(a);
    a.click();

    // Clean up
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

// Attach the generateExcel function to the button click event
document.getElementById('generateReport').addEventListener('click', generateExcel);