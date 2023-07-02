const locations = [
{
  //1
  "name": "PT. Ultiface Selamet Nugraha",
  "address": "Jl. KH. Ahmad Sanusi No.15, Karang Tengah, Kec. Gunungpuyuh, Kota Sukabumi, Jawa Barat 43124",
  "latitude": -6.91454070016,
  "longitude": 106.907014847,
  "field": "Produksi Kosmetik",
  "phone": "(0266) 6244832",
  "link": "https://www.google.com/maps/place/PT.+Ultiface+Selamet+Nugraha/@-6.9143976,106.9047483,18z/data=!4m10!1m2!2m1!1sPT.+Ultiface+Selamet+Nugraha!3m6!1s0x2e6837695102bdc9:0xcbe1da06864771b8!8m2!3d-6.9143976!4d106.9071301!15sChxQVC4gVWx0aWZhY2UgU2VsYW1ldCBOdWdyYWhhkgEQY29ycG9yYXRlX29mZmljZeABAA!16s%2Fg%2F11gm7p832c?entry=ttu",
},
{
  //2
  "name": "PT. Silga Perkasa",
  "address": "Jl. Pelabuhan II No.385, Dayeuhluhur, Kec. Warudoyong, Kota Sukabumi, Jawa Barat 43134",
  "latitude": -6.921234,
  "longitude": 106.916789,
  "field": "Peternakan",
  "phone": "(0266) 225580",
  "link": "https://www.google.com/maps/dir/-6.886581,106.7824432/PT+Silga+Perkasa,+Jl.+Pelabuhan+II+No.385,+Dayeuhluhur,+Kec.+Warudoyong,+Kota+Sukabumi,+Jawa+Barat+43134/@-6.915302,106.7796068,12z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x2e6848036263cdf3:0xbf7b17223ca4c4!2m2!1d106.9190986!2d-6.9447518?entry=ttu",
},
{
  //3
  "name": "PT. Gandhiyo",
  "address": "Jl. A. Yani No.92, Gunungparang, Kec. Cikole, Kota Sukabumi, Jawa Barat 43111",
  "latitude": -6.92212,
  "longitude": 106.92708,
  "field": "Gerai Kartu Pedana",
  "phone": "(021) 8663492",
  "link": "https://www.google.com/maps/dir//PT.+GANDHIYO,+Jl.+A.+Yani+No.92,+Gunungparang,+Kec.+Cikole,+Kota+Sukabumi,+Jawa+Barat+43111/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x2e6848382fa69dd1:0x11229d4c18c5209f?sa=X&ved=2ahUKEwiZ6_PAnuX_AhUexTgGHejdD6EQ48ADegQIExAA&ved=2ahUKEwiZ6_PAnuX_AhUexTgGHejdD6EQ48ADegQILRAK",
},
{
  //4
  "name": "PT. Pinus Merah Abadi Sukabumi",
  "address": "Jl. RH. Didi Sukardi No.195, Gedongpanjang, Kec. Citamiang, Kota Sukabumi, Jawa Barat 43143",
  "latitude": -6.9348354,
  "longitude": 106.9320297,
  "field": "Produksi Makanan",
  "phone": "-",
  "link": "https://www.google.com/maps/dir//PT.PINUS+MERAH+ABADI+SUKABUMI,+Jl.+RH.+Didi+Sukardi+No.195,+Gedongpanjang,+Kec.+Citamiang,+Kota+Sukabumi,+Jawa+Barat+43143/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x2e6849af35508f93:0x31cdb66ba8110539?sa=X&ved=2ahUKEwi45LL3rOX_AhWdZmwGHQcQDO8Q48ADegQIAxAA&ved=2ahUKEwi45LL3rOX_AhWdZmwGHQcQDO8Q48ADegQIGhAK",
},
{
  //5
  "name": "PT. Alpha-EMS Sukabumi",
  "address": "Jl. Pelabuhan II, Dayeuhluhur, Kec. Warudoyong, Kota Sukabumi, Jawa Barat 43131",
  "latitude": -6.9390995,
  "longitude": 106.9198358,
  "field": "Peminjaman uang",
  "phone": "(0266) 260800",
  "link": "https://www.google.com/maps/dir/-6.886581,106.7824432/3W6F%2B7CC+PT+ALPHA-EMS+Sukabumi,+Jl.+Pelabuhan+II,+Dayeuhluhur,+Kec.+Warudoyong,+Kota+Sukabumi,+Jawa+Barat+43131/@-6.915302,106.7829605,12z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x2e68481a055c1e49:0x393c46e66b494980!2m2!1d106.9234976!2d-6.9393099?entry=ttu",
},
{
  //6
  "name": "PT. Universal Indo Gemilang",
  "address": "Gedongpanjang, Kec. Citamiang, Kota Sukabumi, Jawa Barat 43145",
  "latitude": -6.935399,
  "longitude": 106.9309044,
  "field": "Pembuatan Alat Mesin",
  "phone": "-",
  "link": "https://www.google.com/maps/dir/-6.886581,106.7824432/pt+universal+indo+gemilang,+Gedongpanjang,+Kec.+Citamiang,+Kota+Sukabumi,+Jawa+Barat+43145/@-6.9174215,106.7877634,12z/data=!4m9!4m8!1m1!4e1!1m5!1m1!1s0x2e684814fd7c3b57:0x83e94ecd73d9a4f6!2m2!1d106.9336033!2d-6.935423?entry=ttu",
},
{
  //7
  "name": "PT. Ratu Buana Indonesia",
  "address": "Jalan Situendah No.35, RT.002/RW.002, Lembursitu, Kec. Lembursitu, Kota Sukabumi, Jawa Barat",
  "latitude": -6.9584032,
  "longitude": 106.8739972,
  "field": "Kantor Perusahaan",
  "phone": "-",
  "link": "https://www.google.com/maps/place/PT.+RATU+BUANA+INDONESIA/@-6.9584032,106.8739972,13.83z/data=!4m15!1m8!3m7!1s0x2e68397b3ec918eb:0xa9443f427afae69a!2sPT.+RATU+BUANA+INDONESIA!8m2!3d-6.961064!4d106.8958591!10e5!16s%2Fg%2F11qn9ms7x6!3m5!1s0x2e68397b3ec918eb:0xa9443f427afae69a!8m2!3d-6.961064!4d106.8958591!16s%2Fg%2F11qn9ms7x6?entry=ttu",
},
{
  //8
  "name": "PT. Folindo",
  "address": "Jayamekar, Kec. Baros, Kota Sukabumi, Jawa Barat 43166",
  "latitude": -6.965972,
  "longitude": 106.9242259,
  "field": "Pembuatan Alat Mesin",
  "phone": "-",
  "link": "https://www.google.com/maps/place/PT.+Folindo/@-6.965972,106.9242259,17z/data=!4m15!1m8!3m7!1s0x2e6847efa57d6f25:0xcc14b5cd5b78c6c9!2sPT.+Folindo!8m2!3d-6.965972!4d106.9264146!10e5!16s%2Fg%2F11c808hbp_!3m5!1s0x2e6847efa57d6f25:0xcc14b5cd5b78c6c9!8m2!3d-6.965972!4d106.9264146!16s%2Fg%2F11c808hbp_?entry=ttu",
},
{
  //9
  "name": "PT. Jaserindo Area Sukabumi",
  "address": "Jl. Tatanugraha No.40, Jayamekar, Kec. Baros, Kota Sukabumi, Jawa Barat 43166",
  "latitude": -6.9555875,
  "longitude": 106.9234711,
  "field": "Penjualan Makanan",
  "phone": "-",
  "link": "https://www.google.com/maps/place/Pt.+Marga+Nusantara+Jaya/@-6.915302,106.7848781,12z/data=!4m20!1m13!4m12!1m4!2m2!1d106.7824432!2d-6.886581!4e1!1m6!1m2!1s0x2e68483d179e0ac1:0xf90b98160f14881e!2sPt.+Marga+Nusantara+Jaya,+Jl.+Pelabuhan+II+No.153,+Cikondang,+Kec.+Warudoyong,+Kota+Sukabumi,+Jawa+Barat+43131!2m2!1d106.9256958!2d-6.9312974!3m5!1s0x2e68483d179e0ac1:0xf90b98160f14881e!8m2!3d-6.9313028!4d106.9257188!16s%2Fg%2F11b7rncpp1?entry=ttu",
},
{
  //10
  "name": "PT. Marga Nusantara Jaya",
  "address": "Jl. Pelabuhan II No.153, Cikondang, Kec. Warudoyong, Kota Sukabumi, Jawa Barat 43131",
  "latitude": -6.9312975,
  "longitude": 106.9231439,
  "field": "Pembuatan Sertifikat",
  "phone": "(0266) 212246",
  "link": "https://www.google.com/maps/dir/-6.886581,106.7824432/PT.+Jaserindo+Area+Sukabumi,+Jl.+Tatanugraha+No.40,+Jayamekar,+Kec.+Baros,+Kota+Sukabumi,+Jawa+Barat+43166/@-6.9194437,106.785698,12z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x2e6847e2e3d4f5c5:0xf4d7c7ae68b5268b!2m2!1d106.9260092!2d-6.9555787?entry=ttu",
},
{
  //11
  "name": "PT. Sumber Cipta Multiniaga DSO SUKABUMI",
  "address": "Jl. Pelabuhan II, Sindangsari, Kec. Lembursitu, Kota Sukabumi, Jawa Barat 43134",
  "latitude": -6.9513212,
  "longitude": 106.9102848,
  "field": "Pabrik Penjual Rokok",
  "phone": "(0266) 242426",
  "link": "https://www.google.com/maps/dir/-6.886581,106.7824432/PT+Sumber+Cipta+Multiniaga+DSO+SUKABUMI,+Jl.+Pelabuhan+II,+Sindangsari,+Kec.+Lembursitu,+Kota+Sukabumi,+Jawa+Barat+43134/@-6.9172979,106.7802023,12z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x2e6849cd41edbd65:0x88274c70062106a2!2m2!1d106.9128597!2d-6.9513265?entry=ttu",
},
{
  //12
  "name": "PT. Great Apparel Indonesia",
  "address": "Dayeuhluhur, Kec. Warudoyong, Kota Sukabumi, Jawa Barat 43134",
  "latitude": -6.9369651,
  "longitude": 106.9211168,
  "field": "Pabrik Baju",
  "phone": "(0266) 222772",
  "link": "https://www.google.com/maps/dir//PT.+Great+Apparel+Indonesia,+Dayeuhluhur,+Kec.+Warudoyong,+Kota+Sukabumi,+Jawa+Barat+43134/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x2e6849c250f01ab3:0x63877e6da940e5a3?sa=X&ved=2ahUKEwjwt6vvreX_AhWQhGMGHcR-CvcQ48ADegQIDRAA&ved=2ahUKEwjwt6vvreX_AhWQhGMGHcR-CvcQ48ADegQIJRAL",
},
{
  //13
  "name": "PT. Dipo Internasional Pahala Otomotif Sukabumi",
  "address": "Jl. Lkr. Sel., Limusnunggal, Kec. Cibeureum, Kota Sukabumi, Jawa Barat 43165",
  "latitude": -6.9445441,
  "longitude": 106.9407661,
  "field": "Penjualan Mobil Truk",
  "phone": "-",
  "link": "https://www.google.com/maps/dir/-6.886581,106.7824432/3W4V%2B58P+PT.+Dipo+Internasional+Pahala+Otomotif+Sukabumi,+Jl.+Lkr.+Sel.,+Limusnunggal,+Kec.+Cibeureum,+Kota+Sukabumi,+Jawa+Barat+43165/@-6.9174215,106.7928719,12z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x2e6849f00befe55b:0x960994d7bf1cf117!2m2!1d106.943341!2d-6.9445494?entry=ttu",
},
{
  //14
  "name": "PT. Andalan Prima Indonesia",
  "address": "Jl. Pembangunan, Jl. Selakaso Kulon No.87-88, Babakan, Kec. Cibeureum, Kota Sukabumi, Jawa Barat 43142",
  "latitude": -6.9338887,
  "longitude": 106.9545636,
  "field": "Pembuatan Ban",
  "phone": "(0266) 242092",
  "link": "https://www.google.com/maps/dir//PT+Andalan+PrimaIndonesia,+jln+pembangunan,+Jl.+Selakaso+Kulon+No.87-88,+Babakan,+Kec.+Cibeureum,+Kota+Sukabumi,+Jawa+Barat+43142/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x2e6849df70232dc1:0xe8fc4cbb6b0554f5?sa=X&ved=2ahUKEwjwt6vvreX_AhWQhGMGHcR-CvcQ48ADegQICxAA&ved=2ahUKEwjwt6vvreX_AhWQhGMGHcR-CvcQ48ADegQIIhAL",
},
{
  //15
  "name": "PT. Arita Prima Indonesia TBK - Cabang Sukabumi",
  "address": "Perum Genting Puri, Jl. Semarang, Babakan, Kec. Cibeureum, Kota Sukabumi, Jawa Barat 43165",
  "latitude": -6.921789,
  "longitude": 106.953529,
  "field": "Pembuatan Mesin",
  "phone": "(0266) 6220577",
  "link": "https://www.google.com/maps/dir//PT.+Arita+Prima+Indonesia+TBK+-+Cabang+Sukabumi,+Perum+Genting+Puri,+Jl.+Semarang,+Babakan,+Kec.+Cibeureum,+Kota+Sukabumi,+Jawa+Barat+43165/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x2e6849a4908ba7e1:0x4d9858e9b53c4290?sa=X&ved=2ahUKEwjwt6vvreX_AhWQhGMGHcR-CvcQ48ADegQICRAA&ved=2ahUKEwjwt6vvreX_AhWQhGMGHcR-CvcQ48ADegQIIRAL",
},
{
  //16
  "name": "PT. CSA",
  "address": "Jl. Pramuka, Cikondang, Kec. Citamiang, Kota Sukabumi, Jawa Barat 43142",
  "latitude": -6.9418476,
  "longitude": 106.9236753,
  "field": "Penjualan Makanan",
  "phone": "-",
  "link": "https://www.google.com/maps/dir/-6.886581,106.7824432/PT.+CSA,+Jl.+Pramuka,+Cikondang,+Kec.+Citamiang,+Kota+Sukabumi,+Jawa+Barat+43142/@-6.915302,106.7831898,12z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x2e68481047d46525:0x6a653deae7c6f76b!2m2!1d106.9262233!2d-6.9418422?entry=ttu",
},
{
  //17
  "name": "PT. Dana Purna Investama (Sukabumi)",
  "address": "Jl. Tatanugraha No.6, Jayamekar, Kec. Baros, Kota Sukabumi, Jawa Barat 43166",
  "latitude": -6.9511233,
  "longitude": 106.9260106,
  "field": "Peminjaman Uang",
  "phone": "-",
  "link": "https://www.google.com/maps/dir//PT.Dana+Purna+Investama+(Sukabumi),+Jl.+Tatanugraha+No.6,+Jayamekar,+Kec.+Baros,+Kota+Sukabumi,+Jawa+Barat+43166/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x2e6849d3465dc397:0x680332d5a9723fcc?sa=X&ved=2ahUKEwjwt6vvreX_AhWQhGMGHcR-CvcQ48ADegQIBRAA&ved=2ahUKEwjwt6vvreX_AhWQhGMGHcR-CvcQ48ADegQIGRAE",
},
{
  //18
  "name": "PT. Wahid Sukabumi Unilever",
  "address": "Dayeuhluhur, Kec. Warudoyong, Kota Sukabumi, Jawa Barat 43134",
  "latitude": -6.9488372,
  "longitude": 106.9110748,
  "field": "Penjualan Produk",
  "phone": "0838-3559-8381",
  "link": "https://www.google.com/maps/dir/-6.886581,106.7824432/3W27%2BFF6+Pt+Wahid+Sukabumi+Unilever,+Dayeuhluhur,+Kec.+Warudoyong,+Kota+Sukabumi,+Jawa+Barat+43134/@-6.9164094,106.7790761,12z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x2e684992a9e45b91:0xbc996f89f192720b!2m2!1d106.913592!2d-6.9489427?entry=ttu",
},
{
  //19
  "name": "PT. Surya Donasin Sukabumi",
  "address": "Jl. Bhayangkara No.88, Gunungpuyuh, Kec. Gunungpuyuh, Kota Sukabumi, Jawa Barat 43123",
  "latitude": -6.9142735,
  "longitude": 106.9177568,
  "field": "Penjualan Minyak",
  "phone": "-",
  "link": "https://www.google.com/maps/dir//PT.+Surya+Donasin+Sukabumi,+Jl.+Bhayangkara+No.88,+Gunungpuyuh,+Kec.+Gunungpuyuh,+Kota+Sukabumi,+Jawa+Barat+43123/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x2e68482c5defe413:0xfc636401ff0cf853?sa=X&ved=2ahUKEwjwt6vvreX_AhWQhGMGHcR-CvcQ48ADegQIABAA&ved=2ahUKEwjwt6vvreX_AhWQhGMGHcR-CvcQ48ADegQIGhAI",
},
{
  //20
  "name": "PT. Win Sejahtera Tunggal",
  "address": "Babakan, Kec. Cibeureum, Kota Sukabumi, Jawa Barat 43142",
  "latitude": -6.9259369,
  "longitude": 106.9549885,
  "field": "Penjualan Rumah",
  "phone": "-",
  "link": "https://www.google.com/maps/dir//PT.+Win+sejahtera+tunggal,+Babakan,+Kec.+Cibeureum,+Kota+Sukabumi,+Jawa+Barat+43142/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x2e68498b9c2ef25d:0xfdfb2212c3a71dac?sa=X&ved=2ahUKEwjwt6vvreX_AhWQhGMGHcR-CvcQ48ADegQIBBAA&ved=2ahUKEwjwt6vvreX_AhWQhGMGHcR-CvcQ48ADegQIHRAJ",
},
];