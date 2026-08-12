import { useState } from "react";
// import { Link } from "react-router-dom";
// import { courseMenu } from "@/data/site";
// import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";


export default function CourseDropdown() {
  const [activeCategory, setActiveCategory] = useState(null);


  // =========================================================
  // STATIC COURSE MENU
  // No course data from site.js
  // =========================================================
  const courseMenu = [
    {
      title: "Diploma",
      items: [
        {
          label: "Diploma in Cyber Security",
          path: "/courses/diploma-cyber-security",
        },
        {
          label: "Diploma in Machine Learning",
          path: "/courses/diploma-machine-learning",
        },
        {
          label: "Diploma in Network Security",
          path: "/courses/diploma-network-security",
        },
        {
          label: "Diploma in Web Security",
          path: "/courses/diploma-web-security",
        },
        {
          label: "Diploma in Advanced Cloud & Network Security",
          path: "/courses/diploma-advanced-cloud-network-security",
        },
      ],
    },

    {
      title: "Cybersecurity",
      items: [
        {
          label: "Ethical Hacking",
          path: "/courses/ethical-hacking",
        },
        {
          label: "Bug Bounty",
          path: "/courses/bug-bounty",
        },
        {
          label: "Cyber Security Professional",
          path: "/courses/cyber-security-professional",
        },
        {
          label: "Cyber Psychology",
          path: "/courses/cyber-psychology",
        },
        {
          label: "Web Application Penetration Tester",
          path: "/courses/web-application-penetration-tester",
        },
        {
          label: "Network Penetration Tester",
          path: "/courses/network-penetration-tester",
        },
        {
          label: "Android Penetration Tester",
          path: "/courses/android-penetration-tester",
        },
        {
          label: "IoT Penetration Tester",
          path: "/courses/iot-penetration-tester",
        },
        {
          label: "Certified Penetration Tester",
          path: "/courses/certified-penetration-tester",
        },
        {
          label: "Reverse Engineering",
          path: "/courses/reverse-engineering",
        },
        {
          label: "Computer Forensic Training",
          path: "/courses/computer-forensic-training",
        },
        {
          label: "CISSP Training",
          path: "/courses/cissp-training",
        },
        {
          label: "SOC Analyst Training",
          path: "/courses/soc-analyst-training",
        },
        {
          label: "Penetration Testing",
          path: "/courses/penetration-testing",
        },
        {
          label: "Advanced Penetration Testing & Red Teaming",
          path: "/courses/advanced-penetration-testing-red-teaming",
        },
      ],
    },

    {
      title: "Machine Learning",
      items: [
        {
          label: "Artificial Intelligence",
          path: "/courses/artificial-intelligence",
        },
        {
          label: "Machine Learning with Python",
          path: "/courses/machine-learning-python",
        },
        {
          label: "Data Science with Python",
          path: "/courses/data-science-python",
        },
        {
          label: "Embedded System & Robotics",
          path: "/courses/embedded-system-robotics",
        },
      ],
    },

    {
      title: "Networking",
      items: [
        {
          label: "CCNA",
          path: "/courses/ccna",
        },
        {
          label: "CCNP",
          path: "/courses/ccnp",
        },
      ],
    },

    {
      title: "Cloud Computing",
      items: [
        {
          label: "AWS Basic Training",
          path: "/courses/aws-basic-training",
        },
        {
          label: "Microsoft Azure Training",
          path: "/courses/microsoft-azure-training",
        },
        {
          label: "Advance Cloud Computing",
          path: "/courses/advance-cloud-computing",
        },
      ],
    },

    {
      title: "Programming",
      items: [
        {
          label: "Python Programming",
          path: "/courses/python-programming",
        },
        {
          label: "Django Developer",
          path: "/courses/django-developer",
        },
        {
          label: "Java Programming",
          path: "/courses/java-programming",
        },
        {
          label: "Android Developer",
          path: "/courses/android-developer",
        },
        {
          label: "DevOps Certification",
          path: "/courses/devops-certification",
        },
        {
          label: "Secure Full Stack Developer",
          path: "/courses/secure-full-stack-developer",
        },
        {
          label: "IoT Development",
          path: "/courses/iot-development",
        },
      ],
    },
  ];


  return (
    <div
      className="absolute left-1/2 top-full z-50 -translate-x-1/2 pt-3"
      onMouseLeave={() => setActiveCategory(null)}
    >
      {/* <div className="relative w-64 rounded-lg border border-gray-200 bg-white shadow-2xl"> */}
      <div className="relative w-46 rounded-lg border border-gray-200 bg-white shadow-2xl">


        {courseMenu.map((category, index) => (
          <div
            key={category.title}
            className="relative"
            onMouseEnter={() => setActiveCategory(index)}
          >
            <button
              type="button"
              className={`flex w-full items-center justify-between px-4 py-3 text-left text-sm transition
                ${
                  // activeCategory === index
                  //   ? "bg-gray-100 text-black"
                  //   : "hover:bg-gray-50"
                  activeCategory === index
                    ? "bg-[#D8A43C] text-white"
                    : "bg-white text-gray-900 hover:bg-gray-100"
                }`}
            >
              <span>{category.title}</span>

              <span className="ml-3 text-[10px] text-gray-400">
                ›
              </span>
            </button>


            {activeCategory === index && (
              // <div className="absolute left-full top-0 ml-1 w-80 rounded-lg border border-gray-200 bg-white shadow-2xl">
              <div className="absolute left-full top-0 ml-1 max-h-[70vh] w-72 overflow-y-auto rounded-lg border border-gray-200 bg-white shadow-2xl">


                {category.items.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setActiveCategory(null)}
                    className="block border-b border-gray-100 px-4 py-3 text-sm text-gray-700 transition hover:bg-gray-100 last:border-b-0"
                  >
                    {item.label}
                  </Link>
                ))}


              </div>
            )}


          </div>
        ))}


      </div>
    </div>
  );
}