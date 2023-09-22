import { Controller } from "react-hook-form";

const {
  defaultWrapperStyle,
  defaultLabelStyle,
  defaultStyle,
  optionStyle,
  errorStyle,
} = {
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
    borderRadius: 4,
    padding: "13px 29px",
    fontSize: 16,
    fontWeight: 400,
    lineHeight: "20px",
    color: "#fff",
    backgroundColor: "#ffffff08",
  },

  optionStyle: {
    color: "#ffffff08",
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

const InputSelect = ({
  control,
  name,
  error,
  label,
  placeholder,
  wrapperStyle,
  labelStyle,
  style,
  className,
  list = [],
  ...props
}: any) => {
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

          <select
            className="w-full mt-2 border h-[35px] rounded-[5px]"
            onChange={(e: any) => {
              onChange(e.target.value);
            }}
            style={{ ...defaultStyle, ...style }}
            {...props}>
            <option style={optionStyle} value="">
              {placeholder}
            </option>

            {list?.map((listItem: any, idx: number) => (
              <option style={optionStyle} value={listItem} key={idx}>
                {listItem}
              </option>
            ))}
          </select>

          {message && <p style={errorStyle}>{message}</p>}
        </div>
      )}
    />
  );
};

export default InputSelect;
