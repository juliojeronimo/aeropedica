import React from 'react';

import { RegisterPassenger } from './'

export default {
    title: 'Aeropedica/RegisterPassenger',
    component: RegisterPassenger,
    argTypes: {
    },
};

const Template = (args) => <RegisterPassenger text={'a reserva'} show={true} deleteAction={()=> console.log('deletando')} onClose={()=> console.log('fechando')}/>;


export const Default = Template.bind({});

Default.args = {
  
};