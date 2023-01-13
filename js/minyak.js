// Mencari keberadaan tombol
var item1 = document.getElementById('tombol1');
var item2 = document.getElementById('tombol2');
var item3 = document.getElementById('tombol3');


// Jika tombol ditekan
item1.onclick = function(){
    var jumlah = prompt("Anda Ingin Beli Berapa?");

    var jumlahharga = jumlah * 16000; 

    if (jumlah >= 10 ) {
        // menampikan tulisan di halaman web
        document.write(`====================================================<br>`);
        document.write(`Produk yang anda pilih : <b>MINYAK GORENG SANIA REFILL 2 LITER</b><br>`);
        // menampilkan jumlah barang yang diinputkan pada variabel jml di halaman web
        document.write(`Jumlah Item : <b>${jumlah}</b><br>`);
        // menampilkan total harga yang sudah dihitung pada variabel jumlah di halaman web
        document.write(`Total harga : Rp <b>${jumlahharga}</b><br>`);     
        document.write(`Untuk melanjutkan pembelian anda, silahkan screenshoot halaman berikut ini dan kirimkan melalui link WA berikut ini :<br>`);
        document.write("<a href= 'https://wa.me/6289518633205' target='_blank'>WhatsApp Link</a><br>");
        document.write(`====================================================<br>`);
        document.write("<a href= 'minyak.html'>KEMBALI KE MENU</a><br>");
    } else {
        alert("Pembelian Anda Kurang dari 10");
    }

}

item2.onclick = function(){
    var jumlah = prompt("Anda Ingin Beli Berapa?");

    var jumlahharga = jumlah * 36000;

    if (jumlah >= 10 ) {
        // menampikan tulisan di halaman web
        document.write(`====================================================<br>`);
        document.write(`Produk yang anda pilih : <b>MINYAK GORENG REFILL SUNCO 2 LITER</b><br>`);
        // menampilkan jumlah barang yang diinputkan pada variabel jml di halaman web
        document.write(`Jumlah Item : <b>${jumlah}</b><br>`);
        // menampilkan total harga yang sudah dihitung pada variabel jumlah di halaman web
        document.write(`Total harga : Rp <b>${jumlahharga}</b><br>`);     
        document.write(`Untuk melanjutkan pembelian anda, silahkan screenshoot halaman berikut ini dan kirimkan melalui link WA berikut ini :<br>`);
        document.write("<a href= 'https://wa.me/6289518633205' target='_blank'>WhatsApp Link</a><br>");
        document.write(`====================================================<br>`);
        document.write("<a href= 'minyak.html'>KEMBALI KE MENU</a><br>");
    } else {
        alert("Pembelian Anda Kurang dari 10");
    }

}

item3.onclick = function(){
    var jumlah = prompt("Anda Ingin Beli Berapa?");

    var jumlahharga = jumlah * 17500;

    if (jumlah >= 10 ) {
        // menampikan tulisan di halaman web
        document.write(`====================================================<br>`);
        document.write(`Produk yang anda pilih : <b>MINYAK GORENG TROPICAL BOTOL 1 LITER</b><br>`);
        // menampilkan jumlah barang yang diinputkan pada variabel jml di halaman web
        document.write(`Jumlah Item : <b>${jumlah}</b><br>`);
        // menampilkan total harga yang sudah dihitung pada variabel jumlah di halaman web
        document.write(`Total harga : Rp <b>${jumlahharga}</b><br>`);     
        document.write(`Untuk melanjutkan pembelian anda, silahkan screenshoot halaman berikut ini dan kirimkan melalui link WA berikut ini :<br>`);
        document.write("<a href= 'https://wa.me/6289518633205' target='_blank'>WhatsApp Link</a><br>");
        document.write(`====================================================<br>`);
        document.write("<a href= 'minyak.html'>KEMBALI KE MENU</a><br>");
    } else {
        alert("Pembelian Anda Kurang dari 10");
    }

}