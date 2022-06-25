//Đăng Nhập Admin
var admin ='admin123';
var mk_admin ="123";

function login(e){
    event.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if(username == admin && password == mk_admin){
        alert('Đăng nhập thành công');
        window.location.href ="./Admin.html";  
    }
    else if(username == "" || username != admin)
    {
        alert('Bạn nhập sai tài khoản');
    }
    else if(password == "" || password != mk_admin){
        alert('Bạn nhập sai mật khẩu');

    }
    else{
        alert('Đăng nhập thất bai.');
    }
}


// Thêm
var data =[];
var x ;

function add(){
    var Sothutu = document.getElementById("stt").value    
    var hovaten = document.getElementById("hovaten").value
    var sdt = document.getElementById("sdt").value
    var email = document.getElementById("eml").value
    var TienHang = document.getElementById("tienhang").value
    var MaHang = document.getElementById("mahang").value
    var Cannang= document.getElementById("cannang").value
    var Tongtien = document.getElementById("tongtien").value
    
   if(TienHang<=5000000){
    x = TienHang * 0.02;
   }
   else if(TienHang<=10000000)
   {
    x = TienHang * 0.015;
   }
   else if(TienHang>10000000){
    x = TienHang * 0.01;
   }
   else{
    x = null;
   }
  

   if(Cannang<=20){
    Tongtien = x + 30000 + parseInt(TienHang);  
   }
   else if(Cannang<=50){
      Tongtien = x + 28000 + parseInt(TienHang);
   }
   else if(Cannang<=100){
    Tongtien = x + 27000 + parseInt(TienHang);
 }
 else if(Cannang<=500){
  Tongtien = x + 26000 + parseInt(TienHang);
}
else{
  Tongtien = null;
}


    var item = {
        TD : Sothutu,
        HVT : hovaten,
        SDT : sdt,
        EML : email,
        MH :MaHang,
        TH : TienHang,  
        CN : Cannang,
        TT : Tongtien
    }
    
    let index = data.findIndex((c)=>c.TD == item.TD)
    if(index>=0){
      data.splice(index,1,item)
    }
    else{
      data.push(item)
    }

    
    show()
    clean()

}
function show(){
    table = `<tr>
    <th scope="col">STT</th>
    <th scope="col">Họ và tên</th>
    <th scope="col">Số điện thoại</th>
    <th scope="col">Email</th>
    <th scope="col">Mã Hàng</th>
    <th scope="col">Tiền Hàng</th>
    <th scope="col">Cân Nặng</th>
    <th scope="col">Tổng tiền</th>
    <th scope="col"></th>
  </tr>`
  for(let i=0; i<data.length;i++){
    table += `<tr>
    <td>${data[i].TD}</td>
    <td>${data[i].HVT}</td>
    <td>${data[i].SDT}</td>
    <td>${data[i].EML}</td>
    <td>${data[i].MH}</td>
    <td>${data[i].TH}</td>
    <td>${data[i].CN}</td>
    <td>${data[i].TT}</td>
    <td><button class="btn btn-primary" onclick="Delete(${data[i].TD})">Xóa</button></td>
    <td><button class="btn btn-primary" onclick="edit(${data[i].TD})">Sửa</button></td>  
  </tr>`

  }
  document.getElementById("show").innerHTML = table
}

function clean(){
  document.getElementById("stt").value="";
  document.getElementById("hovaten").value="";
  document.getElementById("sdt").value="";
  document.getElementById("eml").value="";
  document.getElementById("mahang").value="";
  document.getElementById("tienhang").value="";
  document.getElementById("cannang").value="";
  
  
}

// Xóa
function Delete(x){
  for (let i=0;i<data.length;i++){
          if(data[i].TD==x){
            data.splice(i,1);
            show()
          }
  }

}

//Sửa
function edit(x){
  for(let i=0; i<data.length;i++){
    if(data[i].TD==x){
      document.getElementById("stt").value=data[i].TD;
  document.getElementById("hovaten").value=data[i].HVT;
  document.getElementById("sdt").value=data[i].SDT;
  document.getElementById("eml").value=data[i].EML;
  document.getElementById("mahang").value=data[i].MH;
  document.getElementById("tienhang").value=data[i].TH;
  document.getElementById("cannang").value=data[i].CN;
    }
  }
}

// GỬi thông tin
function send(e){
  event.preventDefault();
  var tieude   = document.getElementById("tieude").value;
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


