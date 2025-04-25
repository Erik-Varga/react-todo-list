import React from 'react'
import { BiEdit } from 'react-icons/bi';
import { BsFillTrashFill } from 'react-icons/bs';
// import { FaEdit } from 'react-icons/fa';
import moment from 'moment';

const List = ({ items, removeItem, editItem }) => {
    return (
        <div className='container'>
            {items
                .sort((a,b) => Date.parse(b.date) - Date.parse(a.date))
                .map((item) => {
                    const { id, title, date } = item;
                    return (
                        <div>
                            <ul key={id} className='flex justify-between items-center py-3 px-4 rounded-md mb-1 cursor-pointer bg-gray-200 dark:bg-gray-800'>

                                <li className='w-full flex justify-between items-center gap-x-4 text-xl'>
                                    {title}
                                    <div className="flex gap-2">
                                        <BiEdit onClick={() => editItem(id)} />
                                        <BsFillTrashFill onClick={() => removeItem(id)} />
                                    </div>
                                </li>
                            </ul>
                            <div className="flex justify-end mr-2 text-xs">{moment(date).format('MMMM Do YYYY, h:mm a')}</div>
                        </div>
                    )
                })}
        </div>
    )
}

export default List