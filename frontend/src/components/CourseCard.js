import { Link } from "react-router-dom";

export default function CourseCard({ course }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition">
      <h3 className="text-xl font-bold mb-2">{course.title}</h3>
      <p className="text-gray-600 mb-4">{course.description}</p>
      <p className="font-semibold mb-4">{course.price}</p>
      <Link to={`/courses/${course.id}`} className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">
        View Details
      </Link>
    </div>
  );
}
