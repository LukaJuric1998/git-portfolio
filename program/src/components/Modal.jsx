import ReactDOM from "react-dom";

export default function Modal(props) {
  const { showExerciseDescription, handleCloseModal } = props;
  const { name, description } = showExerciseDescription || {};

  return ReactDOM.createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Background overlay */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
        onClick={handleCloseModal}
      />

      {/* Modal content */}
      <div className="bg-white rounded-2xl shadow-lg p-6 max-w-lg w-full z-10 space-y-4">
        {/* Header */}
        <div className="flex justify-between items-center border-b pb-2">
          <h2 className="text-xl font-bold text-gray-900">
            {name?.replaceAll("-", " ")}
          </h2>
          <button
            onClick={handleCloseModal}
            className="text-gray-500 hover:text-gray-700 transition text-lg"
          >
            &times;
          </button>
        </div>

        {/* Body */}
        <div className="space-y-2">
          <h6 className="text-sm font-semibold text-gray-700">Description</h6>
          <p className="text-gray-600 text-sm break-words">{description}</p>
        </div>

        {/* Footer (optional close button) */}
        <div className="flex justify-end">
          <button
            onClick={handleCloseModal}
            className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
          >
            Close
          </button>
        </div>
      </div>
    </div>,
    document.getElementById("portal")
  );
}
