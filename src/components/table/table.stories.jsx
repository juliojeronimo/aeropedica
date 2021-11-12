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
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        // backgroundColor: { control: 'color' },
    },
};

const Template = (args) => <Table header={HeaderList} list={objects} updateItem={() => console.log('editando')} deleteItem={() => console.log('deletando')} {...args} />;


export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
    // variant: 'primary',
    // size: 'large',
    // label: 'Cadastrar',
};