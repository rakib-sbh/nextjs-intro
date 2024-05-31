const ComplexDashboardLayout = ({
  children,
  notifications,
  revenue,
  users,
  login,
}) => {
  const isLoggedIn = true;

  return isLoggedIn ? (
    <>
      <div>{children}</div>
      <div style={{ display: "flex" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div>{users}</div>
          <div>{revenue}</div>
        </div>
        <div style={{ display: "flex", flex: 1 }}>{notifications}</div>
      </div>
    </>
  ) : (
    <div>{login}</div>
  );
};

export default ComplexDashboardLayout;
