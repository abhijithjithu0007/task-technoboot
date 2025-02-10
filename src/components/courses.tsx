import React from "react";

const CourseAdvantages = () => {
  const advantages = [
    {
      title: "Complete Syllabus with Clear Course Design",
      subtitle: "Each course has 4 sections:",
      points: [
        "Foundation + In-depth: Live class, videos, pdfs followed by quizzes.",
        "Previous year questions discussion.",
        "Question pattern trend analysis by Examys AI.",
        "Test Series.",
      ],
      image:
        "https://www.examys.com/_next/image?url=%2Fstatic%2Fhome-1.png&w=384&q=75",
    },
    {
      title: "Systematic but Flexible Learning Path",
      subtitle:
        "You can start with any section without order as live classes, videos, pdfs and tests are not only designed in a systematic path but also curated with flexibility.",
      points: [
        "Foundation is supported by 'Course Journey' to check",
        "How is your foundation?",
        "Your competitive Index.",
      ],
      image:
        "https://www.examys.com/_next/image?url=%2Fstatic%2Fhome-2.png&w=384&q=75",
    },
    {
      title: "Introducing Sefi, The Examys AI for Quetion trend",
      subtitle:
        "Make your preparation strong with Examys AI by analyzing question-pattern trend for any competitive exam in India.",
      points: [
        "Question-pattern trend",
        "Question level analysis",
        "Course availability",
      ],
      image:
        "https://www.examys.com/_next/image?url=%2Fstatic%2Fhome-3.png&w=384&q=75",
    },
    {
      title: "Comprehensive Test Series",
      subtitle:
        "Give test to maximize your score and get succeed with an all-round approach.",
      points: [
        "Mock test: Chapter test, section test & full length test",
        "Previous year test",
        "Practice trend test for pattern analysis",
        "Access to live test series",
      ],
      image:
        "https://www.examys.com/_next/image?url=%2Fstatic%2Fhome-4.png&w=384&q=75",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-10 py-20 bg-gray-50">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">Examys Course Advantages</h1>
        <p className="text-gray-600">
          Access online courses for Govt. Exams systematically with video
          classes, pdfs and quizzes
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {advantages.map((advantage, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="w-48 h-48 mb-6">
              <img
                src={advantage.image}
                alt={advantage.title}
                className="w-full h-full object-contain"
              />
            </div>

            <div className="text-center">
              <h3 className="text-lg font-semibold mb-3">{advantage.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{advantage.subtitle}</p>

              <ul className="text-left text-sm text-gray-600">
                {advantage.points.map((point, pointIndex) => (
                  <li
                    key={pointIndex}
                    className="mb-2 pl-4 relative before:content-['•'] before:absolute before:left-0"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseAdvantages;
