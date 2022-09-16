import React from "react";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from "../index";

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Button',
  //👇 Creates specific argTypes with options
  argTypes: {
    size: {
      options: ['sm', 'md','lg'],
      control: { type: 'inline-radio' },
    },
    text:{
      defaultValue:'测试',
      control: 'text',
    },
    type:{
      options:['primary','default','danger','warnning'],
      control: { type: 'select' } 
    },
    onClick: { action: 'clicked' }
  },
} as ComponentMeta<typeof Button>;


const Template: ComponentStory<typeof Button> = ({ ...rest }) => {
  //👇 Assigns the result from the function to a variable
  return <Button {...rest} />;
};


export const defaultButton = Template.bind({});
defaultButton.args= {
  
};

export const primaryButton = Template.bind({});
defaultButton.args= {
  type:'primary'
};
// const stories = storiesOf('Button', module);

// stories.add('Button', () => {
//   const [value, setValue] = useState('Button');
//   const setChange = () => {
//     setValue(value === 'Button' ? 'Default Button' : 'Button')
//   }
  
//   return <Button onClick={setChange} text="测试"></Button>
// })