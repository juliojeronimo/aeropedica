import React from 'react';

import { BookingSearchModal } from './index'

export default {
    title: 'Aeropedica/bookingSearchModal',
    component: BookingSearchModal,
    argTypes: {
    },
};

const Template = (args) => <BookingSearchModal show={true} onClose={()=> console.log('fechando')}/>;


export const Default = Template.bind({});

Default.args = {
  
};