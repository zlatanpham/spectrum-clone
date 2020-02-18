import React from 'react';
import classnames from 'classnames';

export interface CardProps {
  title: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, title, className = '' }) => {
  return (
    <div
      className={classnames('rounded bg-white border border-gray-300', {
        [className]: className,
      })}
    >
      <div className="border-b border-gray-300 px-4 py-4">
        <h4 className="font-bold text-black text-base leading-tight">
          {title}
        </h4>
      </div>
      {children}
    </div>
  );
};

export default Card;
