import React from "react";
//import Drink from "components/Drink";
import { Button } from "components/Shared/Form";
//import Loader from "components/Shared/Loader";
import { Bar } from 'react-chartjs-2';

import { Chartinstruments } from "./styled";

export default ({  }) => {
  //const { isLoading } = status;

  var data = null;


  return (
    <Chartinstruments>
      <Bar
        data={data}
        width={100}
        height={50}
        options={

            {
                backgroundColor: "#FFF",
                responsive: true,
                animation: false,
                tooltips: {
                  mode: 'index',
                  intersect: false,
                  //axis: 'x',
                  
                  callbacks: {
                    title: 'zzz',
                    /*label: function(tooltipItem, data) {
                      //return data['datasets'][0]['data'][tooltipItem['index']]+' M3';
                      return Number(tooltipItem.yLabel) + ' <b>M3</b>';
                    }*/
                    
                    label: 'ccc'
                    
                    ,
                    afterLabel: 'vvv'
                  },
                  backgroundColor: '#FFF',
                  titleFontSize: 16,
                  titleFontColor: '#0066ff',
                  bodyFontColor: '#000',
                  bodyFontSize: 24
                },
                scales: {
                    yAxes: [
                        {
                        minBarLength: 2,
                        scaleLabel: {
                          display: true,
                          labelString: 'Consumo (m3)',/*,
                          fontStyle: 'bold'*/
                          fontSize: 14
                        },
                        ticks: {
                            beginAtZero: true,
                            maxTicksLimit: 6,
                            fontSize: 14,
                            callback: function(value, index, values) {
                                //return value ;//+ ' M3';
                                return value.toFixed(3);
                            }
                        }
                    }],
                    xAxes: [{
                        barPercentage: 1.2/*,
                        barThickness: 6,  // number (pixels) or 'flex'
                        maxBarThickness: 8 // number (pixels)
                        *//*,
                        gridLines: {
                          offsetGridLines: false
                        },*/
                        ,
                        scaleLabel: {
                          display: true,
                          //labelString: 'Tiempo',
                          /*fontStyle: 'bold' */
                          fontSize: 14
                        },
                        gridLines : {
                            display : false
                        },
                        
                        ticks: {
                          maxTicksLimit: 16,
                          maxRotation: 90,
                          minRotation: 45,
                          fontSize: 14
                          /*,
                          callback: function(value, index, values) {
                            return serieModif(value);
                          }*/
                        }
                    }]
                },
                legend: {
                    display: false,
                    labels: {
                        fontColor: '#FFF'/*,
                        defaultFontSize: 25*/,
                        fontSize: 25
                    }
                },
                title: {
                  display: true,
                  text: 'Instrumento de medicion'
                }
            }
        }
        />
    </Chartinstruments>
  );
};
