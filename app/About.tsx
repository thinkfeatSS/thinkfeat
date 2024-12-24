'use client'
import Image from "next/image";


const aboutData = {
  sectionTitle: "Our About Us",
  mainTitle: "More than To Provide IT Solutions 24+ Years Of Experience",
  description:
    "We are privileged to work with hundreds of future-think IT. It is a long-established fact that will...",
  buttonLabel: "About More",
  progressBars: [
    { label: "Development", value: 90 },
    { label: "Design", value: 85 },
    { label: "Solution", value: 75 },
    { label: "Consultancy", value: 70 },
  ],
  images: [
    { src: "/images/pics1.jpg", alt: "Team 1", className: "rounded-lg" },
    { src: "/images/pic2.jpg", alt: "Team 2", className: "rounded-lg" },
    { src: "/images/pic3.jpg", alt: "Team 3", className: "rounded-lg" },
    { src: "/images/pic4.jpg", alt: "Team 4", className: "rounded-lg" },
  ],
};

const About = () => {
  return (
    <section id="aboutsection" className="bg-on-surface-color dark:bg-surface-color dark:text-on-surface-color text-gray-800 py-16 px-6 md:px-16 lg:px-32">
      <div className="flex flex-col md:flex-row gap-12">
        <div className="grid grid-cols-2 gap-4">
          {aboutData.images.map((image, index) => (
            <Image
              key={index}
              src={image.src}
              alt={image.alt}
              className={image.className}
              width={240}
              height={240}
            />
          ))}
        </div>
        <div className="flex-1">
          <h5 className="text-secondary mobile-headline-small uppercase text-sm mb-2">
            {aboutData.sectionTitle}
          </h5>
          <h2 className="mobile-display-small md:text-4xl font-bold leading-snug mb-4">
            {aboutData.mainTitle}
          </h2>
          <p className="text-gray-600 dark:text-on-surface-color mb-6">
            {aboutData.description}
          </p>
          <div className="space-y-4">
            {aboutData.progressBars.map((bar, index) => (
              <div key={index}>
                <div className="flex justify-between mb-1">
                  <span className="text-secondary mobile-title-medium dark:text-white ">
                    {bar.label}
                  </span>
                  <span className="text-gray-600 dark:text-on-surface-color">{bar.value}%</span>
                </div>
                <div className="w-full bg-secondary-200 rounded-full h-2">
                  <div
                    className="bg-secondary dark:bg-primary h-2 rounded-full"
                    style={{ width: `${bar.value}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
          <button className="btn-primary mt-6 bg-secondary text-white hover:bg-on-primary hover:text-text duration-300 mobile-title-medium py-3 px-6 rounded-lg dark:bg-primary dark:hover:bg-secondary dark:text-secondary dark:hover:text-on-surface-color">
            {aboutData.buttonLabel}
          </button>
        </div>
      </div>

      {/* BrandSlider */}
      <hr className="my-5 bg-gray-600 dark:bg-primary" />
     
    </section>
  );
};

export default About;
