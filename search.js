// Fungsi untuk mengisi tabel dengan data
function populateTable() {
  const tableBody = document.querySelector("#data-table tbody");

  locations.forEach((location) => {
    const row = document.createElement("tr");

    // Buat sel dan isi dengan data lokasi
    const nameCell = document.createElement("td");
    nameCell.textContent = location.name;
    row.appendChild(nameCell);

    const addressCell = document.createElement("td");
    addressCell.textContent = location.address;
    row.appendChild(addressCell);

    const latitudeCell = document.createElement("td");
    latitudeCell.textContent = location.latitude;
    row.appendChild(latitudeCell);

    const longitudeCell = document.createElement("td");
    longitudeCell.textContent = location.longitude;
    row.appendChild(longitudeCell);

    const fieldCell = document.createElement("td");
    fieldCell.textContent = location.field;
    row.appendChild(fieldCell);

    const phoneCell = document.createElement("td");
    phoneCell.textContent = location.phone;
    row.appendChild(phoneCell);

    const linkCell = document.createElement("td");
    const link = document.createElement("a");
    link.href = location.link;
    link.textContent = "Google Maps";
    link.target = "_blank";
    linkCell.appendChild(link);
    row.appendChild(linkCell);

    // Sisipkan baris ke dalam tubuh tabel
    tableBody.appendChild(row);
  });
}

// Panggil fungsi untuk mengisi tabel
populateTable();

// Fungsi untuk melakukan pencarian
function searchTable(event) {
  event.preventDefault();
  const input = document.getElementById("default-search");
  const filter = input.value.toLowerCase();
  const table = document.getElementById("data-table");
  const rows = table.getElementsByTagName("tr");

  // Loop melalui semua baris tabel dan sembunyikan yang tidak cocok dengan filter
  for (let i = 0; i < rows.length; i++) {
    const cells = rows[i].getElementsByTagName("td");
    let found = false;

    for (let j = 0; j < cells.length; j++) {
      const cellText = cells[j].textContent || cells[j].innerText;
      if (cellText.toLowerCase().indexOf(filter) > -1) {
        found = true;
        break;
      }
    }

    // Tampilkan baris jika cocok, sembunyikan jika tidak cocok
    rows[i].style.display = found ? "" : "none";
  }
}

// Fungsi untuk mengembalikan tabel seperti semula
function resetTable() {
  const table = document.getElementById("data-table");
  const rows = table.getElementsByTagName("tr");

  for (let i = 0; i < rows.length; i++) {
    rows[i].style.display = "";
  }
}

// Tambahkan event listener ke form pencarian
const searchForm = document.querySelector("form");
searchForm.addEventListener("submit", searchTable);

// Tambahkan event listener ke input pencarian untuk mengembalikan tabel seperti semula
const searchInput = document.getElementById("default-search");
searchInput.addEventListener("input", resetTable);
