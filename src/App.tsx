import CourseListing from "./components/card";
import CourseAdvantages from "./components/courses";
import Home from "./components/home";
import Navbar from "./components/navbar";

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Home />
      <CourseAdvantages />
      <CourseListing />
    </>
  );
};

export default App;
