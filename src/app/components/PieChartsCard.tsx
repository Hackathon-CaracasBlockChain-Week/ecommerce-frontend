'use client'

import React, {useState} from 'react';
import ReactApexChart from 'react-apexcharts';

const PieChartsCard = () => {
    const [state, setState] = useState({
        series : [44, 55, 41, 17, 15],
        options : {
            chart : {
                type : 'donut'
            }
        },
        responsive : [{
            breakpoint: 280,
            options : {
                chart : {
                    width: 100
                },
                legend : {
                    position : 'bottom'
                }
            }
        }]
    });
    return (
        <>
            <ReactApexChart options={state.options} series={state.series} type="donut" height={300} />
        </>
    )
}
export default PieChartsCard;