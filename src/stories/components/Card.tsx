import React from 'react';
import './card.css'
interface CardsProps {
  value: number;
  sub_title: string;
  icon: JSX.Element;
  
}

export const Cards: React.FC<CardsProps> = (props) => {
  return (
    <div className="cardmain">
      <div>
        <div className="icon1">{props.icon}</div>
      </div>
      <div className="cardcontent">
        <h3>{props.value}</h3>
        <span className="subtitle">{props.sub_title}</span>
      </div>
    </div>
  );
};