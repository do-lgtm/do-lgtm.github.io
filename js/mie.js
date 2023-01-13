// Mencari keberadaan tombol
var item1 = document.getElementById('tombol1');
var item2 = document.getElementById('tombol2');
var item3 = document.getElementById('tombol3');
var item4 = document.getElementById('tombol4');
var item5 = document.getElementById('tombol5');
var item6 = document.getElementById('tombol6');
var item7 = document.getElementById('tombol7');
var item8 = document.getElementById('tombol8');


// Jika tombol ditekan
item1.onclick = function(){
    var jumlah = prompt("Anda Ingin Beli Berapa?");

    var jumlahharga = jumlah * 3000; 

    if (jumlah >= 30 ) {
        // menampikan tulisan di halaman web
        document.write(`====================================================<br>`);
        document.write(`Produk yang anda pilih : <b>INDOMIE SOTO LAMONGAN 80gr</b><br>`);
        // menampilkan jumlah barang yang diinputkan pada variabel jml di halaman web
        document.write(`Jumlah Item : <b>${jumlah}</b><br>`);
        // menampilkan total harga yang sudah dihitung pada variabel jumlah di halaman web
        document.write(`Total harga : Rp <b>${jumlahharga}</b><br>`);     
        document.write(`Untuk melanjutkan pembelian anda, silahkan screenshoot halaman berikut ini dan kirimkan melalui link WA berikut ini :<br>`);
        document.write("<a href= 'https://wa.me/6289518633205' target='_blank'>WhatsApp Link</a><br>");
        document.write(`====================================================<br>`);
        document.write("<a href= 'mie.html'>KEMBALI KE MENU</a><br>");
    } else {
        alert("Pembelian Anda Kurang dari 30");
    }

}

item2.onclick = function(){
    var jumlah = prompt("Anda Ingin Beli Berapa?");

    var jumlahharga = jumlah * 3000;

    if (jumlah >= 30 ) {
        // menampikan tulisan di halaman web
        document.write(`====================================================<br>`);
        document.write(`Produk yang anda pilih : <b>INDOMIE GORENG SPECIAL 85GR</b><br>`);
        // menampilkan jumlah barang yang diinputkan pada variabel jml di halaman web
        document.write(`Jumlah Item : <b>${jumlah}</b><br>`);
        // menampilkan total harga yang sudah dihitung pada variabel jumlah di halaman web
        document.write(`Total harga : Rp <b>${jumlahharga}</b><br>`);     
        document.write(`Untuk melanjutkan pembelian anda, silahkan screenshoot halaman berikut ini dan kirimkan melalui link WA berikut ini :<br>`);
        document.write("<a href= 'https://wa.me/628918633205' target='_blank'>WhatsApp Link</a><br>");
        document.write(`====================================================<br>`);
        document.write("<a href= 'mie.html'>KEMBALI KE MENU</a><br>");
    } else {
        alert("Pembelian Anda Kurang dari 30");
    }

}

item3.onclick = function(){
    var jumlah = prompt("Anda Ingin Beli Berapa?");

    var jumlahharga = jumlah * 2000;

    if (jumlah >= 30 ) {
        // menampikan tulisan di halaman web
        document.write(`====================================================<br>`);
        document.write(`Produk yang anda pilih : <b>MIE GORENG SAKURA 60gr</b><br>`);
        // menampilkan jumlah barang yang diinputkan pada variabel jml di halaman web
        document.write(`Jumlah Item : <b>${jumlah}</b><br>`);
        // menampilkan total harga yang sudah dihitung pada variabel jumlah di halaman web
        document.write(`Total harga : Rp <b>${jumlahharga}</b><br>`);     
        document.write(`Untuk melanjutkan pembelian anda, silahkan screenshoot halaman berikut ini dan kirimkan melalui link WA berikut ini :<br>`);
        document.write("<a href= 'https://wa.me/6289518633205' target='_blank'>WhatsApp Link</a><br>");
        document.write(`====================================================<br>`);
        document.write("<a href= 'mie.html'>KEMBALI KE MENU</a><br>");
    } else {
        alert("Pembelian Anda Kurang dari 30");
    }

}

item4.onclick = function(){
    var jumlah = prompt("Anda Ingin Beli Berapa?");

    var jumlahharga = jumlah * 3000; 

    if (jumlah >= 30 ) {
        // menampikan tulisan di halaman web
        document.write(`====================================================<br>`);
        document.write(`Produk yang anda pilih : <b>INDOMIE KARI AYAM 72gr</b><br>`);
        // menampilkan jumlah barang yang diinputkan pada variabel jml di halaman web
        document.write(`Jumlah Item : <b>${jumlah}</b><br>`);
        // menampilkan total harga yang sudah dihitung pada variabel jumlah di halaman web
        document.write(`Total harga : Rp <b>${jumlahharga}</b><br>`);     
        document.write(`Untuk melanjutkan pembelian anda, silahkan screenshoot halaman berikut ini dan kirimkan melalui link WA berikut ini :<br>`);
        document.write("<a href= 'https://wa.me/6289518633205' target='_blank'>WhatsApp Link</a><br>");
        document.write(`====================================================<br>`);
        document.write("<a href= 'mie.html'>KEMBALI KE MENU</a><br>");
    } else {
        alert("Pembelian Anda Kurang dari 30");
    }

}

item5.onclick = function(){
    var jumlah = prompt("Anda Ingin Beli Berapa?");

    var jumlahharga = jumlah * 3000;

    if (jumlah >= 30 ) {
        // menampikan tulisan di halaman web
        document.write(`====================================================<br>`);
        document.write(`Produk yang anda pilih : <b>INDOMIE AYAM SPESIAL 68gr</b><br>`);
        // menampilkan jumlah barang yang diinputkan pada variabel jml di halaman web
        document.write(`Jumlah Item : <b>${jumlah}</b><br>`);
        // menampilkan total harga yang sudah dihitung pada variabel jumlah di halaman web
        document.write(`Total harga : Rp <b>${jumlahharga}</b><br>`);     
        document.write(`Untuk melanjutkan pembelian anda, silahkan screenshoot halaman berikut ini dan kirimkan melalui link WA berikut ini :<br>`);
        document.write("<a href= 'https://wa.me/6289518633205' target='_blank'>WhatsApp Link</a><br>");
        document.write(`====================================================<br>`);
        document.write("<a href= 'mie.html'>KEMBALI KE MENU</a><br>");
    } else {
        alert("Pembelian Anda Kurang dari 30");
    }

}

item6.onclick = function(){
    var jumlah = prompt("Anda Ingin Beli Berapa?");

    var jumlahharga = jumlah * 3000;

    if (jumlah >= 30 ) {
        // menampikan tulisan di halaman web
        document.write(`====================================================<br>`);
        document.write(`Produk yang anda pilih : <b>MIE SEDAAP SOTO MADURA 82gr</b><br>`);
        // menampilkan jumlah barang yang diinputkan pada variabel jml di halaman web
        document.write(`Jumlah Item : <b>${jumlah}</b><br>`);
        // menampilkan total harga yang sudah dihitung pada variabel jumlah di halaman web
        document.write(`Total harga : Rp <b>${jumlahharga}</b><br>`);     
        document.write(`Untuk melanjutkan pembelian anda, silahkan screenshoot halaman berikut ini dan kirimkan melalui link WA berikut ini :<br>`);
        document.write("<a href= 'https://wa.me/6289518633205' target='_blank'>WhatsApp Link</a><br>");
        document.write(`====================================================<br>`);
        document.write("<a href= 'mie.html'>KEMBALI KE MENU</a><br>");
    } else {
        alert("Pembelian Anda Kurang dari 30");
    }

}

item7.onclick = function(){
    var jumlah = prompt("Anda Ingin Beli Berapa?");

    var jumlahharga = jumlah * 3500;

    if (jumlah >= 30 ) {
        // menampikan tulisan di halaman web
        document.write(`====================================================<br>`);
        document.write(`Produk yang anda pilih : <b>INDOMIE AYAM PANGGANG JUMBO 128gr</b><br>`);
        // menampilkan jumlah barang yang diinputkan pada variabel jml di halaman web
        document.write(`Jumlah Item : <b>${jumlah}</b><br>`);
        // menampilkan total harga yang sudah dihitung pada variabel jumlah di halaman web
        document.write(`Total harga : Rp <b>${jumlahharga}</b><br>`);     
        document.write(`Untuk melanjutkan pembelian anda, silahkan screenshoot halaman berikut ini dan kirimkan melalui link WA berikut ini :<br>`);
        document.write("<a href= 'https://wa.me/6289533206' target='_blank'>WhatsApp Link</a><br>");
        document.write(`====================================================<br>`);
        document.write("<a href= 'mie.html'>KEMBALI KE MENU</a><br>");
    } else {
        alert("Pembelian Anda Kurang dari 30");
    }

}

item8.onclick = function(){
    var jumlah = prompt("Anda Ingin Beli Berapa?");

    var jumlahharga = jumlah * 3000;

    if (jumlah >= 30 ) {
        // menampikan tulisan di halaman web
        document.write(`====================================================<br>`);
        document.write(`Produk yang anda pilih : <b>INDOMIE RENDANG 91gr</b><br>`);
        // menampilkan jumlah barang yang diinputkan pada variabel jml di halaman web
        document.write(`Jumlah Item : <b>${jumlah}</b><br>`);
        // menampilkan total harga yang sudah dihitung pada variabel jumlah di halaman web
        document.write(`Total harga : Rp <b>${jumlahharga}</b><br>`);     
        document.write(`Untuk melanjutkan pembelian anda, silahkan screenshoot halaman berikut ini dan kirimkan melalui link WA berikut ini :<br>`);
        document.write("<a href= 'https://wa.me/6289518633205' target='_blank'>WhatsApp Link</a><br>");
        document.write(`====================================================<br>`);
        document.write("<a href= 'mie.html'>KEMBALI KE MENU</a><br>");
    } else {
        alert("Pembelian Anda Kurang dari 30");
    }

}