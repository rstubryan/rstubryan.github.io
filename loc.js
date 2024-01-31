document.addEventListener("DOMContentLoaded", function () {
  var map = L.map("map").setView([-6.93078126, 106.925168185], 13);
  var markerLayer = L.layerGroup().addTo(map);
  var table = document
    .getElementById("data-table")
    .getElementsByTagName("tbody")[0];

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
    maxZoom: 18,
  }).addTo(map);
  var locations = [
    {
      //1
      name: "Posyandu Rose",
      address: "Desa Cisande RT 1, Kab. Sukabumi, Jawa Barat",
      latitude: -6.9012804,
      longitude: 106.860324,
      field: "Posyandu",
      phone: "-",
      link: "https://www.google.com/maps/place/Desa+Cisande,+Kab.+Sukabumi,+Jawa+Barat/data=!4m2!3m1!1s0x2e6837e8f0d5b1bf:0x224c2b2cf3658832?entry=ttu",
    },
    {
      //2
      name: "Posyandu Tulip",
      address: "Desa Cisande RT 2, Kab. Sukabumi, Jawa Barat",
      latitude: -6.9012804,
      longitude: 106.85,
      field: "Posyandu",
      phone: "-",
      link: "https://www.google.com/maps/place/Desa+Cisande,+Kab.+Sukabumi,+Jawa+Barat/data=!4m2!3m1!1s0x2e6837e8f0d5b1bf:0x224c2b2cf3658832?entry=ttu",
    },
    {
      //3
      name: "Posyandu Kamboja",
      address: "Desa Cisande RT 3, Kab. Sukabumi, Jawa Barat",
      latitude: -6.9012804,
      longitude: 106.84,
      field: "Posyandu",
      phone: "-",
      link: "https://www.google.com/maps/place/Desa+Cisande,+Kab.+Sukabumi,+Jawa+Barat/data=!4m2!3m1!1s0x2e6837e8f0d5b1bf:0x224c2b2cf3658832?entry=ttu",
    },
    {
      //4
      name: "Posyandu Melati",
      address: "Desa Cisande RT 4, Kab. Sukabumi, Jawa Barat",
      latitude: -6.91,
      longitude: 106.85321,
      field: "Posyandu",
      phone: "-",
      link: "https://www.google.com/maps/place/Desa+Cisande,+Kab.+Sukabumi,+Jawa+Barat/data=!4m2!3m1!1s0x2e6837e8f0d5b1bf:0x224c2b2cf3658832?entry=ttu",
    },
    {
      //5
      name: "Posyandu Anggrek",
      address: "Desa Cisande RT 5, Kab. Sukabumi, Jawa Barat",
      latitude: -6.91,
      longitude: 106.860324,
      field: "Posyandu",
      phone: "-",
      link: "https://www.google.com/maps/place/Desa+Cisande,+Kab.+Sukabumi,+Jawa+Barat/data=!4m2!3m1!1s0x2e6837e8f0d5b1bf:0x224c2b2cf3658832?entry=ttu",
    },
  ];

  // Fungsi untuk menampilkan data pada tabel
  function showDataOnTable(location) {
    var newRow = table.insertRow();
    newRow.innerHTML =
      "<td>" +
      location.name +
      "</td>" +
      "<td>" +
      location.address +
      "</td>" +
      "<td>" +
      location.latitude +
      "</td>" +
      "<td>" +
      location.longitude +
      "</td>" +
      "<td>" +
      location.field +
      "</td>" +
      "<td>" +
      location.phone +
      "</td>" +
      '<td><a href="' +
      location.link +
      '">Google Maps</a></td>';
  }

  // Fungsi untuk menghapus data pada tabel
  function clearDataTable() {
    table.innerHTML = "";
  }

  // Perulangan untuk membuat marker pada setiap lokasi
  for (var i = 0; i < locations.length; i++) {
    var location = locations[i];
    var marker = L.marker([location.latitude, location.longitude], {
      icon: L.divIcon({
        className: "custom-icon",
        html: '<i class="fas fa-city" style="color: #000000;"></i>',
        iconSize: [32, 32],
        iconAnchor: [16, 32],
      }),
    });

    // Membuat fungsi penanganan klik pada marker
    marker.on("click", function (e) {
      clearDataTable();
      var clickedLocation = locations.find(function (loc) {
        return loc.latitude === e.latlng.lat && loc.longitude === e.latlng.lng;
      });

      if (clickedLocation) {
        showDataOnTable(clickedLocation);
      }

      var iconElement = this._icon.firstChild; // Mengambil elemen ikon dari marker
      // Menambahkan kelas "animate-bounce" saat diklik
      iconElement.classList.add("animate-bounce");
      // Menghapus kelas "animate-bounce" setelah 5 detik
      setTimeout(function () {
        iconElement.classList.remove("animate-bounce");
      }, 5000);
    });
    marker.addTo(markerLayer);
  }

  // Fungsi untuk menghapus data pada tabel saat peta digeser
  map.on("dragstart", function () {
    clearDataTable();
  });
});
