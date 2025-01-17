import { Form, Select, Typography } from "antd";
import { useEffect } from "react";
import { Controller, useFormContext, useWatch } from "react-hook-form";

type TPHSelectProps = {
  label?: string;
  name: string;
  options: { value: string; label: string; disabled?: boolean }[] | undefined;
  disabled?: boolean;
  mode?: "multiple" | undefined;
  placeholder?: string;
  onValueChange: React.Dispatch<React.SetStateAction<string>>;
};

const YouthSelectWithWatch = ({
  label,
  name,
  options,
  disabled,
  mode,
  placeholder,
  onValueChange,
}: TPHSelectProps) => {
  const method = useFormContext();
  const inputValue = useWatch({
    control: method.control,
    name,
  });

  useEffect(() => {
    onValueChange(inputValue);
  }, [inputValue]);

  return (
    <Controller
      name={name}
      render={({ field, fieldState: { error } }) => (
        <Form.Item style={{ margin: "0px" }} label={label}>
          <Select
            status={error ? "error" : ""}
            mode={mode}
            style={{ width: "100%" }}
            {...field}
            options={options}
            size="large"
            disabled={disabled}
            placeholder={placeholder}
          />
          <Typography
            style={{
              color: "red",
              minHeight: "20px",
              fontSize: "12px",
            }}
          >
            {error?.message || ""}
          </Typography>
        </Form.Item>
      )}
    />
  );
};

export default YouthSelectWithWatch;
