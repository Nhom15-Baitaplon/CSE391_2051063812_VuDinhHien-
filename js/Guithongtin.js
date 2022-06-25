function send(e){
    event.preventDefault();
    var tieude = document.getElementById("tieude").value;
    var hovaten = document.getElementById("hovaten").value;
    var sdt = document.getElementById("sdt").value;
    var email = document.getElementById("email").value;
    var noidung = document.getElementById("noidung").value;
    localStorage.setItem("tieude",tieude);
    localStorage.setItem("hovaten",hovaten);
    localStorage.setItem("sdt",sdt);
    localStorage.setItem("email",email);
    localStorage.setItem("noidung",noidung);
    alert('Bạn đã gửi thông tin đi !');
    
    return false;
    
}


