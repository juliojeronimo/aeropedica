import React from 'react';

import { Table } from './'

let HeaderList = ['Cód. Aeronave', 'Cód. Aeroporto', 'Cód. Companhia', 'Actions']


let objects =
    [{ 'codAero': '1', 'codNave': 's', 'codComp': 's' },
    { 'codAero': 'd', 'codNave': 'asd', 'codComp': 's' },
    { 'codAero': 'd', 'codNave': 'asd', 'codComp': 's' },
    { 'codAero': 'd', 'codNave': 'asd', 'codComp': 's' },
    { 'codAero': 'd', 'codNave': 'asd', 'codComp': 's' },]

export default {
    title: 'Aeropedica/Table',
    component: Table,
    argTypes: {
    },
};

const Template = (args) => <Table header={HeaderList} list={objects} updateItem={() => console.log('editando')} deleteItem={() => console.log('deletando')} {...args} />;


export const Default = Template.bind({});

Default.args = {
   
};