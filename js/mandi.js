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

    var jumlahharga = jumlah * 13000; 

    if (jumlah >= 10 ) {
        // menampikan tulisan di halaman web
        document.write(`====================================================<br>`);
        document.write(`Produk yang anda pilih : <b>PEPSODENT PASTA GIGI HERBAL 120gr</b><br>`);
        // menampilkan jumlah barang yang diinputkan pada variabel jml di halaman web
        document.write(`Jumlah Item : <b>${jumlah}</b><br>`);
        // menampilkan total harga yang sudah dihitung pada variabel jumlah di halaman web
        document.write(`Total harga : Rp <b>${jumlahharga}</b><br>`);     
        document.write(`Untuk melanjutkan pembelian anda, silahkan screenshoot halaman berikut ini dan kirimkan melalui link WA berikut ini :<br>`);
        document.write("<a href= 'https://wa.me/6285848947471' target='_blank'>WhatsApp Link</a><br>");
        document.write(`====================================================<br>`);
        document.write("<a href= 'mandi.html'>KEMBALI KE MENU</a><br>");
    } else {
        alert("Pembelian Anda Kurang dari 10");
    }

}

item2.onclick = function(){
    var jumlah = prompt("Anda Ingin Beli Berapa?");

    var jumlahharga = jumlah * 17000;

    if (jumlah >= 10 ) {
        // menampikan tulisan di halaman web
        document.write(`====================================================<br>`);
        document.write(`Produk yang anda pilih : <b>FORMULA SIKAT GIGI SPARKLING WHITE SOFT 3s</b><br>`);
        // menampilkan jumlah barang yang diinputkan pada variabel jml di halaman web
        document.write(`Jumlah Item : <b>${jumlah}</b><br>`);
        // menampilkan total harga yang sudah dihitung pada variabel jumlah di halaman web
        document.write(`Total harga : Rp <b>${jumlahharga}</b><br>`);     
        document.write(`Untuk melanjutkan pembelian anda, silahkan screenshoot halaman berikut ini dan kirimkan melalui link WA berikut ini :<br>`);
        document.write("<a href= 'https://wa.me/6285848947471' target='_blank'>WhatsApp Link</a><br>");
        document.write(`====================================================<br>`);
        document.write("<a href= 'mandi.html'>KEMBALI KE MENU</a><br>");
    } else {
        alert("Pembelian Anda Kurang dari 10");
    }

}

item3.onclick = function(){
    var jumlah = prompt("Anda Ingin Beli Berapa?");

    var jumlahharga = jumlah * 21500;

    if (jumlah >= 10 ) {
        // menampikan tulisan di halaman web
        document.write(`====================================================<br>`);
        document.write(`Produk yang anda pilih : <b>BIORE RELAXING AROMATIC 450ML REFILL</b><br>`);
        // menampilkan jumlah barang yang diinputkan pada variabel jml di halaman web
        document.write(`Jumlah Item : <b>${jumlah}</b><br>`);
        // menampilkan total harga yang sudah dihitung pada variabel jumlah di halaman web
        document.write(`Total harga : Rp <b>${jumlahharga}</b><br>`);     
        document.write(`Untuk melanjutkan pembelian anda, silahkan screenshoot halaman berikut ini dan kirimkan melalui link WA berikut ini :<br>`);
        document.write("<a href= 'https://wa.me/6285848947471' target='_blank'>WhatsApp Link</a><br>");
        document.write(`====================================================<br>`);
        document.write("<a href= 'mandi.html'>KEMBALI KE MENU</a><br>");
    } else {
        alert("Pembelian Anda Kurang dari 10");
    }

}

item4.onclick = function(){
    var jumlah = prompt("Anda Ingin Beli Berapa?");

    var jumlahharga = jumlah * 32000; 

    if (jumlah >= 10 ) {
        // menampikan tulisan di halaman web
        document.write(`====================================================<br>`);
        document.write(`Produk yang anda pilih : <b>LIFEBUOY SHAMPOO STRONG & SHINY 340 ML</b><br>`);
        // menampilkan jumlah barang yang diinputkan pada variabel jml di halaman web
        document.write(`Jumlah Item : <b>${jumlah}</b><br>`);
        // menampilkan total harga yang sudah dihitung pada variabel jumlah di halaman web
        document.write(`Total harga : Rp <b>${jumlahharga}</b><br>`);     
        document.write(`Untuk melanjutkan pembelian anda, silahkan screenshoot halaman berikut ini dan kirimkan melalui link WA berikut ini :<br>`);
        document.write("<a href= 'https://wa.me/6285848947471' target='_blank'>WhatsApp Link</a><br>");
        document.write(`====================================================<br>`);
        document.write("<a href= 'mandi.html'>KEMBALI KE MENU</a><br>");
    } else {
        alert("Pembelian Anda Kurang dari 10");
    }

}

item5.onclick = function(){
    var jumlah = prompt("Anda Ingin Beli Berapa?");

    var jumlahharga = jumlah * 23000;

    if (jumlah >= 10 ) {
        // menampikan tulisan di halaman web
        document.write(`====================================================<br>`);
        document.write(`Produk yang anda pilih : <b>PANTENE SHAMPOO NATURE CARE FULLNESS & LIFE 290ML</b><br>`);
        // menampilkan jumlah barang yang diinputkan pada variabel jml di halaman web
        document.write(`Jumlah Item : <b>${jumlah}</b><br>`);
        // menampilkan total harga yang sudah dihitung pada variabel jumlah di halaman web
        document.write(`Total harga : Rp <b>${jumlahharga}</b><br>`);     
        document.write(`Untuk melanjutkan pembelian anda, silahkan screenshoot halaman berikut ini dan kirimkan melalui link WA berikut ini :<br>`);
        document.write("<a href= 'https://wa.me/6285848947471' target='_blank'>WhatsApp Link</a><br>");
        document.write(`====================================================<br>`);
        document.write("<a href= 'mandi.html'>KEMBALI KE MENU</a><br>");
    } else {
        alert("Pembelian Anda Kurang dari 10");
    }

}

item6.onclick = function(){
    var jumlah = prompt("Anda Ingin Beli Berapa?");

    var jumlahharga = jumlah * 21000;

    if (jumlah >= 10 ) {
        // menampikan tulisan di halaman web
        document.write(`====================================================<br>`);
        document.write(`Produk yang anda pilih : <b>CLEAR MEN COOL SPORT MENTHOL SHAMPOO 160ML</b><br>`);
        // menampilkan jumlah barang yang diinputkan pada variabel jml di halaman web
        document.write(`Jumlah Item : <b>${jumlah}</b><br>`);
        // menampilkan total harga yang sudah dihitung pada variabel jumlah di halaman web
        document.write(`Total harga : Rp <b>${jumlahharga}</b><br>`);     
        document.write(`Untuk melanjutkan pembelian anda, silahkan screenshoot halaman berikut ini dan kirimkan melalui link WA berikut ini :<br>`);
        document.write("<a href= 'https://wa.me/6285848947471' target='_blank'>WhatsApp Link</a><br>");
        document.write(`====================================================<br>`);
        document.write("<a href= 'mandi.html'>KEMBALI KE MENU</a><br>");
    } else {
        alert("Pembelian Anda Kurang dari 10");
    }

}