import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

export default function ContactLinks() {
  return (
    <div className="flex justify-center gap-6 py-8 text-2xl">
      <a
        href="https://github.com/olusesanayomide"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-gray-700 transition"
      >
        <FaGithub />
      </a>
      <a
        href="https://www.linkedin.com/in/ayomide-olusesan-22b33225b/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-blue-700 transition"
      >
        <FaLinkedin />
      </a>
      <a
        href="mailto:kidd37214@gmail.com"
        className="hover:text-red-600 transition"
      >
        <HiOutlineMail />
      </a>
    </div>
  );
}
