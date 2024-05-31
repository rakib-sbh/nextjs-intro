"use client";

const ErrorBoundary = ({ error, reset }) => {
  return (
    <div>
      {error.message} <button onClick={reset}>Try Again</button>
    </div>
  );
};

export default ErrorBoundary;
