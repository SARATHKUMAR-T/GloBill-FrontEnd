import { useQuery } from '@tanstack/react-query';
import ItemsRow from './ItemsRow';
import { getItems } from '../../services/items';
import LoadingSpinner from '../../Ui/Spinner';
import { HiMiniPlusCircle } from 'react-icons/hi2';
import { useDispatch } from 'react-redux';
import { addItem } from './itemSlice';
function ItemList() {
    const dispatch=useDispatch()
  const { data, isLoading } = useQuery({
    queryKey: ['items'],
    queryFn: getItems,
  });

  if ( data?.data.items.length === 0) {
    return (
      <div className="flex  flex-col items-center justify-center">
        <HiMiniPlusCircle className="h-12 w-12 text-slate-100" />
        <p className="font-medium text-slate-100">
          Please add some items to Start
        </p>
      </div>
    );
  }

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (data) {
    const items = data.data.items;
   dispatch(addItem(items))

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
                buying price
              </th>
              <th scope="col" className="px-6 py-3">
                selling price
              </th>
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {items.map((items, index) => (
              <ItemsRow items={items} key={index} />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ItemList;
