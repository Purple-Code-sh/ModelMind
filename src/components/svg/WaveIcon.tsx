import React from 'react'
interface WaveIconProps {
  className?: string;
  fill?: string;
  fillOpacity?: number;
}

const WaveIcon: React.FC<WaveIconProps> = ({
  className,
  fill = 'currentColor',
  fillOpacity = 1
}) => (
  <svg
    className={className}
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 1440 320'
    width='100%'
  >
    <path
      fill={fill}
      fillOpacity={fillOpacity}
      d='M0,256L34.3,234.7C68.6,213,137,171,206,176C274.3,181,343,235,411,240C480,245,549,203,617,202.7C685.7,203,754,245,823,266.7C891.4,288,960,288,1029,261.3C1097.1,235,1166,181,1234,160C1302.9,139,1371,149,1406,154.7L1440,160L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z'
    />
  </svg>
)

export default WaveIcon
