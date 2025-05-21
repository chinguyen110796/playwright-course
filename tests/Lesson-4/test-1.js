// 1. Khởi động tàu vũ trụ K14
let departurePlanet = "Trái Đất";
let mission = "Khám phá Vũ trụ K14";
let crew = [
  "Quỳnh Chi",
  "Dung Nhi",
  "Giang Sơn",
  "Hồng Nhung",
  "Hà Khoa",
  "Minh Phụng",
  "Phạm Quang",
  "Ngọc Tân",
  "Lê Phương",
  "Mạnh Sỹ",
  "Phát Tài",
  "Hồng Trinh",
  "Hạnh Vũ",
  "Hằng Vũ",
  "Nguyễn Quang",
];
function launchShip(crew) {
  console.log(
    `Chuẩn bị khởi động! Phi hành đoàn gồm: ${crew} sẽ đồng hành cùng bạn trong chuyến phiêu lưu ${mission}!`
  );
}
launchShip(crew);

// 2. Du hành đến hành tinh bí ẩn
function calculateDistance(speed, time) {
  let distance = speed * time;
  console.log(`Khoảng cách đến hành tinh bí ẩn là ${distance} km.`);
}
calculateDistance(1000, 24);

// 3. Hành tinh kỳ lạ
function convertTimeToHex(time) {
  let hexTime = time.toString(16);
  console.log(`Thời gian trên hành tinh kỳ lạ là ${hexTime}.`);
}
convertTimeToHex(120);

// 4. Khám phá kho báu
function decryptCode(code) {
  let listChar = code.split("");
  console.log(listChar);
  listChar.forEach((char) => {
    
  });
}
decryptCode("K14 Challenge");
