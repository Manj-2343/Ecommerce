export const Footer = ({ darkMode }) => {
  return (
    <footer
      className={`w-full mt-3 p-4 text-center ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      <div className="flex justify-center space-x-4 mb-4">
        {/* Social Media Links (can be customized with icons) */}
        <a href="#" className="hover:text-blue-500">
          Facebook
        </a>
        <a href="#" className="hover:text-blue-500">
          Twitter
        </a>
        <a href="#" className="hover:text-blue-500">
          Instagram
        </a>
      </div>

      {/* Footer Text */}
      <p className="text-sm">
        © {new Date().getFullYear()} E-Commerce Website. All Rights Reserved.
      </p>
    </footer>
  );
};
