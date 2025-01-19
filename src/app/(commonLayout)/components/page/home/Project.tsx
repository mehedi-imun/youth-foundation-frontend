"use client";
import { Button, Card, Col, Layout, Row, Typography } from "antd";

interface ProjectData {
  title: string;
  description: string;
}

interface ProjectProps {
  data: ProjectData[];
}

// Updated gradient colors based on your brand colors
const gradientColors = [
  "linear-gradient(45deg, #67bc45, #2fad74)", // Green to teal (brand colors)
  "linear-gradient(45deg, #2fad74, #67bc45)", // Teal to green (brand colors reversed)
  "linear-gradient(45deg, #67bc45, #4fa56d)", // Green to darker green
  "linear-gradient(45deg, #2fad74, #3eaf8d)", // Teal to darker teal
  "linear-gradient(45deg, #67bc45, #5fd08e)", // Green to light green
];

export default function Project({ data }: ProjectProps) {
  return (
    <Layout>
     
        <Row
          style={{ width: "80%", margin: "auto", padding: "50px 0px" }}
          gutter={[16, 16]}
        >
          {data.map((project, index) => {
            // Select a gradient color for each card
            const randomGradient =
              gradientColors[index % gradientColors.length];

            return (
              <Col  style={{padding:"0"}}  key={index} xs={24} sm={12} md={12} lg={8}>
                <Card
                  // bordered={false}
                  style={{
                    background: randomGradient,
                  }}
                >
                  <Typography.Title style={{ color: "white" }} level={1}>
                    {project.title}
                  </Typography.Title>
                  <Typography.Paragraph
                    style={{ color: "white",}}
                    ellipsis={{
                      rows: 5, // Set the number of lines after which ellipsis appears
                      expandable: true, // Allow expanding the text on click
                      symbol: "see more", // Customize the symbol when expanded
                    }}
                  >
                    {project.description}
                  </Typography.Paragraph>
                </Card>
              </Col>
            );
          })}
         <div> <Button  type="primary">learn more</Button></div>
        </Row>
        
    </Layout>
  );
}
