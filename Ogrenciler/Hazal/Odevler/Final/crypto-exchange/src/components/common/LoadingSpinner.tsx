export function LoadingSpinner({ fullPage }: { fullPage?: boolean }) {
  return (
    <div className={`spinner ${fullPage ? 'full-page' : ''}`}>
      <div className="loading-indicator"></div>
    </div>
  );
}