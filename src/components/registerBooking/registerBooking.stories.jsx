import React from 'react';

import { RegisterBooking } from './'

export default {
    title: 'Aeropedica/RegisterBooking',
    component: RegisterBooking,
    argTypes: {
    },
};

const Template = (args) => <RegisterBooking text={'a reserva'} show={true} deleteAction={()=> console.log('deletando')} onClose={()=> console.log('fechando')}/>;


export const Default = Template.bind({});

Default.args = {
  
};