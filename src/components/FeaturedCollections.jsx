import React from "react";

const FeaturedCollections = () => {
  const imageURL =
    "https://assets.theplace.com/image/upload/t_pdp_img_m,f_auto,q_auto/v1/ecom/assets/products/tcp/3050085/3050085_32I8.png";

  return (
    <>
    <div className="px-5 py-10 lg:px-20 font-poppins">
      {/* Header Section */}
      <h2 className="text-2xl sm:text-3xl font-bold text-[#2F3138] mb-6">
        Our Services
      </h2>

      {/* Services Grid */}
      <div className="flex flex-col md:flex-row gap-6">
        {/* Web Applications */}
        <div
          className="p-6 rounded-lg shadow-lg bg-gradient-to-r from-yellow-100 to-yellow-50 relative w-full md:w-1/2 lg:w-1/3 flex flex-col justify-center items-center"
          style={{ minHeight: "300px" }} // Adjusted height for responsiveness
        >
          <h3 className="text-xl font-semibold mb-2 text-[#2F3138] text-center">Web Applications</h3>
          <p className="text-[#2F3138] mb-4 text-sm sm:text-base text-center">
            We craft dynamic and scalable web applications tailored to your business needs.
          </p>
          <img
            src="/images/highlights/image.png"
            alt="Web Applications Icon"
            className="absolute bottom-3 right-3 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24"
          />
        </div>

        {/* Service 2 and New Box Container */}
        <div className="flex flex-col gap-6 w-full md:w-1/2 lg:w-1/3">
          {/* Service 2 */}
          <div className="p-6 rounded-lg shadow-lg w-full h-40 sm:h-48 flex flex-col justify-center items-center" style={{ backgroundColor: "#FBA25C" }}>
            <h3 className="text-xl font-semibold text-white text-center">Mobile Applications</h3>
            <p className="text-white text-sm sm:text-base text-center">
              We develop cross-platform mobile apps that deliver seamless user experiences.
            </p>
          </div>

          {/* New Box Under Service 2 */}
          <div className="p-6 rounded-lg shadow-lg w-full h-48 sm:h-56 flex flex-col justify-center items-center" style={{ backgroundColor: "#AE9FA6" }}>
            <h3 className="text-xl font-semibold text-white text-center">UI/UX Design</h3>
            <p className="text-white text-sm sm:text-base text-center">
              Our designs are user-centric, ensuring intuitive and engaging interfaces.
            </p>
          </div>
        </div>

        {/* Service 3 and New Box Container */}
        <div className="flex flex-col gap-6 w-full md:w-1/2 lg:w-1/3">
          {/* Service 3 */}
          <div className="p-6 rounded-lg w-full h-40 sm:h-48 flex flex-col justify-center items-center" style={{ backgroundColor: "#F8EBC6" }}>
            <h3 className="text-xl font-semibold text-[#2F3138] text-center">Cloud Solutions</h3>
            <p className="text-[#2F3138] text-sm sm:text-base text-center">
              We provide scalable and secure cloud solutions to power your business.
            </p>
          </div>

          {/* New Box Under Service 3 */}
          <div className="p-6 rounded-lg w-full h-48 sm:h-56 flex flex-col justify-center items-center" style={{ backgroundColor: "#E7D0C3" }}>
            <h3 className="text-xl font-semibold text-[#2F3138] text-center">Data Analytics</h3>
            <p className="text-[#2F3138] text-sm sm:text-base text-center">
              Unlock insights with our advanced data analytics and visualization tools.
            </p>
          </div>
        </div>
      </div>

     



      <div className="mt-10 p-6 rounded-lg shadow-lg bg-white border border-black relative w-full flex flex-col justify-center items-center" style={{ minHeight: "300px" }}>
  {/* Content Container */}
  <div className="flex flex-row items-center w-full">
    {/* Image on the Left */}
    <img
      src="/images/services/girl.png"
      alt="Zendown Icon"
      className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 mr-4" // Increased image size and added margin
    />

    {/* Text Content */}
    <p className="text-[#2F3138] text-sm sm:text-base flex-1 font-bold"> {/* Added font-bold */}
      ZeroLab presents Zero2Learn, a platform designed to help aspiring developers grow from beginner to expert. With expert-led tutorials, hands-on exercises, and real-world projects, Zero2Learn equips you with the skills to succeed in tech. Join us for coding resources, insights, and career development opportunities.
    </p>
  </div>

  {/* Badge for 'Zero2Learn' in the bottom-right corner inside the box */}
  
</div>



<div className="px-5 py-10 lg:px-20 font-poppins">
      {/* Header Section */}
      <h2 className="text-2xl sm:text-3xl font-bold text-[#2F3138] mb-6">
        Our Services
      </h2>

      {/* Services Grid */}
      <div className="flex flex-col md:flex-row gap-6">
        {/* Web Applications */}
        <div
          className="p-6 rounded-lg shadow-lg bg-gradient-to-r from-yellow-100 to-yellow-50 relative w-full md:w-1/2 lg:w-1/3 flex flex-col justify-center items-center"
          style={{ minHeight: "300px" }} // Adjusted height for responsiveness
        >
          <h3 className="text-xl font-semibold mb-2 text-[#2F3138] text-center">Web Applications</h3>
          <p className="text-[#2F3138] mb-4 text-sm sm:text-base text-center">
            We craft dynamic and scalable web applications tailored to your business needs.
          </p>
          <img
            src="/images/highlights/image.png"
            alt="Web Applications Icon"
            className="absolute bottom-3 right-3 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24"
          />
        </div>

        {/* Service 2 and New Box Container */}
        <div className="flex flex-col gap-6 w-full md:w-1/2 lg:w-1/3">
          {/* Service 2 */}
          <div className="p-6 rounded-lg shadow-lg w-full h-40 sm:h-48 flex flex-col justify-center items-center" style={{ backgroundColor: "#FBA25C" }}>
            <h3 className="text-xl font-semibold text-white text-center">Mobile Applications</h3>
            <p className="text-white text-sm sm:text-base text-center">
              We develop cross-platform mobile apps that deliver seamless user experiences.
            </p>
          </div>

          {/* New Box Under Service 2 */}
          <div className="p-6 rounded-lg shadow-lg w-full h-48 sm:h-56 flex flex-col justify-center items-center" style={{ backgroundColor: "#AE9FA6" }}>
            <h3 className="text-xl font-semibold text-white text-center">UI/UX Design</h3>
            <p className="text-white text-sm sm:text-base text-center">
              Our designs are user-centric, ensuring intuitive and engaging interfaces.
            </p>
          </div>
        </div>

        {/* Service 3 and New Box Container */}
        <div className="flex flex-col gap-6 w-full md:w-1/2 lg:w-1/3">
          {/* Service 3 */}
          <div className="p-6 rounded-lg w-full h-40 sm:h-48 flex flex-col justify-center items-center" style={{ backgroundColor: "#F8EBC6" }}>
            <h3 className="text-xl font-semibold text-[#2F3138] text-center">Cloud Solutions</h3>
            <p className="text-[#2F3138] text-sm sm:text-base text-center">
              We provide scalable and secure cloud solutions to power your business.
            </p>
          </div>

          {/* New Box Under Service 3 */}
          <div className="p-6 rounded-lg w-full h-48 sm:h-56 flex flex-col justify-center items-center" style={{ backgroundColor: "#E7D0C3" }}>
            <h3 className="text-xl font-semibold text-[#2F3138] text-center">Data Analytics</h3>
            <p className="text-[#2F3138] text-sm sm:text-base text-center">
              Unlock insights with our advanced data analytics and visualization tools.
            </p>
          </div>
        </div>
      </div>

     



      <div className="mt-10 p-6 rounded-lg shadow-lg bg-white border border-black relative w-full flex flex-col justify-center items-center" style={{ minHeight: "300px" }}>
  {/* Content Container */}
  <div className="flex flex-row items-center w-full">
    {/* Image on the Left */}
    <img
      src="/images/services/girl.png"
      alt="Zendown Icon"
      className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 mr-4" // Increased image size and added margin
    />

    {/* Text Content */}
    <p className="text-[#2F3138] text-sm sm:text-base flex-1 font-bold"> {/* Added font-bold */}
      ZeroLab presents Zero2Learn, a platform designed to help aspiring developers grow from beginner to expert. With expert-led tutorials, hands-on exercises, and real-world projects, Zero2Learn equips you with the skills to succeed in tech. Join us for coding resources, insights, and career development opportunities.
    </p>
  </div>

  {/* Badge for 'Zero2Learn' in the bottom-right corner inside the box */}
  <div className="absolute bottom-2 right-2 bg-[#fadc07] font-bold text-xs lg:text-sm px-3 py-1 rounded-full shadow-md xl:text-xl">
  
  </div>
</div>




    </div>

    </div>


      <style>{`
        .minimal-featured-collections {
          padding: 5rem 1.5rem;
          background: #FBF8F2;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
          position: relative;
          overflow: hidden;
        }

        .content {
          display: flex;
          flex-wrap: wrap;
          gap: 40px;
          justify-content: space-between;
          align-items: center;
          max-width: 1200px;
          width: 100%;
        }

        .image-carousel {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
          justify-content: center;
          max-width: 700px;
          width: 100%;
        }

        /* Carousel Item Card Style */
        .carousel-item {
          position: relative;
          overflow: hidden;
          border-radius: 20px;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          width: 48%;
          max-width: 280px;
          background: #fff;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
        }

        /* Horizontal Card with Slightly Larger Shadow */
        .carousel-item.horizontal {
          width: 48%;
        }

        /* Vertical Card Layout - Stacks Items */
        .carousel-item.vertical {
          width: 100%;
        }

        .carousel-item:hover {
          transform: translateY(-10px);
          box-shadow: 0 12px 32px rgba(0, 0, 0, 0.15);
        }

        .image-wrapper {
          position: relative;
          overflow: hidden;
          border-radius: 20px;
        }

        .image-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease, opacity 0.3s ease;
        }

        .image-wrapper:hover img {
          transform: scale(1.1);
          opacity: 0.9;
        }

        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(255, 255, 255, 0.8);
          color: #333;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          opacity: 0;
          transition: opacity 0.3s ease;
          text-align: center;
          padding: 15px;
          border-radius: 20px;
        }

        .carousel-item:hover .overlay {
          opacity: 1;
        }

        .overlay h3 {
          font-size: 1.4rem;
          margin-bottom: 5px;
          font-weight: 600;
        }

        .overlay p {
          font-size: 1.1rem;
          color: #555;
        }

        .cta {
          flex: 1;
          max-width: 400px;
          background: #fff;
          padding: 40px;
          border-radius: 20px;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
          text-align: left;
        }

        .cta h2 {
          font-size: 2.4rem;
          line-height: 1.4;
          margin-bottom: 15px;
          color: #333;
          font-weight: 700;
        }

        .highlight {
          color: #ff6b6b;
          font-weight: bold;
        }

        .cta p {
          font-size: 1.1rem;
          color: #777;
          margin-bottom: 20px;
        }

        .shop-now {
          background: #ff6b6b;
          color: #fff;
          padding: 12px 25px;
          font-size: 1rem;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .shop-now:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 16px rgba(255, 107, 107, 0.4);
        }

        @media (max-width: 768px) {
          .content {
            flex-direction: column;
            align-items: center;
          }

          .image-carousel {
            justify-content: center;
            width: 100%;
          }

          .carousel-item.horizontal {
            width: 100%;
            min-width: 100%;
          }

          .cta {
            margin-top: 20px;
            padding: 30px;
            text-align: center;
          }

          .cta h2 {
            font-size: 2rem;
          }
        }
      `}</style>
    </>
  );
};

export default FeaturedCollections;