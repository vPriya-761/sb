/* eslint-disable react/jsx-no-undef */
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Cards } from './Card';
import { FaCubes } from 'react-icons/fa';
import { BiDollar } from 'react-icons/bi';


export default {
  title: 'Card/Card',
  component: Cards,
 
} as ComponentMeta<typeof Cards>;

const Template: ComponentStory<typeof Cards> = (args) => <Cards {...args} />;



export const Card1 = Template.bind({});
Card1.args = 
    {
      icon: <FaCubes  fill='#ff9b44'/>,
      value: 112,
      sub_title: 'Projects',
    };
    export const Card2 = Template.bind({});
Card2.args = 
    {
      icon: <BiDollar fill='#ff9b44'  />,
      value: 44,
      sub_title: 'Clients',
    };


