import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAsyncRoles, getRoles } from '../features/roles/RoleSlice';

const RoleTable = () => {
  const roleData = [
    { role: 'admin', permission: 'create route' },
    { role: 'operator', permission: 'create bus' },
    { role: 'driver', permission: 'create role' },
  ];
  const dispatch = useDispatch();
  dispatch(fetchAsyncRoles);
  const rolesData = useSelector(getRoles);

  console.log(rolesData);

  // useEffect(() => {
  //   dispatch(fetchAsyncRoles);
  //   console.log(rolesData);
  // }, []);

  const row4 = ['Kimisagara', 'Nyabugogo', 'Kimigagara'];

  return (
    <table class="w-10/12">
      <thead class="bg-white border-b">
        <tr>
          <th
            scope="col"
            class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
          >
            Role
          </th>
          <th
            scope="col"
            class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
          >
            Permission
          </th>
          <th
            scope="col"
            class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
          >
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        {roleData.map((role) => (
          <tr class="bg-gray-100 border-b">
            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              {role.role}
            </td>
            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              <select className="bg-transparent focus:outline-none hover:cursor-pointer">
                <option className="overflow-auto bg-transparent">
                  permission
                </option>
                <option className="overflow-auto disabled">
                  {role.permission}
                </option>
                <option className="overflow-auto disabled">
                  {role.permission}
                </option>
                <option className="overflow-auto disabled">
                  {role.permission}
                </option>
              </select>
            </td>
            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
              </svg>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default RoleTable;
