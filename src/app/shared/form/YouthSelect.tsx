import { Form, Select } from "antd";
import { Controller } from "react-hook-form";

type TYouthSelectProps = {
  label?: string;
  name: string;
  options: { value: string; label: string; disabled?: boolean }[] | undefined;
  disabled?: boolean;
  mode?: "multiple" | undefined;
  placeholder: string;
};

const YouthSelect = ({
  label: label,
  name,
  options,
  disabled,
  mode,
  placeholder
}: TYouthSelectProps) => {
  return (
    <Controller
      name={name}
      render={({ field, fieldState: { error } }) => (
        <Form.Item st label={label}>
          <Select
            mode={mode}
            style={{ width: "100%" }}
            {...field}
            options={options}
            size="large"
            placeholder={placeholder}
            disabled={disabled}
          />
          {error && <small style={{ color: "red" }}>{error.message}</small>}
        </Form.Item>
      )}
    />
  );
};

export default YouthSelect;
