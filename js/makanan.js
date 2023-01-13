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

    var jumlahharga = jumlah * 9000; 

    if (jumlah >= 5 ) {
        // menampikan tulisan di halaman web
        document.write(`====================================================<br>`);
        document.write(`Produk yang anda pilih : <b>CHITATO BEEF EDITION SAPI PANGGANG 68gr</b><br>`);
        // menampilkan jumlah barang yang diinputkan pada variabel jml di halaman web
        document.write(`Jumlah Item : <b>${jumlah}</b><br>`);
        // menampilkan total harga yang sudah dihitung pada variabel jumlah di halaman web
        document.write(`Total harga : Rp <b>${jumlahharga}</b><br>`);     
        document.write(`Untuk melanjutkan pembelian anda, silahkan screenshoot halaman berikut ini dan kirimkan melalui link WA berikut ini :<br>`);
        document.write("<a href= 'https://wa.me/6289518633205' target='_blank'>WhatsApp Link</a><br>");
        document.write(`====================================================<br>`);
        document.write("<a href= 'makanan.html'>KEMBALI KE MENU</a><br>");
    } else {
        alert("Pembelian Anda kurang dari 5");
    }

}

item2.onclick = function(){
    var jumlah = prompt("Anda Ingin Beli Berapa?");

    var jumlahharga = jumlah * 5000;

    if (jumlah >= 5 ) {
        // menampikan tulisan di halaman web
        document.write(`====================================================<br>`);
        document.write(`Produk yang anda pilih : <b>TICTAC MIX DUA KELINCI 90gr</b><br>`);
        // menampilkan jumlah barang yang diinputkan pada variabel jml di halaman web
        document.write(`Jumlah Item : <b>${jumlah}</b><br>`);
        // menampilkan total harga yang sudah dihitung pada variabel jumlah di halaman web
        document.write(`Total harga : Rp <b>${jumlahharga}</b><br>`);     
        document.write(`Untuk melanjutkan pembelian anda, silahkan screenshoot halaman berikut ini dan kirimkan melalui link WA berikut ini :<br>`);
        document.write("<a href= 'https://wa.me/6289528633205' target='_blank'>WhatsApp Link</a><br>");
        document.write(`====================================================<br>`);
        document.write("<a href= 'makanan.html'>KEMBALI KE MENU</a><br>");
    } else {
        alert("Pembelian Anda Kurang dari 5");
    }

}

item3.onclick = function(){
    var jumlah = prompt("Anda Ingin Beli Berapa?");

    var jumlahharga = jumlah * 1500;

    if (jumlah >= 5 ) {
        // menampikan tulisan di halaman web
        document.write(`====================================================<br>`);
        document.write(`Produk yang anda pilih : <b>MIE GEMEZ ENAAK SIANTAR TOP 18gr</b><br>`);
        // menampilkan jumlah barang yang diinputkan pada variabel jml di halaman web
        document.write(`Jumlah Item : <b>${jumlah}</b><br>`);
        // menampilkan total harga yang sudah dihitung pada variabel jumlah di halaman web
        document.write(`Total harga : Rp <b>${jumlahharga}</b><br>`);     
        document.write(`Untuk melanjutkan pembelian anda, silahkan screenshoot halaman berikut ini dan kirimkan melalui link WA berikut ini :<br>`);
        document.write("<a href= 'https://wa.me/6289518633205' target='_blank'>WhatsApp Link</a><br>");
        document.write(`====================================================<br>`);
        document.write("<a href= 'makanan.html'>KEMBALI KE MENU</a><br>");
    } else {
        alert("Pembelian Anda Kurang dari 5");
    }

}

item4.onclick = function(){
    var jumlah = prompt("Anda Ingin Beli Berapa?");

    var jumlahharga = jumlah * 10000; 

    if (jumlah >= 5 ) {
        // menampikan tulisan di halaman web
        document.write(`====================================================<br>`);
        document.write(`Produk yang anda pilih : <b>GERY CRACKERS BERAS ASIN 10 x 5.6gr</b><br>`);
        // menampilkan jumlah barang yang diinputkan pada variabel jml di halaman web
        document.write(`Jumlah Item : <b>${jumlah}</b><br>`);
        // menampilkan total harga yang sudah dihitung pada variabel jumlah di halaman web
        document.write(`Total harga : Rp <b>${jumlahharga}</b><br>`);     
        document.write(`Untuk melanjutkan pembelian anda, silahkan screenshoot halaman berikut ini dan kirimkan melalui link WA berikut ini :<br>`);
        document.write("<a href= 'https://wa.me/6289518633205' target='_blank'>WhatsApp Link</a><br>");
        document.write(`====================================================<br>`);
        document.write("<a href= 'makanan.html'>KEMBALI KE MENU</a><br>");
    } else {
        alert("Pembelian Anda Kurang dari 5");
    }

}

item5.onclick = function(){
    var jumlah = prompt("Anda Ingin Beli Berapa?");

    var jumlahharga = jumlah * 5500;

    if (jumlah >= 5 ) {
        // menampikan tulisan di halaman web
        document.write(`====================================================<br>`);
        document.write(`Produk yang anda pilih : <b>TARO SNACK NET SEAWEED PACK 70gr</b><br>`);
        // menampilkan jumlah barang yang diinputkan pada variabel jml di halaman web
        document.write(`Jumlah Item : <b>${jumlah}</b><br>`);
        // menampilkan total harga yang sudah dihitung pada variabel jumlah di halaman web
        document.write(`Total harga : Rp <b>${jumlahharga}</b><br>`);     
        document.write(`Untuk melanjutkan pembelian anda, silahkan screenshoot halaman berikut ini dan kirimkan melalui link WA berikut ini :<br>`);
        document.write("<a href= 'https://wa.me/6289518633205' target='_blank'>WhatsApp Link</a><br>");
        document.write(`====================================================<br>`);
        document.write("<a href= 'makanan.html'>KEMBALI KE MENU</a><br>");
    } else {
        alert("Pembelian Anda Kurang dari 5");
    }

}

item6.onclick = function(){
    var jumlah = prompt("Anda Ingin Beli Berapa?");

    var jumlahharga = jumlah * 10000;

    if (jumlah >= 10 ) {
        // menampikan tulisan di halaman web
        document.write(`====================================================<br>`);
        document.write(`Produk yang anda pilih : <b>KOKOKRUNCH CEREAL COMBO PACK CUP 32gr</b><br>`);
        // menampilkan jumlah barang yang diinputkan pada variabel jml di halaman web
        document.write(`Jumlah Item : <b>${jumlah}</b><br>`);
        // menampilkan total harga yang sudah dihitung pada variabel jumlah di halaman web
        document.write(`Total harga : Rp <b>${jumlahharga}</b><br>`);     
        document.write(`Untuk melanjutkan pembelian anda, silahkan screenshoot halaman berikut ini dan kirimkan melalui link WA berikut ini :<br>`);
        document.write("<a href= 'https://wa.me/6289518633205' target='_blank'>WhatsApp Link</a><br>");
        document.write(`====================================================<br>`);
        document.write("<a href= 'makanan.html'>KEMBALI KE MENU</a><br>");
    } else {
        alert("Pembelian Anda Kurang dari 5");
    }

}