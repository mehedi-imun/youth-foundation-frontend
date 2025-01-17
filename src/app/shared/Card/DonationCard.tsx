"use client"
import { Button, Card, Col, Layout, Row, Typography } from "antd";
import Image from "next/image";

interface CardData {
  title: string;
  description: string;
  imageUrl: string;
}

interface DonationCardProps {
  data: CardData[];
}

export default function DonationCard({ data }: DonationCardProps) {
  return (
    <Layout>
      <Row
        style={{ width: "80%", margin: "auto", padding: "50px 0px" }}
        gutter={[16, 16]}
      >
        {data.map((item, index) => (
          <Col key={index} xs={24} sm={12} md={12} lg={8}>
            <Card
              hoverable
              cover={
                <Image
                  width={500}
                  layout="responsive"
                  height={400}
                  alt={item.title}
                  src={item.imageUrl}
                />
              }
            >
              {/* Text Description with Ellipsis */}
              <Typography.Title level={4}>
                {item.title}
              </Typography.Title>
              <Typography.Paragraph
                ellipsis={{
                  rows: 5, // Set the number of lines after which ellipsis appears
                  expandable: true, // Allow expanding the text on click
                  symbol: 'see more', // Customize the symbol when expanded
                }}
              >
                {item.description}
              </Typography.Paragraph>
              
              <Button
                style={{ marginTop: "10px" }}
                size="large"
                type="primary"
                block
              >
                Donate
              </Button>
            </Card>
          </Col>
        ))}
      </Row>
    </Layout>
  );
}
