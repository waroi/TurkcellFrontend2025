export default function Progress({ progress }) {
  return (
    <div className="progress mb-5" role="progressbar">
      <div
        className="progress-bar bg-success"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
}
