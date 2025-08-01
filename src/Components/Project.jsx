import { useState } from 'react';
import { FaRegTrashCan, FaRegPenToSquare} from 'react-icons/fa6';
import { FaRegCheckCircle } from "react-icons/fa";
const Project = () => {
  const [projects, setProjects] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    client: '',
    name: '',
    price: '',
    deliveryDays: '',
  });

  const handleInput = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProject = {
      ...formData,
      price: parseFloat(formData.price),
      deliveryDays: parseInt(formData.deliveryDays),
      progress: 0,
    };
    setProjects((prev) => [...prev, newProject]);
    setFormData({ client: '', name: '', price: '', deliveryDays: '' });
    setIsModalOpen(false);
  };

  const handleDelete = (index) => {
    setProjects((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6 w-full max-w-6xl">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-700">
          Active Projects <span className="text-sm text-gray-500">({projects.length})</span>
        </h2>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 text-sm font-medium"
        >
          + Add New Project
        </button>
      </div>

      {/* Table */}
      {projects.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-600">
            <thead className="bg-blue-800 text-xs uppercase text-white border-b rounded-t-md">
              <tr>
                <th className="px-4 py-3">Client Name</th>
                <th className="px-4 py-3">Project</th>
                <th className="px-4 py-3">Price</th>
                <th className="px-4 py-3">Delivered In</th>
                <th className="px-4 py-3">Progress</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((proj, index) => (
                <tr key={index} className="border-b hover:bg-gray-50">
                  <td className="px-4 py-3">{proj.client}</td>
                  <td className="px-4 py-3">{proj.name}</td>
                  <td className="px-4 py-3">₱{proj.price.toLocaleString()}</td>
                  <td className="px-4 py-3">{proj.deliveryDays} days</td>
                  <td className="px-4 py-3">
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div
                        className={`h-2.5 rounded-full ${
                          proj.progress === 100 ? 'bg-green-500' : 'bg-yellow-500'
                        }`}
                        style={{ width: `${proj.progress}%` }}
                      />
                    </div>
                    <span className="text-xs ml-2">{proj.progress}%</span>
                  </td>
                  <td className="flex px-4 py-3">
                    <span className="px-4 py-3 text-red-600" onClick={() => handleDelete(index)}><FaRegTrashCan /></span>
                    <span className="px-4 py-3 text-blue-600"><FaRegPenToSquare /></span>
                    <span className="px-4 py-3 text-green-600"><FaRegCheckCircle /></span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-gray-500 mt-4">No active projects yet.</p>
      )}

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-40">
          <div className="bg-white rounded-lg w-full max-w-md p-6 shadow-lg relative">
            <h3 className="text-lg font-semibold mb-4 text-gray-700">Add New Project</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="client"
                placeholder="Client Name"
                value={formData.client}
                onChange={handleInput}
                className="w-full border border-gray-300 rounded-md p-2 text-sm"
                required
              />
              <input
                type="text"
                name="name"
                placeholder="Project Title"
                value={formData.name}
                onChange={handleInput}
                className="w-full border border-gray-300 rounded-md p-2 text-sm"
                required
              />
              <input
                type="number"
                name="price"
                placeholder="Project Price"
                value={formData.price}
                onChange={handleInput}
                className="w-full border border-gray-300 rounded-md p-2 text-sm"
                required
              />
              <input
                type="number"
                name="deliveryDays"
                placeholder="Delivery Days"
                value={formData.deliveryDays}
                onChange={handleInput}
                className="w-full border border-gray-300 rounded-md p-2 text-sm"
                required
              />

              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 text-sm rounded-md bg-gray-200 hover:bg-gray-300"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-sm rounded-md bg-blue-600 text-white hover:bg-blue-700"
                >
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Project;
