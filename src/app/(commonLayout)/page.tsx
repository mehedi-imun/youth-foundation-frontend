import DonationCard from "../shared/Card/DonationCard";
import Donation from "../shared/Donation";
import AboutUs from "./components/page/home/AboutUsSection";
import Banner from "./components/page/home/Banner";
import BloodDonationSection from "./components/page/home/BloodDonationSection";
import OnGoingProject from "./components/page/home/OnGoingProject";
import Project from "./components/page/home/Project";

export default function page() {
  const sampleData = [
    {
      title: "Zakat Donation",
      description:
        "The As-Sunnah Foundation Masjid Complex will be the focal point of the multi-faceted activities of the As-Sunnah Foundation for the welfare of the country, nation and ummah. In-Sha-Allah it will be the center of various humanitarian and public welfare projects, including an ideal mosque, a modern madrasah with an integrated syllabus aimed at creating an Islamic scholar to meet the needs of the age.",
      imageUrl: "https://cdn.assunnahfoundation.org/donation/zakat.jpg",
    },
    {
      title: "Charity Donation",
      description:
        "The As-Sunnah Foundation Masjid Complex will be the focal point of the multi-faceted activities of the As-Sunnah Foundation for the welfare of the country, nation and ummah. In-Sha-Allah it will be the center of various humanitarian and public welfare projects, including an ideal mosque, a modern madrasah with an integrated syllabus aimed at creating an Islamic scholar to meet the needs of the ageMake a difference with your charity.",
      imageUrl: "https://cdn.assunnahfoundation.org/donation/zakat.jpg",
    },
    {
      title: "Education Fund",
      description:
        "The As-Sunnah Foundation Masjid Complex will be the focal point of the multi-faceted activities of the As-Sunnah Foundation for the welfare of the country, nation and ummah. In-Sha-Allah it will be the center of various humanitarian and public welfare projects, including an ideal mosque, a modern madrasah with an integrated syllabus aimed at creating an Islamic scholar to meet the needs of the ageSupport education for underprivileged children.",
      imageUrl: "https://cdn.assunnahfoundation.org/donation/zakat.jpg",
    },
    {
      title: "Education Fund",
      description:
        "The As-Sunnah Foundation Masjid Complex will be the focal point of the multi-faceted activities of the As-Sunnah Foundation for the welfare of the country, nation and ummah. In-Sha-Allah it will be the center of various humanitarian and public welfare projects, including an ideal mosque, a modern madrasah with an integrated syllabus aimed at creating an Islamic scholar to meet the needs of the ageSupport education for underprivileged children.",
      imageUrl: "https://cdn.assunnahfoundation.org/donation/zakat.jpg",
    },
    {
      title: "Education Fund",
      description:
        "The As-Sunnah Foundation Masjid Complex will be the focal point of the multi-faceted activities of the As-Sunnah Foundation for the welfare of the country, nation and ummah. In-Sha-Allah it will be the center of various humanitarian and public welfare projects, including an ideal mosque, a modern madrasah with an integrated syllabus aimed at creating an Islamic scholar to meet the needs of the ageSupport education for underprivileged children.",
      imageUrl: "https://cdn.assunnahfoundation.org/donation/zakat.jpg",
    },
    {
      title: "Education Fund",
      description:
        "The As-Sunnah Foundation Masjid Complex will be the focal point of the multi-faceted activities of the As-Sunnah Foundation for the welfare of the country, nation and ummah. In-Sha-Allah it will be the center of various humanitarian and public welfare projects, including an ideal mosque, a modern madrasah with an integrated syllabus aimed at creating an Islamic scholar to meet the needs of the ageSupport education for underprivileged children.",
      imageUrl: "https://cdn.assunnahfoundation.org/donation/zakat.jpg",
    },
  ];
  const parentData = [
    {
      title: "Project 1",
      description: " Foundation organizes a session called 'Majlisus Sunnah' every month to promote pure Islamic teachings, awareness and life-oriented religiosity, ideals, ethics and religious awareness among the common people based on the Qur'an and Sahih Sunnah.",
    },
    {
      title: "Project 2",
      description: " Foundation organizes a session called 'Majlisus Sunnah' every month to promote pure Islamic teachings, awareness and life-oriented religiosity, ideals, ethics and religious awareness among the common people based on the Qur'an and Sahih Sunnah.",
    },
    {
      title: "Project 3",
      description: " Foundation organizes a session called 'Majlisus Sunnah' every month to promote pure Islamic teachings, awareness and life-oriented religiosity, ideals, ethics and religious awareness among the common people based on the Qur'an and Sahih Sunnah.",
    },
  ];
  
  return (
    <div>
      <Donation></Donation>
      <Banner></Banner>
      <AboutUs></AboutUs>
      <DonationCard data={sampleData}></DonationCard>
      <BloodDonationSection></BloodDonationSection>
      <Project data={parentData}></Project>
      <OnGoingProject></OnGoingProject>
    </div>
  );
}
