import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Toolbox } from './Toolbox';

export default {
  title: 'Toolbox/Toolbox',
  component: Toolbox,
 
} as ComponentMeta<typeof Toolbox>;

const Template: ComponentStory<typeof Toolbox> = (args) => <Toolbox {...args} />;



export const Secondary2 = Template.bind({});
Secondary2.args = {
    id: "Employee Id",
    name:"Employee Name",
    designation:"Select Designation"
}
