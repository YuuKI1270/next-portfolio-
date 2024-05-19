import React from "react";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "Ticket Survey with Nuxt 3",
    description:
      "It's an application for update ticket. You can update department and add more comments",
    imageUrl: "/images/loginTask.png",
  },
  {
    title: "Task managment with next js",
    description:
      "A task management application built with Next.js, designed to help users efficiently organize, track, and complete their tasks. The application features a user-friendly interface, allowing for easy task creation, editing, and deletion. It also supports user authentication, enabling personalized task lists and secure access.",
    imageUrl: "/img/loginTask.png",
  },
  {
    title: "Document Tracking with Next.js",
    description:
      "A robust document tracking system built with Next.js, designed to streamline the process of managing and tracking documents. This application allows users to upload, categorize, and monitor document status in real-time. It features a secure authentication system, ensuring that only authorized users can access and modify the documents. With a responsive design and intuitive user interface, users can efficiently manage their documents from any device.",
    imageUrl: "/img/Screenshot 2024-05-19 191910.png",
  },
  // Add more projects as needed
];
const ServicePage = () => {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-gray-600 text-4xl text-center font-semibold mb-12">
        My Projects
      </h1>
      <div className="text-black grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="border rounded-lg overflow-hidden shadow-lg"
          >
            <Image
              src={project.imageUrl}
              alt={project.title}
              width={600}
              height={400}
              className="object-cover w-full h-48"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
              <p className="text-gray-700 mb-4">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicePage;
