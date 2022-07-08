import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Login from './Login';

export default {
  title: 'Example/Login',
  component: Login,
 
} as ComponentMeta<typeof Login>;

const Template: ComponentStory<typeof Login> = (args) => <Login {...args} />;



export const Secondary1 = Template.bind({});
Secondary1.args = <Login />



  