/**
 * Created by hao.cheng on 2017/5/5.
 */
import React from 'react';
import ReactEcharts from 'echarts-for-react';
import echarts from 'echarts';

const option = {
    title: {
        text: '最近7天用户访问量',
        left: '50%',
        show: false,
        textAlign: 'center'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            lineStyle: {
                color: '#ddd'
            }
        },
        backgroundColor: 'rgba(255,255,255,1)',
        padding: [5, 10],
        textStyle: {
            color: '#7588E4',
        },
        extraCssText: 'box-shadow: 0 0 5px rgba(0,0,0,0.3)'
    },
    legend: {
        right: 20,
        orient: 'vertical',
    },
    xAxis: {
        type: 'category',
        data: ['2019-10-18', '2019-10-19', '2019-10-20', '2019-10-21', '2019-10-22', '2019-10-23','2019-10-24'],
        boundaryGap: false,
        splitLine: {
            show: true,
            interval: 'auto',
            lineStyle: {
                color: ['#D4DFF5']
            }
        },
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#609ee9'
            }
        },
        axisLabel: {
            margin: 10,
            textStyle: {
                fontSize: 10
            }
        }
    },
    yAxis: {
        type: 'value',
        splitLine: {
            lineStyle: {
                color: ['#D4DFF5']
            }
        },
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#609ee9'
            }
        },
        axisLabel: {
            margin: 0,
            textStyle: {
                fontSize: 8
            }
        }
    },
    series: [{
        name: '昨日',
        type: 'line',
        smooth: true,
        showSymbol: false,
        symbol: 'circle',
        symbolSize: 6,
        data: ['1200', '1400', '808', '811', '626', '488', '1600'],
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(216, 244, 247,1)'
                }, {
                    offset: 1,
                    color: 'rgba(216, 244, 247,1)'
                }], false)
            }
        },
        itemStyle: {
            normal: {
                color: '#58c8da'
            }
        },
        lineStyle: {
            normal: {
                width: 3
            }
        }
    }]
};

const EchartsViews = () => (
    <ReactEcharts
        option={option}
        style={{height: '350px', width: '100%',marginTop:'10px'}}
        className={'react_for_echarts'}
    />
);

export default EchartsViews;