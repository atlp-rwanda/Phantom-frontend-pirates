import React, { useState } from 'react';

const RoleTable = () => {
  const PermissionData = [
    { permission: 'create route' },
    { permission: 'create bus' },
    { permission: 'create role' },
    { permission: 'create role' },
    { permission: 'create role' },
    { permission: 'create role' },
    { permission: 'create role' },
    { permission: 'create role' },
    { permission: 'create role' },
    { permission: 'create role' },
  ];

  const row4 = ['Kimisagara', 'Nyabugogo', 'Kimigagara'];

  const [color, setColor] = useState('');

  const changeColor = (index) => {
    e.preventDefault();
    if (
      index % 2 === 0
        ? setColor('bg-white border-b')
        : setColor('bg-gray-100 border-b')
    );
  };

  return (
    <table class="w-10/12">
      <thead class="bg-white border-b">
        <tr>
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
        {PermissionData.map((permission, index) => (
          <tr class={color}>
            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              {permission.permission}
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
