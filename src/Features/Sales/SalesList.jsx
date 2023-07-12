import { useQuery } from '@tanstack/react-query';
import LoadingSpinner from '../../Ui/Spinner';
import { HiMiniPlusCircle } from 'react-icons/hi2';
import { useDispatch } from 'react-redux';
import SalesRow from './SalesRow';
import { getSales } from '../../services/sales';
import { addSales } from './salesSlice';
function SalesList() {
  const dispatch = useDispatch();
  const { data, isLoading } = useQuery({
    queryKey: ['sales'],
    queryFn: getSales,
  });

  if (isLoading) {
    return <LoadingSpinner />;
  }
  if (!data || data.data.sales.length === 0) {
    return (
      <div className="flex  flex-col items-center justify-center">
        <HiMiniPlusCircle className="h-12 w-12 text-slate-100" />
        <p className="font-medium text-slate-100">
          Please add some Sales to Start
        </p>
      </div>
    );
  }

  if (data) {
    const sales = data.data.sales;
    dispatch(addSales(sales));

    return (
      <div className=" overflow-x-auto rounded-lg ">
        <table className="w-full text-left text-sm text-gray-800 ">
          <thead className="bg-gray-300 text-xs uppercase ">
            <tr>
              <th scope="col" className="px-6 py-3">
                Item name
              </th>
              <th scope="col" className="px-6 py-3">
                item code
              </th>
              <th scope="col" className="px-6 py-3">
                quantity
              </th>
              <th scope="col" className="px-6 py-3">
                Selling price
              </th>
              <th scope="col" className="px-6 py-3">
                Sales Date
              </th>
              <th scope="col" className="px-6 py-3">
                Customer Name
              </th>
              <th scope="col" className="px-6 py-3">
                Total Amount
              </th>
              <th scope="col" className="px-6 py-3">
                Amount Paid by customer
              </th>

              <th scope="col" className="px-6 py-3">
                Remaining balance
              </th>
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {sales.map((sales, index) => (
              <SalesRow sales={sales} key={index} />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default SalesList;
