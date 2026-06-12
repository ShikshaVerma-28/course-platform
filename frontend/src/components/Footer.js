export default function Footer() {
    return (
      <footer className="bg-gray-800 text-white py-6 mt-10">
        <div className="text-center">
          <p>&copy; {new Date().getFullYear()} Online Course Platform. All rights reserved.</p>
          <p className="mt-2 text-sm">Built with React & Tailwind CSS - Shiksha Verma</p>
        </div>
      </footer>
    );
  }
  