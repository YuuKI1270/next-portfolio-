import Image from "next/image";
import {
  FaSquareFacebook,
  FaSquareInstagram,
  FaTelegram,
} from "react-icons/fa6";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="container mx-auto h-[calc(100vh-72px)]">
        <div className="grid grid-cols-2 gap-0 h-full">
          <div className="relative">
            <div className="w-[600px] absolute left-0 bottom-5">
              {" "}
              <Image
                src="/img/photo_2024-05-19_18-49-21.jpg" // Make sure to replace this with your actual image path
                alt="Profile Image"
                width={700}
                height={700}
                className="object-cover"
              />
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <div className="text-6xl text-center text-black font-semibold leading-normal">
              <span className="text-blue-500">Hello,</span>{" "}
              {`My name is Siv Kongmeng. I'm`}{" "}
              <span className="text-blue-500">Web Developer.</span>
            </div>
            <div className="flex space-x-3 justify-center mt-4">
              <Link
                href="https://www.facebook.com/share/mnVDmUNiQcQjghZB/?mibextid=qi2Omg"
                target="_blank"
              >
                <button
                  className="bg-black text-3xl hover:bg-blue-500 text-white font-bold py-3 px-3 rounded-md"
                  aria-label="Facebook"
                >
                  <FaSquareFacebook />
                </button>
              </Link>
              <Link
                href="https://www.instagram.com/siv_kongmeng/"
                target="_blank"
              >
                <button
                  className="bg-black text-3xl hover:bg-blue-500 text-white font-bold py-3 px-3 rounded-md"
                  aria-label="Instagram"
                >
                  <FaSquareInstagram />
                </button>
              </Link>
              <Link href="https://t.me/sivkongmeng" target="_blank">
                <button
                  className="bg-black text-3xl hover:bg-blue-500 text-white font-bold py-3 px-3 rounded-md"
                  aria-label="Telegram"
                >
                  <FaTelegram />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
