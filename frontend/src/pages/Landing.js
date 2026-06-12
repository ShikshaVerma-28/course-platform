import { Link } from "react-router-dom";
import CourseCard from "../components/CourseCard";

const featuredCourses = [
  { id: 1, title: "React Basics", description: "Learn fundamentals of React.", price: "₹499" },
  { id: 2, title: "Node.js Mastery", description: "Backend development with Node.", price: "₹799" },
  { id: 3, title: "MongoDB Essentials", description: "Database management with MongoDB.", price: "₹599" },
];

export default function Landing() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <section className="flex flex-col items-center justify-center h-[70vh] bg-gradient-to-r from-purple-500 to-pink-500 text-white text-center px-6">
        <h1 className="text-5xl font-bold mb-4">Learn Anytime, Anywhere</h1>
        <p className="text-lg mb-6 max-w-xl">Join thousands of learners and upskill today.</p>
        <div className="space-x-4">
          <Link to="/courses" className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200">Browse Courses</Link>
          <Link to="/register" className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700">Get Started</Link>
        </div>
      </section>

      <section className="p-10">
        <h2 className="text-3xl font-bold mb-6 text-center">Featured Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredCourses.map(course => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </section>
    </div>
  );
}
