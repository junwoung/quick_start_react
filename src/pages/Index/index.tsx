import React, { useState, useCallback } from 'react';

const a3 = 1111;

export const Index: React.FC = () => {
  const [num, setNum] = useState<number>(0);

  const add = useCallback(() => {
    setNum(num + 1);
  }, [num]);

  return (
    <div className="text-red-600 font-bold">
      这是一个引入了tailwindcss的模板项目
      <div className="cursor-pointer select-none" onClick={add}>
        {num} 点击增加
      </div>
    </div>
  );
};
