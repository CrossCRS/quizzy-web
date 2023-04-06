import React from 'react';

interface Props {
  radius: number,
  progress: number,
}

function ProgressRing(props: Props) {
  const stroke = 10;
  const circumference = (props.radius - stroke * 2) * 2 * Math.PI;
  const strokeDashoffset = circumference - props.progress / 100 * circumference;

  return (
    <svg width={props.radius * 2} height={props.radius * 2}>
      <circle className='origin-center -rotate-90'
        cx={props.radius}
        cy={props.radius}
        r={props.radius - stroke * 2}
        stroke='#e3e4e6'
        fill='transparent'
        strokeWidth={stroke}
      />
      <circle className='origin-center -rotate-90'
        cx={props.radius}
        cy={props.radius}
        r={props.radius - stroke * 2}
        stroke='#10b981'
        fill='transparent'
        strokeWidth={stroke}
        strokeDasharray={circumference + ' ' + circumference}
        style={{ strokeDashoffset, transition: 'stroke-dashoffset 0.5s' }}
      />
      <text className='text-3xl font-medium' x='50%' y='50%' dominantBaseline='central' textAnchor='middle'>{props.progress}%</text>
    </svg>
  );
}

export default ProgressRing;