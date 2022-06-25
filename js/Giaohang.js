function buy(e){
    event.preventDefault();
    var hovaten = document.getElementById("hovaten1").value;
    var sdt = document.getElementById("sdt1").value;
    var email = document.getElementById("email1").value;
    var kienhang = document.getElementById("kienhang1").value;
    var TienHang = document.getElementById("tienhang1").value;
    var Cannang = document.getElementById("cannang1").value;
    localStorage.setItem("hovaten1",hovaten);
    localStorage.setItem("sdt1",sdt);
    localStorage.setItem("email1",email);
    localStorage.setItem("kienhang1",kienhang);
    localStorage.setItem("tienhang1",TienHang);
    localStorage.setItem("cannang1",Cannang);
    alert('Bạn đã gửi thông tin đi !');
    
    return false;
    
}

