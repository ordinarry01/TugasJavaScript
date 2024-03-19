let frm = document.getElementById('gajipegawai');
let daftarjabatan = ['Manager', 'Asisten Manager', 'Staff'];
let pilihjabatan = `<option>Pilih Jabatan----------</option>`;
for (let j in daftarjabatan){
    pilihjabatan += `<option value="${daftarjabatan[j]}">${daftarjabatan[j]}</option>`;
}

frm.jabatan.innerHTML=pilihjabatan;

let daftarstatus = ['Menikah', 'Belum Menikah'];
let pilihstatus = `<option>Pilih Status----------</option>`
for(let s in daftarstatus){
    pilihstatus += `<option value="${daftarstatus[s]}">${daftarstatus[s]}</option>`;
}

frm.status.innerHTML=pilihstatus;

function perhitungan(){
    let nama = frm.nama.value;
    let jabatan = frm.jabatan.value;
    let status = frm.status.value;
    let gajipokok;
    switch(jabatan){
        case 'Manager': gajipokok = 15000000;break;
        case 'Asisten Manager': gajipokok = 10000000;break;
        case 'Staff': gajipokok = 5000000;break;
    }
    let tunjanganjabatan = gajipokok * 15 / 100;
    let BPJS = gajipokok * 10 / 100;
    let tunjangankeluarga=(status=='Menikah')? gajipokok * 20 / 100 : 0;
    
    let totalgaji = gajipokok + tunjanganjabatan + BPJS + tunjangankeluarga;

    frm.gajipokok.value = gajipokok;
    frm.tunjanganjabatan.value = tunjanganjabatan;
    frm.BPJS.value=BPJS;
    frm.tunjangankeluarga.value=tunjangankeluarga;
    frm.totalgaji.value=totalgaji;

    
    swal({
      title: "Apakah Data yang Anda Berikan Sudah Sesuai",
      text: "Nama: "+nama+",  Jabatan: "+jabatan+",  Status: "+status,
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        swal("Tabel Gaji Sudah Diperbarui", {
          icon: "success",
        });
      } else {
        swal("Silahkan Isi Data dengan Benar");
      }
    });
      // swal(`
      //   Gaji Pokok: ${gajipokok}
      //   Tunjangan Jabatan: ${tunjanganjabatan}
      //   BPJS: ${BPJS}
      //   Tunjangan Keluarga: ${tunjangankeluarga}
      // `)
}


