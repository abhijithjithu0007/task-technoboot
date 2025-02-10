import { Search, User, BookOpen, Grid } from "lucide-react";

const Navbar = () => {
  return (
    <div className="w-full bg-white shadow-lg ">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-4">
            <div className="flex-shrink-0">
              <img
                src="https://www.examys.com/_next/image?url=%2Fimages%2FExamys_Logo.png&w=96&q=75"
                alt="Logo"
                className="w-16 h-16 p-2"
              />
            </div>
          </div>

          <div className="flex items-center gap-8 justify-center flex-1">
            <div className="relative w-80">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search"
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#" className="text-red-500 text-sm hover:text-red-600">
                Refer & Earn
              </a>
              <a href="#" className="text-gray-600 text-sm hover:text-gray-900">
                Coupon
              </a>
              <a href="#" className="text-gray-600 text-sm hover:text-gray-900">
                Download App
              </a>
            </div>
          </div>

          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <span className="text-gray-700">English</span>
            </div>

            <button className="bg-[#4339ca] text-white px-6 py-2 rounded-lg hover:bg-[#3730a3] transition-colors">
              Login
            </button>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center space-x-12 py-3">
        <a
          href="#"
          className="flex flex-col items-center text-gray-600 hover:text-gray-900"
        >
          <BookOpen className="h-5 w-5 mb-1" />
          <span className="text-sm font-bold">Courses</span>
        </a>
        <a
          href="#"
          className="flex flex-col items-center text-gray-600 hover:text-gray-900"
        >
          <Grid className="h-5 w-5 mb-1" />
          <span className="text-sm font-bold">Test Series</span>
        </a>
        <a
          href="#"
          className="flex flex-col items-center text-gray-600 hover:text-gray-900"
        >
          <User className="h-5 w-5 mb-1" />
          <span className="text-sm font-bold">Test Pass Pro+</span>
        </a>
        <a
          href="#"
          className="flex flex-col items-center text-gray-600 hover:text-gray-900"
        >
          <Grid className="h-5 w-5 mb-1" />
          <span className="text-sm font-bold">Examys AI</span>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
