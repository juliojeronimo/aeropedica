import React from 'react';

import { DeleteModal } from './'

export default {
    title: 'Aeropedica/DeleteModal',
    component: DeleteModal,
    argTypes: {
    },
};

const Template = (args) => <DeleteModal text={'a reserva'} show={true} deleteAction={()=> console.log('deletando')} onClose={()=> console.log('fechando')}/>;


export const Default = Template.bind({});

Default.args = {
  
};