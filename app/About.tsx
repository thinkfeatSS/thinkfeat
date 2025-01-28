'use client'
import Image from "next/image";


const aboutData = {

  // sectionTitle: "Our About Us",
  // mainTitle: "More than To Provide IT Solutions 24+ Years Of Experience",
  // description:
  //   "We are privileged to work with hundreds of future-think IT. It is a long-established fact that will...",
  // buttonLabel: "About More",

  // progressBars: [
  //   { label: "Development", value: 90 },
  //   { label: "Design", value: 85 },
  //   { label: "Solution", value: 75 },
  //   { label: "Consultancy", value: 70 },
  // ],
  images: [
   
    { src: "/images/About/about2.jpg", alt: "Team 2", className: "rounded-lg" },
    { src: "/images/About/about3.jpg", alt: "Team 3", className: "rounded-lg" },
    { src: "/images/About/about3.jpg", alt: "Team 4", className: "rounded-lg" },
  ],
};

const About = () => {
  return (
    <section id="aboutsection" className="bg-on-surface-color dark:bg-surface-color dark:text-on-surface-color text-gray-800 py-16 px-6 md:px-16 lg:px-32 ">

      <h2 className="text-4xl py-12 font-bold text-on-primary dark:text-white text-center">About Us</h2>
      
        <div className="flex flex-col md:flex-row gap-12">
          <div className="grid grid-cols-3 gap-4">
            {aboutData.images.map((image, index) => (
              <Image
                key={index}
                src={image.src}
                alt={image.alt}
                className={image.className}
                width={400}
                height={400}
              />
            ))}
          </div>

        </div>
        <div className="flex gap-10 mt-8">

          <div className="w-[50%]">
            <h2 className="text-3xl font-bold text-secondary">Our Mission</h2>
            <p>To cater to every Software need, Swiftly and Effectively</p>
          </div>
          <div className="w-[50%]">
            <h2 className="text-3xl font-bold text-secondary">Our Vision</h2>
            <p>
              To be the best software solution provider in the world, helping change the world of Technology through our top-notch Software Engineering Solutions.</p>
          </div>

        </div>
    

    </section>
  );
};

export default About;