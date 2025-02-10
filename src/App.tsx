import CourseAdvantages from "./components/courses";
import Home from "./components/home";
import Navbar from "./components/navbar";

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Home />
      <CourseAdvantages />
    </>
  );
};

export default App;
