import React from 'react';

import svgIcon from '../../assets/svg-icon.png';
import { TbPigMoney } from 'react-icons/tb';
import { SlBadge } from 'react-icons/sl';
import {FaTruckFast} from 'react-icons/fa6';

import './Service_card.css';

type Props = {
  title: string,
  desc: string,
  icon: Icon,
}

export enum Icon{
  TbPigMoney = 'TbPigMoney',
  SlBadge = 'SlBadge',
  FaTruckFast = 'FaTruckFast'
}

const Service_card = (props: Props) => {
  const icon = () => {
    if(props.icon === 'TbPigMoney') return <TbPigMoney className="icon" size={100} color={'#34b0f1'}/>;
    else if(props.icon === 'SlBadge') return <SlBadge className="icon" size={100} color={'#34b0f1'}/>;
    return <FaTruckFast className="icon" size={100} color={'#34b0f1'}/>;
  };

  return (
    <div className="service-card">
      <img src={svgIcon} width={400} alt="Svg" />
      {icon()}
      <h2>{props.title}</h2>
      <p>{props.desc}</p>
    </div>
  );
};

export default Service_card;
