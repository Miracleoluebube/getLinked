import { Controller } from "react-hook-form";

const { defaultWrapperStyle, labelStyle, errorStyle } = {
  defaultWrapperStyle: {
    display: "flex",
    gap: 10,
  },
  labelStyle: {
    fontSize: 12,
    fontWeight: 400,
    lineHeight: "14px",
  },
  errorStyle: {
    fontSize: 12,
    fontStyle: "italic",
    fontWeight: 400,
    lineHeight: "15px",
    marginTop: 8,
    color: "#FF26B9",
  },
};

function Checkbox({
  control,
  name,
  error,
  label,
  className,
  wrapperStyle,
  ...props
}: any) {
  const { message } = error || {};

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value } }) => (
        <div>
          <div
            style={{ ...defaultWrapperStyle, ...wrapperStyle }}
            className={className}>
            <input
              type="checkbox"
              name="confirm"
              id="confirm"
              value={value}
              onChange={(e) => onChange(e)}
              checked={value}
              {...props}
            />
            <label htmlFor="confirm" style={labelStyle}>
              {label}
            </label>
          </div>

          {message && <p style={errorStyle}>{message}</p>}
        </div>
      )}
    />
  );
}

export default Checkbox;
