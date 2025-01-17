"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Card, Col, Layout, Row } from "antd";
import { useState } from "react";
import { FieldValues } from "react-hook-form";
import { z } from "zod";
import YouthForm from "./form/YouthForm";
import YouthInput from "./form/YouthInput";
import YouthSelectWithWatch from "./form/YouthSelectWithWatch";

export const donationSchema = z.object({
  donationType: z.string().nonempty("Select Donation Fund"),
  emailOrPhone: z
    .string()
    .nonempty("Email or phone is required.")
    .regex(
      /^[^\s@]+@[^\s@]+\.[^\s@]+$|^[0-9]+$/,
      "Input valid phone number or email"
    ),
  amount: z
    .string()
    .nonempty("Amount is required.")
    .transform((value) => parseFloat(value)) // Transform to a number
    .refine((value) => !isNaN(value), {
      message: "Amount must be a valid number",
    })
    .transform((value) =>
      z.number().min(1, "Donation Amount is required.").parse(value)
    ),
});

export default function Donation() {
  const onSubmit = async (data: FieldValues) => {
    console.log(data);
  };
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setSelectedDonationType] = useState<string>("");

  return (
    <Layout>
      <div style={{ width: "80%", margin: "auto" }}>
        <Card type="inner" style={{ marginTop: "10px" }}>
          <Row
            style={{
              marginTop: "20px",
            }}
            justify="center"
          >
            <Col span={24}>
              <YouthForm
                onSubmit={onSubmit}
                resolver={zodResolver(donationSchema)}
              >
                <Row gutter={[8, 8]}>
                  <Col span={6} xs={24} sm={12} md={8} lg={6}>
                    <YouthSelectWithWatch
                      name="donationType"
                      options={[
                        { value: "1", label: "General Fund" },
                        { value: "2", label: "Specific Cause" },
                      ]}
                      placeholder="Select Donation Type"
                      onValueChange={setSelectedDonationType}
                    />
                  </Col>
                  <Col span={6} xs={24} sm={12} md={8} lg={6}>
                    <YouthInput
                      name="emailOrPhone"
                      placeholder="Enter your email or phone"
                      type="text"
                    />
                  </Col>
                  <Col span={6} xs={24} sm={12} md={8} lg={6}>
                    <YouthInput
                      name="amount"
                      placeholder="Enter donation amount"
                      type="number"
                    />
                  </Col>
                  <Col span={6} xs={24} sm={12} md={8} lg={6}>
                    <Button size="large" type="primary" htmlType="submit" block>
                      Donate
                    </Button>
                  </Col>
                </Row>
              </YouthForm>
            </Col>
          </Row>
        </Card>
      </div>
    </Layout>
  );
}
