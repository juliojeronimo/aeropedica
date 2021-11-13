import React from 'react';

import { Booking } from './'

let HeaderList = ['Cód. Aeronave', 'Cód. Aeroporto', 'Cód. Companhia', 'Actions']


let objects =
    [{ 'codAero': '1', 'codNave': 's', 'codComp': 's' },
    { 'codAero': 'd', 'codNave': 'asd', 'codComp': 's' },
    { 'codAero': 'd', 'codNave': 'asd', 'codComp': 's' },
    { 'codAero': 'd', 'codNave': 'asd', 'codComp': 's' },
    { 'codAero': 'd', 'codNave': 'asd', 'codComp': 's' },]

let bookings = [
    {
        source: 'Rio de Janeiro', target: 'Fortaleza', airportSource: 'Rio de Janeiro',
        airportTarget: 'Sobral', time: '08:15', price: '234', discount: '0'
    },
    {
        source: 'São Paulo', target: 'Salvador', airportSource: 'Congonhas',
        airportTarget: 'Aeroporto Internacional de Salvador', time: '08:15', price: '234', discount: '14'
    },
    {
        source: 'Minas Gerais', target: 'Campinas', airportSource: 'Rio de Janeiro',
        airportTarget: 'Viracopos', time: '08:15', price: '234', discount: '32'
    },
]

export default {
    title: 'Aeropedica/Booking',
    component: Booking,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        // backgroundColor: { control: 'color' },
    },
};

const Template = (args) => bookings.map((item) => {
    const { source, target, airportSource, airportTarget, price, discount, time } = item;
    return <Booking source={source}
        target={target} airportSource={airportSource} airportTarget={airportTarget}
        price={price} discount={discount} time={time} />
})


export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
    // variant: 'primary',
    // size: 'large',
    // label: 'Cadastrar',
};