import React from 'react';

export interface CardProps {
  title: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ children, title }) => {
  return (
    <div className="rounded bg-white">
      <div className="border-b border-gray-300">
        <h4>{title}</h4>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default Card;
