function dataperson(){
    let forms = document.getElementById('frm');
    let datanama = forms.nama.value;
    let datapekerjaan = forms.pekerjaan.value;
    let datahobby = forms.hobby.value;
    // let datanama = document.getElementById('frm').nama.value;
    // let datapekerjaan = document.getElementById('frm').pekerjaan.value;
    // let datahobby = document.getElementById('frm').hobby.value;
    input_respond= 'Selamat Datang ' + datanama + ', gimana nih pekerjaan kamu sebagai ' + datapekerjaan + ' ? Agar tidak jenuh, jangan lupa istirahat dengan melakukan hobby ' + datahobby +' kamu ya!';
    noinput_respond= 'Sepertinya kamu belum mengisi seluruh data, coba isi seluruh datanya ya!';
    let hasilsubmit= (datanama && datapekerjaan && datahobby != '') ? input_respond : noinput_respond ;
    document.getElementById('hasil').innerHTML = hasilsubmit;
    //tugasnya lengkapi kode berikut dan tampilkan hasilnya pada html
    // isian nama, pekerjaan, dan hobby
}