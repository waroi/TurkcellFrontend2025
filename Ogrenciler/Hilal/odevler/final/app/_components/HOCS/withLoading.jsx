const withLoading = (WrappedComponent) => {
  return ({ isLoading, ...props }) => {
    if (isLoading) return <p>Loading...</p>;
    return <WrappedComponent {...props} />;
  };
};
