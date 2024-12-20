const LoadingSpinner = () => {
  return (
    <tr>
      <td colSpan={3} className="loading-cell" aria-live="polite">
        <div className="spinner"></div>
        <span className="loading-text">Loading data...</span>
      </td>
    </tr>
  );
};

export default LoadingSpinner;
