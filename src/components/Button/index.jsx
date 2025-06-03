import { Button } from "react-bootstrap";
import PropTypes from "prop-types";

const SButton = ({ children, action, variant, size, loading, disabled, className }) => {
  return (
    <Button className={className} onClick={action} variant={variant} disabled={disabled} size={size}>
      {" "}
      {loading ? "loading..." : children}{" "}
    </Button>
  );
};
SButton.propTypes = {
  children: PropTypes.node.isRequired,
  action: PropTypes.func.isRequired,
  variant: PropTypes.string,
  size: PropTypes.string,
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
  className: PropTypes.string,
};

export default SButton;
