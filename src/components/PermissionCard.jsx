import React from 'react';
import PermissionTable from '../components/PermissionTable';
import AddPermissionModal from '../components/AddPermissionModal';

const PermissionCard = () => {
  return (
    <div class="p-6 bg-white mt-12 place-content-center rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <div class="place-content-center">
        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div class="overflow-hidden grid place-items-center">
              <div className="w-10/12 flex justify-between">
                <div>
                  <h2>Permission</h2>
                </div>
                <div>
                  <div className="flex items-center justify-center">
                    <AddPermissionModal />
                  </div>
                </div>
              </div>
              <div className="relative focus:outline-none flex jusitfy-start w-full mt-6 mb-4   text-gray-800 rounded  items-center border-cyan-700 focus:border-gray-400 border-b-8  "></div>
              <PermissionTable />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PermissionCard;
