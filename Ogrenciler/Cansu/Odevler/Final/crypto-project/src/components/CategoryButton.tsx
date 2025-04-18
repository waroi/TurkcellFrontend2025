'use client';
import { categories } from '@/constants/cryptoCategory';
import Button from './Button';

export default function CategoryButtons() {
  return (
    <div className="buy-sell-absolute-button-container bg-white d-flex align-items-center p-3 border-bottom overflow-x-auto flex-nowrap">
      {categories.map((category, index) => (
        <Button
          key={index}
          className={`btn fs-5 me-2 ${
            index === 0 ? 'btn-primary text-white' : 'btn-white'
          }`}
        >
          {category}
        </Button>
      ))}
    </div>
  );
}