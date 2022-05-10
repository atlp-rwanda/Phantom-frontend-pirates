import React from 'react';
import FindBUsButtonSpinner from './FindBUsButtonSpinner';

const AddRoleModal = ({
  isLoading,
  addRoleHundler,
  role_name,
  setRole_name,
  setShowModal,
}) => {
  const buttonSpinnerClass =
    'focus:outline-none transition duration-150 ease-in-out bg-cyan-700 text-white bg-white rounded text-cyan-700 font-bold px-8 py-2 text-sm bg-opacity-[80%]';

  return (
    <div>
      <div className="justify-center items-center flex overflow-x-hidden bg-indigo-200 bg-opacity-50 overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-full my-6 mx-auto max-w-3xl">
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <div className="relative py-8 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400">
              <h1>ADD NEW ROLE</h1>
              <label
                for="exampleEmail0"
                class="form-label inline-block mb-2 text-gray-700"
              >
                Role
              </label>
              <input
                onChange={(e) => setRole_name(e.target.value)}
                type="text"
                class="
                            form-control
                            block
                            w-full
                            px-3
                            py-1.5
                            text-base
                            font-normal
                            text-gray-700
                            bg-white bg-clip-padding
                            border border-solid border-gray-300
                            rounded
                            transition
                            ease-in-out
                            m-0
                            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                        "
                placeholder="Enter role name"
              />

              <div className="flex items-center justify-start w-full mt-8">
                {isLoading ? (
                  <FindBUsButtonSpinner style={buttonSpinnerClass} />
                ) : (
                  <button
                    className="focus:outline-none transition duration-150 ease-in-out hover:bg-cyan-700 hover:text-white bg-white rounded text-cyan-700 font-bold px-8 py-2 text-sm"
                    onClick={() => addRoleHundler(role_name)}
                  >
                    Add Role
                  </button>
                )}
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="ml-3 bg-Red-600 text-red-700 hover:bg-red-700 hover:text-white border-red-700 rounded px-8 py-2 text-sm"
                  onclick="modalHandler()"
                >
                  Cancel
                </button>
              </div>
              <div
                className="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out"
                onclick="modalHandler()"
              >
                <button
                  className="bg-transparent border-0 text-black float-right"
                  onClick={() => setShowModal(false)}
                >
                  <span className="text-black opacity-7 h-6 w-6 text-xl block bg-white py-0">
                    x
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddRoleModal;
