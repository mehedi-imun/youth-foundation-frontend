"use client";
import { Form, Input, Typography } from "antd";
import { Controller } from "react-hook-form";

type TInputProps = {
  type: string;
  name: string;
  label?: string;
  disabled?: boolean;
  placeholder?: string;
};

const YouthInput = ({
  type,
  name,
  label,
  disabled,
  placeholder,
}: TInputProps) => {
  return (
    <div>
      <Controller
        name={name}
        render={({ field, fieldState: { error } }) => (
          <Form.Item style={{ margin: "0px" }} label={label}>
            <Input
              status={error ? "error" : ""}
              {...field}
              type={type}
              id={name}
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
    </div>
  );
};

export default YouthInput;
