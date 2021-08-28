import { Link } from "react-router-dom";

const Success = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        fontSize: "calc(2vw + 2rem)",
        background: "#111",
        color: "#42f575",
        flexDirection: "column",
      }}
    >
      Success!
      <div>
        <Link to="/" style={{ color: "inherit", fontSize: "30px" }}>
          Back
        </Link>
      </div>
    </div>
  );
};

export default Success;
