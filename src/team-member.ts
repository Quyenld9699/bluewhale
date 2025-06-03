import { StaticImageData } from "next/image";
import Bach from "@/public/images/Bach.jpeg";
import Dat from "@/public/images/Dat.jpg";
import Duc from "@/public/images/Duc.jpg";
import Hai from "@/public/images/Hai.jpg";
import Hang from "@/public/images/Hang.jpg";
import Hanh from "@/public/images/Hanh.jpg";
import Hien from "@/public/images/Hien.png";
import Hiep from "@/public/images/Hiep.jpg";
import Lan from "@/public/images/Lan.jpg";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  avatar: string;
  image: StaticImageData;
}

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Trịnh Tuấn Đạt!",
    role: "Team Leader",
    avatar: "🚀",
    image: Dat,
  },
  { id: 2, name: "Lê Đình Quyền", role: "DevOps", avatar: "🍻", image: Bach },
  {
    id: 3,
    name: "Nguyễn Huy Hải",
    role: "Developer",
    avatar: "⚡",
    image: Hai,
  },
  {
    id: 4,
    name: "Trần Trọng Hiệp",
    role: "Developer",
    avatar: "🔥",
    image: Hiep,
  },
  {
    id: 5,
    name: "Trần Thanh Hằng",
    role: "Back Office",
    avatar: "💎",
    image: Hang,
  },
  { id: 6, name: "Lê Đức Hiển", role: "Developer", avatar: "🌟", image: Hien },
  {
    id: 7,
    name: "Phan Mỹ Hạnh",
    role: "Marketing Generalist",
    avatar: "🎭",
    image: Hanh,
  },
  {
    id: 8,
    name: "Nguyễn Phương Lan",
    role: "Marketing Generalist",
    avatar: "🎉",
    image: Lan,
  },
  { id: 9, name: "Trần Mạnh Đức", role: "Designer", avatar: "🎨", image: Duc },
  {
    id: 10,
    name: "Phạm Minh Tuấn",
    role: "Developer",
    avatar: "♿️",
    image: Bach,
  },
  {
    id: 11,
    name: "Trương Gia Bách",
    role: "Developer",
    avatar: "🔊",
    image: Bach,
  },
];
