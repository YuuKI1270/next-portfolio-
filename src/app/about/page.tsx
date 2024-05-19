import React from "react";
import Image from "next/image";

const AboutPage = () => {
  return (
    <div className="container mx-auto py-12 px-6">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-6">About Me</h1>
      </div>
      <div className="flex flex-col md:flex-row items-center md:items-start">
        <div className="w-full md:w-1/3 flex justify-center mb-6 md:mb-0">
          <div className="relative w-60 h-60 md:w-80 md:h-80">
            <Image
              src="/img/profile.jpg" // Make sure to add your profile image in the public/images directory
              alt="Profile Image"
              layout="fill"
              objectFit="cover"
              className="rounded-full"
            />
          </div>
        </div>
        <div className="w-full md:w-2/3 md:pl-12 text-black">
          <p className="text-lg leading-relaxed mb-4">
            Hello! My name is Siv Kongmeng, a passionate Web Developer with
            expertise in building dynamic and responsive websites. I have a
            strong background in web technologies including HTML, CSS,
            JavaScript, Tailwind and various frameworks like React, Vue js, Nuxt
            js and Next.js.
          </p>
          <p className="text-lg leading-relaxed mb-4">
            Currently, I am an intern as a Web App Developer at Online ISP
            Cambodia. During my internship, I have been involved in developing
            and maintaining web applications, working closely with senior
            developers, and gaining hands-on experience in real-world projects.
            This opportunity has allowed me to enhance my skills in front-end
            and back-end development, and I have learned a lot about industry
            best practices and collaboration within a development team.
          </p>
          <p className="text-lg leading-relaxed mb-4">
            I enjoy solving complex problems and continuously learning new
            technologies to enhance my skill set. In my free time, I love
            exploring new places, reading tech blogs, and contributing to
            open-source projects.
          </p>
          <p className="text-lg leading-relaxed mb-4">
            If you want to know more about me or my work, feel free to reach out
            through my social media links or check out my projects.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
