import React, { useEffect } from "react";

const Home = ({ section }) => {
  const reviews1Ref = React.useRef(null);
  const service1Ref = React.useRef(null);

  useEffect(() => {
    if (section === "reviews1" && reviews1Ref.current) {
      reviews1Ref.current.scrollIntoView({ behavior: "smooth" });
    } else if (section === "service1" && service1Ref.current) {
      service1Ref.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [section]);

  return (
    <div>
      <section ref={reviews1Ref} style={{ height: "100vh", backgroundColor: "#f0f0f0" }}>
        <h2>Reviews Section</h2>
      </section>
      <section ref={service1Ref} style={{ height: "100vh", backgroundColor: "#d0d0d0" }}>
        <h2>Service Section</h2>
      </section>
    </div>
  );
};

export default Home;
