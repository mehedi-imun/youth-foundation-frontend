import { Carousel } from "antd";
import {
  default as img1,
  default as img6,
} from "../../../../../../public/carousel/img1.png";
import img2 from "../../../../../../public/carousel/img2.png";
import img3 from "../../../../../../public/carousel/img3.png";
import img4 from "../../../../../../public/carousel/img4.png";
import img5 from "../../../../../../public/carousel/img5.png";

export default function Banner() {
  // Array of images
  const images = [img1, img2, img3, img4, img5, img6];

  return (
    <div style={{ width: "80%", margin: "auto", marginTop: "50px" }}>
      <Carousel autoplay>
        {images.map((image, index) => (
          <div key={index}>
            <div
              style={{
                height: "650px",
                backgroundImage: `url(${image.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: "20px",
              }}
            ></div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
