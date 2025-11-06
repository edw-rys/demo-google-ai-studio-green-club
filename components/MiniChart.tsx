import React from 'react';

const MiniChart: React.FC = () => {
    const data = [30, 50, 45, 65, 70, 90, 85];
    const width = 100;
    const height = 40;
    const maxVal = Math.max(...data);
    
    const points = data.map((point, i) => {
        const x = (i / (data.length - 1)) * width;
        const y = height - (point / maxVal) * height;
        return `${x},${y}`;
    }).join(' ');

    const firstPoint = points.split(' ')[0];
    const lastPoint = points.split(' ').pop();

    const areaPoints = `0,${height} ${points} ${width},${height}`;

    return (
        <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-16" preserveAspectRatio="none">
            <defs>
                <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#2E7D32" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#2E7D32" stopOpacity="0" />
                </linearGradient>
            </defs>
            <polyline
                fill="none"
                stroke="#2E7D32"
                strokeWidth="1"
                points={points}
            />
            <polygon
                fill="url(#chartGradient)"
                points={areaPoints}
            />
            <circle cx={firstPoint.split(',')[0]} cy={firstPoint.split(',')[1]} r="1.5" fill="#2E7D32" />
            <circle cx={lastPoint.split(',')[0]} cy={lastPoint.split(',')[1]} r="1.5" fill="#2E7D32" />
        </svg>
    );
};

export default MiniChart;