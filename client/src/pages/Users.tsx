import { useEffect, useState } from 'react';
import { Loader, Pagination } from '../components';
import { useNavigate } from 'react-router-dom';
import { useUsers, useUsersCount } from '../hooks/useUsers';
import { UserType } from '../types/users';
import toast from 'react-hot-toast';

const Users = () => {
  const dataPerPage = 4;
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const {
    data: userCount,
    isError: isErrorCount,
    error: errorCount,
  } = useUsersCount();
  const {
    data: usersData,
    isLoading,
    isError: isErrorUsers,
    error: errorUsers,
  } = useUsers(currentPage - 1, dataPerPage);

  const handleOnPageChange = (page: number) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    if (isErrorCount || isErrorUsers) {
      const message = errorUsers?.message || errorCount?.message || '';
      toast.error(message);
    }
  }, [isErrorUsers, isErrorUsers]);

  return (
    <div className='space-y-6 text-left sm:px-10 lg:px-32 py-4 sm:py-10'>
      <h1 className='text-black'>Users</h1>
      <div className='border rounded-lg'>
        <table className='  text-xs text-[#535862] w-full'>
          <thead>
            <tr>
              <th className=' px-2 sm:px-6 py-3 font-normal'>Full Name</th>
              <th className=' px-2 sm:px-6 py-3 font-normal'>Email Address</th>
              <th className=' px-2 sm:px-6 py-3 font-normal'>Address</th>
            </tr>
          </thead>

          <tbody>
            {!isLoading &&
              usersData &&
              usersData.map((item: UserType, index: number) => (
                <tr
                  key={item.user_id}
                  className={`${
                    index !== usersData.length - 1 && 'border-b'
                  } cursor-pointer hover:bg-slate-50`}
                  onClick={() =>
                    navigate(
                      `posts?userId=${item.user_id}&name=${item.name}&email=${item.email}`
                    )
                  }>
                  <td className='px-2 sm:px-6 py-[26px]'>{item.name}</td>
                  <td className=' px-2 sm:px-6 py-[26px] max-w-[80px] sm:max-w-max overflow-auto sm:overflow-visible text-ellipsis'>
                    {item.email}
                  </td>
                  <td className=' px-2 sm:px-6 py-[26px]'>
                    <p className='text-ellipsis whitespace-nowrap overflow-auto max-w-[80px] sm:max-w-[150px] lg:max-w-[392px]'>
                      {item.address}
                    </p>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        {isLoading && (
          <div className='flex justify-center py-20 '>
            <Loader />
          </div>
        )}
      </div>

      <Pagination
        totalData={userCount?.count || 0}
        current={currentPage}
        onPageClick={handleOnPageChange}
        dataPerPage={dataPerPage}
      />
    </div>
  );
};

export default Users;
