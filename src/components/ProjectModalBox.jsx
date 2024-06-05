import PropTypes from "prop-types";

function ProjectModalBox({ isOpen, setIsOpen }) {
  return (
    <>
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full z-40 bg-gray-500/15 backdrop-blur-md">
          <div className="fixed w-2/3 md:w-1/3  backdrop-blur-lg h-2/3 z-30 bg-slate-300 p-10 rounded-lg left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 shadow-lg">
            <div className="flex justify-end">
              <button
                onClick={() => setIsOpen(false)}
                className="overflow-visible"
              >
                <i className="fa-regular fa-circle-xmark fa-xl hover:text-red-500 active:text-gray-500"></i>
              </button>
            </div>
            <h2 className="text-2xl text-center">Contact </h2>
            <p className="w-20  h-1 bg-black m-auto"></p>
          </div>
        </div>
      )}
    </>
  );
}
ProjectModalBox.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
};

export default ProjectModalBox;
