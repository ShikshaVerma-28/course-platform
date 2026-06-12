export default function CourseDetail() {
    return (
      <div className="p-10 bg-gray-50 min-h-screen">
        <h2 className="text-3xl font-bold mb-4">React Basics</h2>
        <p className="text-gray-700 mb-6">
          This course covers components, props, state, and hooks with hands-on projects.
        </p>
        <p className="font-semibold mb-6">Price: ₹499</p>
        <button className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">
          Enroll Now
        </button>
      </div>
    );
  }
  