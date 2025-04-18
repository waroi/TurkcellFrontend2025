import React from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';

interface SparklineChartProps {
    data: number[]
    isPositive: boolean
    width?: number
    height?: number
}

const SparklineChart: React.FC<SparklineChartProps> = ({
    data,
    isPositive,
    width = 250,
    height = 50
}) => {
    return (
        <Sparklines data={data} width={width} height={height} margin={3}>
            <SparklinesLine color={isPositive ? "green" : "red"} />
        </Sparklines>
    )
}

export default SparklineChart