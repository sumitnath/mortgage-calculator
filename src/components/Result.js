import React from 'react'
import { Stack,Typography } from '@mui/material';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip, Legend);
const Result = ({data}) => {
  const { homevalue, downpayment, loanamount, loanTerm, interestRate } = data;
const totalLoanMonths = loanTerm * 12;
const interestPerMonth  = interestRate / 100 / 12;

const monthlyPayment =
(loanamount *
  interestPerMonth *
  (1 + interestPerMonth) ** totalLoanMonths) /
((1 + interestPerMonth) ** totalLoanMonths - 1);

const totalIterestGenerated = monthlyPayment * totalLoanMonths - loanamount;

// pie chart 
const PieChartdata = {
  labels: ['Principle','Interest'],
  datasets: [
    {
      label: 'Ratio of Principle and interest',
      data: [loanamount,totalIterestGenerated ],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
       
      ],
      borderWidth: 1,
    },
  ],
};

  return (
    <Stack gap={3}>
    <Typography textAlign={'center'} variant='h5'> Monthly Payment: $ {monthlyPayment.toFixed(2)}</Typography>
   <Stack direction="row" justifyContent="center">    
   <div>
    <Pie data={PieChartdata} />;
    </div>
    </Stack>
    </Stack>
    
  )
}

export default Result
