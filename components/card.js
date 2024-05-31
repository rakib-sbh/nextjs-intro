const Card = ({ children }) => {
  const cardStyle = {
    padding: "10px",
    margin: "10px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
    border: "1px solid #ddd",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return <div style={cardStyle}>{children}</div>;
};

export default Card;
