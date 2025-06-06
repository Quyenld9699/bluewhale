import { StaticImageData } from "next/image";
import Bach from "public/images/Bach.jpeg";
import Dat from "public/images/Dat.jpg";
import Duc from "public/images/Duc.jpg";
import Hai from "public/images/Hai.jpg";
import Hang from "public/images/Hang.jpg";
import Hanh from "public/images/Hanh.jpg";
import Hien from "public/images/Hien.png";
import Hiep from "public/images/Hiep.jpg";
import Lan from "public/images/Lan.jpg";
import Quyen from "public/images/Quyen.jpg";
import Tuan from "public/images/Tuan.jpg";

// avatar
import bach from "public/avatar/Bach.jpeg";
import dat from "public/avatar/Dat.jpg";
import duc from "public/avatar/Duc.jpg";
import hai from "public/avatar/Hai.jpg";
import hang from "public/avatar/Hang.jpg";
import hanh from "public/avatar/Hanh.jpg";
import hien from "public/avatar/Hien.png";
import hiep from "public/avatar/Hiep.jpg";
import lan from "public/avatar/Lan.jpg";
import quyen from "public/avatar/Quyen.jpg";
import tuan from "public/avatar/Tuan.jpg";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  avatar: StaticImageData;
  image: StaticImageData;
}

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Trịnh Tuấn Đạt!",
    role: "Team Leader",
    avatar: dat,
    image: Dat,
  },
  {
    id: 2,
    name: "Lê Đình Quyền",
    role: "Góc nghiêng thần thánh",
    avatar: quyen,
    image: Quyen,
  },
  {
    id: 3,
    name: "Nguyễn Huy Hải",
    role: "Among us",
    avatar: hai,
    image: Hai,
  },
  {
    id: 4,
    name: "Trần Trọng Hiệp",
    role: "Giọng ca biển sâu",
    avatar: hiep,
    image: Hiep,
  },
  {
    id: 5,
    name: "Trần Thanh Hằng",
    role: "Chị cả",
    avatar: hang,
    image: Hang,
  },
  {
    id: 6,
    name: "Lê Đức Hiển",
    role: "Gương mặt của team",
    avatar: hien,
    image: Hien,
  },
  {
    id: 7,
    name: "Phan Mỹ Hạnh",
    role: "Tuyệt đối điện ảnh",
    avatar: hanh,
    image: Hanh,
  },
  {
    id: 8,
    name: "Nguyễn Phương Lan",
    role: "sink or swim",
    avatar: lan,
    image: Lan,
  },
  {
    id: 9,
    name: "Trần Mạnh Đức",
    role: "Hoà mình với thiên nhiên",
    avatar: duc,
    image: Duc,
  },
  {
    id: 10,
    name: "Phạm Minh Tuấn",
    role: "Tàn nhưng phế",
    avatar: tuan,
    image: Tuan,
  },
  {
    id: 11,
    name: "Trương Gia Bách",
    role: "Át chủ bài",
    avatar: bach,
    image: Bach,
  },
];

export const fishes: { id: number; name: string }[] = [
  {
    id: 1,
    name: "Tôi đã từng là cá đúng",
  },
  {
    id: 2,
    name: "Ngâm mình trong làn nước ây 🎵🎶",
  },
  {
    id: 3,
    name: "Con bên trái kia kìa",
  },
  {
    id: 4,
    name: "Cũng trúng nhưng\nmà là trúng gió",
  },
  {
    id: 5,
    name: "Chọn con khác thì không cơ",
  },
  {
    id: 6,
    name: "Bạn là người được chọn",
  },
  {
    id: 7,
    name: "Không có con nào trúng đâu\nbịp đấy",
  },
  {
    id: 8,
    name: "Cá này không ăn được đâu",
  },
  {
    id: 9,
    name: "🐋 Chúc mừng bạn đã trúng 🐋",
  },
  {
    id: 10,
    name: "Chọn sai rồi, hẹ hẹ hẹ",
  },
  {
    id: 11,
    name: "Hướng 10 giờ",
  },
];
