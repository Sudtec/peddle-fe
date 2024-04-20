const baseButtonStyle = {
  display: "inline-flex",
  flexShrink: 0,
  cursor: "pointer",
  userSelect: "none",
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "center",
  color: "#ffffff",
  borderRadius: "100px",
  borderWidth: "0px",
};

const MainButtonStyle = {
  padding: "14px 52px",
};

const ActionButtonStyle = {
  padding: "12px 20px 12px 30px",

};

const generateButtonStyles = (
  color: string,
  size: object,
  outline: boolean = false
) => ({
  ...baseButtonStyle,
  borderColor: color,
  borderWidth: outline ? "1px" : "0px",
  backgroundColor: outline ? "transparent" : color,
  color: outline ? color : "#fff",
  ...size,
});

const btn = {
  ".main-btn-primary": generateButtonStyles("#131316", MainButtonStyle),
  ".main-btn-secondary": generateButtonStyles("#4F4F4F", MainButtonStyle),
  ".action-btn-secondary": generateButtonStyles("#EFF1F6", ActionButtonStyle),
};

export default btn;
