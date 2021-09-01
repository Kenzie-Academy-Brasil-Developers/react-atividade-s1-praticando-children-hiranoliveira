import "./style.css";

function CenteredCard({ children }) {
  return (
    <div className="div">
      <span className="span">
        <div>{children}</div>
      </span>
    </div>
  );
}

export default CenteredCard;
