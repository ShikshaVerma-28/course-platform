import { useEffect, useState } from "react";
import axios from "axios";
import CourseCard from "../components/CourseCard";

export default function Courses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/courses`)
    .then(res => setCourses(res.data))
    .catch(err => console.error(err));  
  }, []);

  return (
    <div className="p-10 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-bold mb-6">Available Courses</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {courses.map(course => (
          <CourseCard key={course._id} course={course} />
        ))}
      </div>
    </div>
  );
}
