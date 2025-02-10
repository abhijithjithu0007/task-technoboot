import React, { useState } from "react";

const CourseCard = ({ course }) => {
  return (
    <div className="bg-gray-100 p-6 rounded-xl shadow-xl">
      <h3 className="text-lg font-bold mb-1">{course.title}</h3>
      <div className="flex items-center gap-2 mb-4">
        <span className="text-red-500 text-sm">{course.type}</span>
        <span className="text-gray-500 text-sm">| {course.duration}</span>
      </div>

      <ul className="space-y-3 mb-6">
        {course.features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2 text-sm">
            <span className="text-black">•</span>
            <span>
              {feature.split("by").map((part, i) =>
                i === 0 ? (
                  part
                ) : (
                  <span key={i}>
                    <span className="text-purple-600">by Examys AI</span>
                    {part}
                  </span>
                )
              )}
            </span>
          </li>
        ))}
      </ul>

      <div className="flex items-center justify-between">
        <div>
          {course.originalPrice && (
            <span className="text-gray-400 line-through text-sm">
              ₹ {course.originalPrice}
            </span>
          )}
          <div className="text-xl font-bold">₹ {course.price}</div>
        </div>
        <button className="text-purple-600 font-medium hover:text-purple-700">
          View Details →
        </button>
      </div>
    </div>
  );
};

const CourseListing = () => {
  const [activeTab, setActiveTab] = useState("Railway");

  const tabs = ["Railway", "SSC", "Teaching"];

  const courses = [
    {
      title: "RRB NTPC CBT 1",
      type: "Focus pack",
      duration: "1 Year",
      features: [
        "Foundation + in-depth - video, pdf and quiz",
        "Previous Year Paper Discussion",
        "Trend Questions by Examys AI",
        "Test Series and Doubt Clear",
      ],
      originalPrice: "4499",
      price: "3599",
    },
    {
      title: "RRB NTPC CBT 1",
      type: "Focus pack",
      duration: "6 months",
      features: [
        "Foundation + in-depth - video, pdf and quiz",
        "Previous Year Paper Discussion",
        "Trend Questions by Examys AI",
        "Test Series and Doubt Clear",
      ],
      originalPrice: "4199",
      price: "3099",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold mb-6">Some Courses You May Like</h2>

      <div className="flex gap-3 mb-8">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              activeTab === tab
                ? "bg-[#4339ca] text-white"
                : "bg-white text-gray-700 border border-gray-200"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {courses.map((course, index) => (
          <CourseCard key={index} course={course} />
        ))}
      </div>
    </div>
  );
};

export default CourseListing;
