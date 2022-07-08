import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Cards } from './Cards';


export default {
  title: 'EmployeeCards/Cards',
  component: Cards,
 
} as ComponentMeta<typeof Cards>;

const Template: ComponentStory<typeof Cards> = (args) => <Cards {...args} />;



export const CardsList = Template.bind({});

CardsList.args = {

  allEmployeeData: [
    {
      name: 'John Doe',
      designation: 'Web Designer',
    },
    {
      name: 'Richard Miles',
      designation: 'Web Developer',
    },
    {
      name: 'John Smith',
      designation: 'Android Developer',
    },
    {
      name: 'Mike Litorus',
      designation: 'IOS Developer',
    },
    {
      name: 'Wilmer Deluna',
      designation: 'Team Leader',
    },
    {
      name: 'Jeffrey Warden',
      designation: 'Web Developer',
    },
    {
      name: 'Bernardo ',
      designation: 'Web Developer',
    },
    {
      name: 'Lesley Grauer',
      designation: 'Team Leader',
    },
  ],
  
  
};