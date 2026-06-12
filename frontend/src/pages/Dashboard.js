import { useEffect, useState } from "react";
import axios from "axios";

export default function Dashboard() {
  const [enrollments, setEnrollments] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userId = JSON.parse(atob(token.split(".")[1])).id; 
    axios.get(`http://localhost:5000/api/enrollments/${userId}`)
      .then(res => setEnrollments(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="p-10 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-bold mb-6">My Courses</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {enrollments.map(enroll => (
          <div key={enroll._id} className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-2">{enroll.course.title}</h3>
            <div className="w-full bg-gray-200 rounded-full h-4">
              <div className="bg-indigo-600 h-4 rounded-full" style={{ width: `${enroll.progress}%` }}></div>
            </div>
            <p className="text-sm text-gray-600 mt-2">{enroll.progress}% completed</p>
          </div>
        ))}
      </div>
    </div>
  );
}
