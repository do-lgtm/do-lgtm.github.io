// Mencari keberadaan tombol
var item1 = document.getElementById('tombol1');
var item2 = document.getElementById('tombol2');
var item3 = document.getElementById('tombol3');
var item4 = document.getElementById('tombol4');
var item5 = document.getElementById('tombol5');
var item6 = document.getElementById('tombol6');


// Jika tombol ditekan
item1.onclick = function(){
    var jumlah = prompt("Anda Ingin Beli Berapa?");

    var jumlahharga = jumlah * 6000; 

    if (jumlah >= 10 ) {
        // menampikan tulisan di halaman web
        document.write(`====================================================<br>`);
        document.write(`Produk yang anda pilih : <b>MINUTE MAID PULPY ORANGE 500ML</b><br>`);
        // menampilkan jumlah barang yang diinputkan pada variabel jml di halaman web
        document.write(`Jumlah Item : <b>${jumlah}</b><br>`);
        // menampilkan total harga yang sudah dihitung pada variabel jumlah di halaman web
        document.write(`Total harga : Rp <b>${jumlahharga}</b><br>`);     
        document.write(`Untuk melanjutkan pembelian anda, silahkan screenshoot halaman berikut ini dan kirimkan melalui link WA berikut ini :<br>`);
        document.write("<a href= 'https://wa.me/6288518633205' target='_blank'>WhatsApp Link</a><br>");
        document.write(`====================================================<br>`);
        document.write("<a href= 'minuman.html'>KEMBALI KE MENU</a><br>");
    } else {
        alert("Pembelian Anda Kurang dari 10");
    }

}

item2.onclick = function(){
    var jumlah = prompt("Anda Ingin Beli Berapa?");

    var jumlahharga = jumlah * 3500;

    if (jumlah >= 10 ) {
        // menampikan tulisan di halaman web
        document.write(`====================================================<br>`);
        document.write(`Produk yang anda pilih : <b>INDOMILK KIDS SUSU CAIR STRAWBERRY 190ML</b><br>`);
        // menampilkan jumlah barang yang diinputkan pada variabel jml di halaman web
        document.write(`Jumlah Item : <b>${jumlah}</b><br>`);
        // menampilkan total harga yang sudah dihitung pada variabel jumlah di halaman web
        document.write(`Total harga : Rp <b>${jumlahharga}</b><br>`);     
        document.write(`Untuk melanjutkan pembelian anda, silahkan screenshoot halaman berikut ini dan kirimkan melalui link WA berikut ini :<br>`);
        document.write("<a href= 'https://wa.me/6289518633205' target='_blank'>WhatsApp Link</a><br>");
        document.write(`====================================================<br>`);
        document.write("<a href= 'minuman.html'>KEMBALI KE MENU</a><br>");
    } else {
        alert("Pembelian Anda Kurang dari 10");
    }

}

item3.onclick = function(){
    var jumlah = prompt("Anda Ingin Beli Berapa?");

    var jumlahharga = jumlah * 3000;

    if (jumlah >= 10 ) {
        // menampikan tulisan di halaman web
        document.write(`====================================================<br>`);
        document.write(`Produk yang anda pilih : <b>YAKULT MINUMAN SUSU FERMENTASI 65 ML</b><br>`);
        // menampilkan jumlah barang yang diinputkan pada variabel jml di halaman web
        document.write(`Jumlah Item : <b>${jumlah}</b><br>`);
        // menampilkan total harga yang sudah dihitung pada variabel jumlah di halaman web
        document.write(`Total harga : Rp <b>${jumlahharga}</b><br>`);     
        document.write(`Untuk melanjutkan pembelian anda, silahkan screenshoot halaman berikut ini dan kirimkan melalui link WA berikut ini :<br>`);
        document.write("<a href= 'https://wa.me/6289518633205' target='_blank'>WhatsApp Link</a><br>");
        document.write(`====================================================<br>`);
        document.write("<a href= 'minuman.html'>KEMBALI KE MENU</a><br>");
    } else {
        alert("Pembelian Anda Kurang dari 10");
    }

}

item4.onclick = function(){
    var jumlah = prompt("Anda Ingin Beli Berapa?");

    var jumlahharga = jumlah * 3500; 

    if (jumlah >= 10 ) {
        // menampikan tulisan di halaman web
        document.write(`====================================================<br>`);
        document.write(`Produk yang anda pilih : <b>ULTRA MILK SUSU UHT COKLAT 125ML</b><br>`);
        // menampilkan jumlah barang yang diinputkan pada variabel jml di halaman web
        document.write(`Jumlah Item : <b>${jumlah}</b><br>`);
        // menampilkan total harga yang sudah dihitung pada variabel jumlah di halaman web
        document.write(`Total harga : Rp <b>${jumlahharga}</b><br>`);     
        document.write(`Untuk melanjutkan pembelian anda, silahkan screenshoot halaman berikut ini dan kirimkan melalui link WA berikut ini :<br>`);
        document.write("<a href= 'https://wa.me/6289518633205' target='_blank'>WhatsApp Link</a><br>");
        document.write(`====================================================<br>`);
        document.write("<a href= 'minuman.html'>KEMBALI KE MENU</a><br>");
    } else {
        alert("Pembelian Anda Kurang dari 10");
    }

}

item5.onclick = function(){
    var jumlah = prompt("Anda Ingin Beli Berapa?");

    var jumlahharga = jumlah * 4000;

    if (jumlah >= 10 ) {
        // menampikan tulisan di halaman web
        document.write(`====================================================<br>`);
        document.write(`Produk yang anda pilih : <b>BUAVITA JUS BUAH JAMBU / MANGGA 250ML   </b><br>`);
        // menampilkan jumlah barang yang diinputkan pada variabel jml di halaman web
        document.write(`Jumlah Item : <b>${jumlah}</b><br>`);
        // menampilkan total harga yang sudah dihitung pada variabel jumlah di halaman web
        document.write(`Total harga : Rp <b>${jumlahharga}</b><br>`);     
        document.write(`Untuk melanjutkan pembelian anda, silahkan screenshoot halaman berikut ini dan kirimkan melalui link WA berikut ini :<br>`);
        document.write("<a href= 'https://wa.me/6289518633205' target='_blank'>WhatsApp Link</a><br>");
        document.write(`====================================================<br>`);
        document.write("<a href= 'minuman.html'>KEMBALI KE MENU</a><br>");
    } else {
        alert("Pembelian Anda Kurang dari 10");
    }

}

item6.onclick = function(){
    var jumlah = prompt("Anda Ingin Beli Berapa?");

    var jumlahharga = jumlah * 7500;

    if (jumlah >= 10 ) {
        // menampikan tulisan di halaman web
        document.write(`====================================================<br>`);
        document.write(`Produk yang anda pilih : <b>YOU C1000 VITAMIN ORANGE/LEMON 140ML</b><br>`);
        // menampilkan jumlah barang yang diinputkan pada variabel jml di halaman web
        document.write(`Jumlah Item : <b>${jumlah}</b><br>`);
        // menampilkan total harga yang sudah dihitung pada variabel jumlah di halaman web
        document.write(`Total harga : Rp <b>${jumlahharga}</b><br>`);     
        document.write(`Untuk melanjutkan pembelian anda, silahkan screenshoot halaman berikut ini dan kirimkan melalui link WA berikut ini :<br>`);
        document.write("<a href= 'https://wa.me/6285848947471' target='_blank'>WhatsApp Link</a><br>");
        document.write(`====================================================<br>`);
        document.write("<a href= 'minuman.html'>KEMBALI KE MENU</a><br>");
    } else {
        alert("Pembelian Anda Kurang dari 10");
    }

}