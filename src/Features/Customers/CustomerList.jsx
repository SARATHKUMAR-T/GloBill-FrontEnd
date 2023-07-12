import { useQuery } from '@tanstack/react-query';
import { getCustomers } from '../../services/customer';
import CustomerRow from './CustomerRow';
import LoadingSpinner from '../../Ui/Spinner';
import { HiMiniPlusCircle } from 'react-icons/hi2';

function CustomerList() {
  const { data, isLoading } = useQuery({
    queryKey: ['customers'],
    queryFn: getCustomers,
  });

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (data?.data?.customers.length === 0) {
    return (
      <div className="flex  flex-col items-center justify-center">
        <HiMiniPlusCircle className="h-12 w-12 text-slate-100" />
        <p className="font-medium text-slate-100">Please add some customers</p>
      </div>
    );
  }

  const customerlist = data.data.customers;
  return (
    <div className="rounded-lg  px-6 py-5 ">
      <table className="w-full text-left text-sm text-gray-800 ">
        <thead className="bg-gray-300 text-xs uppercase ">
          <tr>
            <th scope="col" className="px-6 py-3">
              Customer name
            </th>
            <th scope="col" className="px-6 py-3">
              Contact Number
            </th>
            <th scope="col" className="px-6 py-3">
              Company Name
            </th>
            <th scope="col" className="px-6 py-3">
              Address
            </th>
            <th scope="col" className="px-6 py-3">
              <span className="sr-only">Edit</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {customerlist.map((customer, index) => (
            <CustomerRow customer={customer} key={index} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CustomerList;
