import React from "react";
import moment from "moment";
import { ArrowForward, BookmarkBorder } from "@mui/icons-material";

const data = [
  {
    id: 1,
    title: "Data Analyst",
    description:
      "We are looking for a skilled data analyst to join our team. You will be responsible for collecting, analyzing, and visualizing data to support our business decisions.",
    location: "New York",
    date_posted: "2024-07-14",
    is_active: true,
  },
  {
    id: 2,
    title: "Software Engineer",
    description:
      "We are seeking an experienced software engineer to develop and maintain our applications. You will be responsible for designing, building, and testing software solutions.",
    location: "San Francisco",
    date_posted: "2024-07-14",
    is_active: true,
  },
  {
    id: 3,
    title: "Front-End Developer",
    description:
      "We are looking for a talented front-end developer to create and maintain the user interface of our web applications. You will be responsible for building responsive and user-friendly websites.",
    location: "Remote",
    date_posted: "2024-07-13",
    is_active: true,
  },
  {
    id: 4,
    title: "Marketing Manager",
    description:
      "We are seeking a passionate marketing manager to develop and execute our marketing strategies. You will be responsible for generating leads, promoting our brand, and driving growth.",
    location: "Los Angeles",
    date_posted: "2024-07-12",
    is_active: true,
  },
  {
    id: 5,
    title: "UI/UX Designer",
    description:
      "We are looking for a skilled UI/UX designer to create user-centered designs for our products. You will be responsible for understanding user needs, designing interfaces, and ensuring a positive user experience.",
    location: "Chicago",
    date_posted: "2024-07-11",
    is_active: true,
  },
  {
    id: 6,
    title: "Sales Representative",
    description:
      "We are seeking a driven sales representative to build relationships and sell our products. You will be responsible for prospecting, qualifying leads, and closing deals.",
    location: "Austin",
    date_posted: "2024-07-10",
    is_active: true,
  },
  {
    id: 7,
    title: "Content Writer",
    description:
      "We are looking for a talented content writer to create engaging and informative content for our website and marketing materials. You will be responsible for research, writing, and editing content.",
    location: "Remote",
    date_posted: "2024-07-09",
    is_active: true,
  },
  {
    id: 8,
    title: "Project Manager",
    description:
      "We are seeking an experienced project manager to lead and manage our software development projects. You will be responsible for planning, organizing, and ensuring the successful completion of projects.",
    location: "Seattle",
    date_posted: "2024-07-08",
    is_active: true,
  },
  {
    id: 9,
    title: "Human Resources Specialist",
    description:
      "We are looking for a qualified human resources specialist to support our HR department. You will be responsible for recruiting, onboarding, and managing employee relations.",
    location: "Denver",
    date_posted: "2024-07-05",
    is_active: true,
  },
  {
    id: 10,
    title: "Social Media Manager",
    description:
      "We are seeking a social media manager to manage our social media presence. You will be responsible for creating and scheduling content, engaging with followers, and growing our audience.",
    location: "Remote",
    date_posted: "2024-07-04",
    is_active: true,
  },
];
const JobList = () => {
  return (
    <div className="container mx-auto px-4 py-8 md:px-8 lg:px-12">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Job Portal</h1>
        <button className="text-gray-600 hover:text-gray-800 focus:outline-none">
          Log Out
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map((job) => (
          <div
            key={job.id}
            className="shadow-md rounded-full p-4 px-6 hover:bg-gray-100 cursor-pointer flex justify-between"
          >
            <div>
              <h3 className="text-lg font-medium">
                {job.title} | {job.location}
              </h3>
              <p className="text-gray-600 ">
                <span className="font-semibold">Pinterest</span> | Posted:{" "}
                <span className="font-semibold">
                  {moment(job.date_posted).fromNow()}
                </span>{" "}
                | Experience: <span className="font-semibold">Mid Level</span>
              </p>
            </div>
            <div className="flex items-center gap-4">
              <button className="bg-white rounded-full p-2">
                <BookmarkBorder />
              </button>
              <button className="bg-white rounded-full p-2">
                <ArrowForward />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobList;
