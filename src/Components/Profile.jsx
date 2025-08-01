import { FaUserCircle, FaMapMarkerAlt } from "react-icons/fa";

const Profile = ({ name = "Juan Dela Cruz", location = "Cebu City, Philippines" }) => {
  return (
    <div className="max-w-sm bg-white shadow-lg rounded-2xl p-6 flex-col items-center space-x-4 flex-1">
      <FaUserCircle className="text-6xl text-gray-600" />
      <div>
        <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
        <p className="text-gray-600 flex items-center gap-1">
          <FaMapMarkerAlt className="text-red-500" />
          {location}
        </p>
      </div>
    </div>
  );
};

export default Profile;
