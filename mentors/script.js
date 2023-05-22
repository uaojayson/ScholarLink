const search = document.querySelector('.input-group input');
const table_rows = document.querySelectorAll('tbody tr');

search.addEventListener('input', searchTable);

function searchTable() {
    table_rows.forEach((row, i) => {
        let table_data = row.textContent;
        let search_data = search.value;

        row.classList.toggle('hide', table_data.indexOf(search_data) < 0);
        row.style.setProperty('--delay', i / 25 + 's');
    });
}
