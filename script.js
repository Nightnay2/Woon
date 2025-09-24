window.onload = () => {
  const img = document.getElementById("roseImg");
  const message = document.getElementById("message");

  // ทำให้รูปเด้งขึ้น
  setTimeout(() => {
    img.style.transform = "scale(1)";
  }, 300);

  // แสดงข้อความพร้อมเลื่อนขึ้นเล็กน้อย
  setTimeout(() => {
    message.style.opacity = 1;
    message.style.transform = "translateY(0)";
  }, 1200);
};
