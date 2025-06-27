import "./LoadingScreen.css";
interface LoadingScreenProps {
  isLoading: boolean;
  isInitialLoad?: boolean;
}

export default function LoadingScreen({
  isLoading,
  isInitialLoad = false,
}: LoadingScreenProps) {
  if (!isLoading || !isInitialLoad) return null;

  return (
    <div className="loading-screen">
      <div className="brand-text">kachi.DeGreat</div>
    </div>
  );
}
