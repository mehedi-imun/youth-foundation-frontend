import { Carousel, Layout } from "antd";
import Image from "next/image";
import img1 from "../../../../../../public/carousel/img1.png";
import img2 from "../../../../../../public/carousel/img2.png";
import img3 from "../../../../../../public/carousel/img3.png";
import img4 from "../../../../../../public/carousel/img4.png";
import img5 from "../../../../../../public/carousel/img5.png";
import img6 from "../../../../../../public/carousel/img6.png";

export default function Banner() {
  const images = [img1, img2, img3, img4, img5, img6];

  return (
    <Layout>
      <div style={{ width: "80%", margin: "auto", marginTop: "10px", marginBottom: "50px",  }}>
        <Carousel  adaptiveHeight autoplay>
          {images.map((image, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "500px", // Max height for the carousel
                overflow: "hidden",
                borderRadius: "20px",
                backgroundColor: "#f5f5f5", // Fallback background
              }}
            >
              <Image
                src={image}
                alt={`Slide ${index + 1}`}
                layout="intrinsic"
                width={1920}
                height={1080}
                style={{
                  objectFit: "contain",
                  maxHeight: "100%",
                  maxWidth: "100%",
                  borderRadius: "10px",
                }}
                sizes="(max-width: 768px) 100vw, 80vw"
              />
            </div>
          ))}
        </Carousel>
      </div>
    </Layout>
  );
}
