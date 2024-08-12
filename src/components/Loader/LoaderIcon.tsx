import styles from "./styles.module.css";

export interface LoaderProps {
  size?: number;
  color?: string;
  speed?: number;
}

const LoaderIcon: React.FC<LoaderProps> = ({
  size = 40,
  color = "#007bff",
  speed = 1,
}) => {
  return (
    <svg
      className={styles.loader}
      width={size}
      height={size}
      viewBox="0 0 50 50"
      style={
        {
          // Type assertion for CSS custom property
          ["--loader-speed" as string]: `${3 / speed}s`,
        } as React.CSSProperties
      }
    >
      <circle
        cx="25"
        cy="25"
        r="20"
        stroke={color}
        strokeWidth="5"
        fill="none"
        strokeDasharray="31.4 31.4"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default LoaderIcon;
