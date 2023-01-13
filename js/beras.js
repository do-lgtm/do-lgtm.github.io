// Mencari keberadaan tombol
var item1 = document.getElementById('tombol1');
var item2 = document.getElementById('tombol2');


// Jika tombol ditekan
item1.onclick = function(){
    var jumlah = prompt("Anda Ingin Beli Berapa?");

    var jumlahharga = jumlah * 56500; 

    if (jumlah >= 10 ) {
        // Menulis Tulisan di Halaman Web.
        document.write(`====================================================<br>`);
        document.write(`Produk yang anda pilih : <b>BERAS CAP TOPI KOKI 5KG</b><br>`);
        // Jumlah Barang
        document.write(`Jumlah Item : <b>${jumlah}</b><br>`);
        // Total Harga
        document.write(`Total harga : Rp <b>${jumlahharga}</b><br>`);     
        document.write(`Untuk melanjutkan pembelian anda, silahkan screenshoot halaman berikut ini dan kirimkan melalui link WA berikut ini :<br>`);
        document.write("<a href= 'https://wa.me/6289518633205' target='_blank'>WhatsApp Link</a><br>");
        document.write(`====================================================<br>`);
        document.write("<a href= 'beras.html'>KEMBALI KE MENU</a><br>");
    } 
    
    // Jika Pembelian Kurang dari 10
    else {
        alert("Pembelian Anda Kurang dari 10");
    }

}

item2.onclick = function(){
    var jumlah = prompt("Anda Ingin Beli Berapa?");

    var jumlahharga = jumlah * 63000;

    if (jumlah >= 10 ) {
        document.write(`====================================================<br>`);
        document.write(`Produk yang anda pilih : <b>BERAS CENTRA RAMOS 5KG</b><br>`);
        document.write(`Jumlah Item : <b>${jumlah}</b><br>`);
        document.write(`Total harga : Rp <b>${jumlahharga}</b><br>`);     
        document.write(`Untuk melanjutkan pembelian anda, silahkan screenshoot halaman berikut ini dan kirimkan melalui link WA berikut ini :<br>`);
        document.write("<a href= 'https://wa.me/6289518633205' target='_blank'>WhatsApp Link</a><br>");
        document.write(`====================================================<br>`);
        document.write("<a href= 'beras.html'>KEMBALI KE MENU</a><br>");
    } else {
        alert("Pembelian Anda Kurang dari 10");
    }

}