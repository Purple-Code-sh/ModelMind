import { useState, useEffect } from "react";
import { LoaderIcon } from "./";
import styles from "./styles.module.css";

interface LoaderProps {
  children: React.ReactNode;
  minimumLoadTime?: number;
  loading?: boolean;
}

const Loader: React.FC<LoaderProps> = ({
  children,
  minimumLoadTime = 300,
  loading = false,
}) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, minimumLoadTime);

    return () => clearTimeout(timer);
  }, [minimumLoadTime]);

  if (isLoading || loading) {
    return (
      <div className={styles.container}>
        <LoaderIcon size={60} color="#007bff" speed={1} />
      </div>
    );
  }

  return <>{children}</>;
};

export default Loader;
