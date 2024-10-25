function tinh() {
    const soThuNhat = document.getElementById("soThuNhat").value;
    const soThuHai = document.getElementById("soThuHai").value;
    const phepTinh = document.querySelector('input[name="phepTinh"]:checked');
    const ketQua = document.getElementById("ketQua");
    const thongBao = document.getElementById("thongBao");

    // Check if the first number is input
    if (isNaN(soThuNhat) || soThuNhat === "") {
      thongBao.textContent = "Giá trị nhập ở ô Số thứ nhất không phải là số";
      ketQua.value = "";
      return;
    }
  
    // Check if the second number is input
    if (isNaN(soThuHai) || soThuHai === "") {
      thongBao.textContent = "Giá trị nhập ở ô Số thứ hai không phải là số";
      ketQua.value = "";
      return;
    }
  
    // Check if the operation is chosen
    if (!phepTinh) {
      thongBao.textContent = "Chưa chọn phép tính";
      ketQua.value = "";
      return;
    }

    thongBao.textContent = ""; // Clear any previous notification
  
    let result;
    const num1 = parseFloat(soThuNhat);
    const num2 = parseFloat(soThuHai);
  
    switch (phepTinh.value) {
      case "cong":
        result = num1 + num2;
        break;
      case "tru":
        result = num1 - num2;
        break;
      case "nhan":
        result = num1 * num2;
        break;
      case "chia":
        if (num2 === 0) {
          thongBao.textContent = "Không thể chia cho 0";
          ketQua.value = "";
          return;
        }
        result = num1 / num2;
        break;
    }
  
    ketQua.value = result;
  }
  