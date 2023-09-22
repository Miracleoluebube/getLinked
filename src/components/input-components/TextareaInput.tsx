import { Controller } from "react-hook-form";

const { defaultWrapperStyle, defaultLabelStyle, defaultStyle, errorStyle } = {
  defaultWrapperStyle: {
    width: "100%",
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    gap: 11,
  },

  defaultLabelStyle: {
    width: "100%",
    fontSize: 14,
    fintWeight: 400,
    lineHeight: "17px",
  },

  defaultStyle: {
    width: "100%",
    outline: "none",
    border: "1px solid #fff",
    backgroundColor: "#ffffff08",
    borderRadius: 4,
    padding: "13px 29px",
    fontSize: 16,
    fontWeight: 400,
    lineHeight: "20px",
    color: "#fff",
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

function TextareaInput({
  control,
  name,
  error,
  label,
  wrapperStyle,
  labelStyle,
  style,
  className,
  ...props
}: any) {
  const { message } = error || {};

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value } }) => (
        <div
          style={{ ...wrapperStyle, ...defaultWrapperStyle }}
          className={className}>
          {label && (
            <label
              htmlFor={name}
              style={{ ...defaultLabelStyle, ...labelStyle }}>
              {label}
            </label>
          )}

          <textarea
            name={name}
            value={value ? value : ""}
            onChange={(e) => onChange(e)}
            style={{ ...defaultStyle, ...style }}
            {...props}
          />

          {message && <p style={errorStyle}>{message}</p>}
        </div>
      )}
    />
  );
}

export default TextareaInput;
