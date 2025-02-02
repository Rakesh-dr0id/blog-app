'use client';
import { CategoryContext } from '@/context/CategoryContext';
import React, { useContext } from 'react';

const Category = ({ cat }: { cat: any }) => {
  // Implement context api for selected category
  const { categoryId, changeCategory } = useContext(CategoryContext);

  return (
    <div
      className={`${
        cat.$id === categoryId
          ? 'bg-blue-700 border-2 border-gray-50 transition duration-300 ease-in-out'
          : 'border-2 border-gray-700'
      } shrink-0 rounded-lg py-1.5 px-5 text-base font-medium text-white hover:cursor-pointer`}
      onClick={() => changeCategory(cat.$id)}
    >
      {cat.title.toUpperCase()}
    </div>
  );
};

export default Category;
