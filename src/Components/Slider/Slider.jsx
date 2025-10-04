import React, {useRef, useState} from "react";

function Slider() {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const scrollContainerRef = useRef();
  const services = [
    {
      id: 1,
      title: "Cleaning Service",
      image:
        "https://images.pexels.com/photos/4108715/pexels-photo-4108715.jpeg?auto=compress&cs=tinysrgb&w=600",
      color: "#dc2626",
    },
    {
      id: 2,
      title: "Kitchen Service",
      image:
        "https://images.pexels.com/photos/4099467/pexels-photo-4099467.jpeg?auto=compress&cs=tinysrgb&w=600",
      color: "#0ea5e9",
    },
    {
      id: 3,
      title: "Bathroom Service",
      image:
        "https://images.pexels.com/photos/6195129/pexels-photo-6195129.jpeg?auto=compress&cs=tinysrgb&w=600",
      color: "#f97316",
    },
    {
      id: 4,
      title: "Home Service",
      image:
        "https://images.pexels.com/photos/5691576/pexels-photo-5691576.jpeg?auto=compress&cs=tinysrgb&w=600",
      color: "#7c3aed",
    },
    {
      id: 5,
      title: "Garden Service",
      image:
        "https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg?auto=compress&cs=tinysrgb&w=600",
      color: "#10b981",
    },
  ];

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      const newScrollLeft =
        direction === "left"
          ? scrollContainerRef.current.scrollLeft - scrollAmount
          : scrollContainerRef.current.scrollLeft + scrollAmount;

      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      });
    }
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - (scrollContainerRef.current?.offsetLeft || 0));
    setScrollLeft(scrollContainerRef.current?.scrollLeft || 0);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - (scrollContainerRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2;
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };
  return (
    <div>
      {" "}
      <section className="slider-section">
        <div className="container">
          <div className="slider-header">
            <div className="slider-header-top">
              <button className="service-badge">
                <span className="badge-icon">+</span>
                Our Service
              </button>
            </div>
            <div className="slider-title-row">
              <h2 className="slider-title">Home care essentials</h2>
              <p className="slider-description">
                Explore Space home care essentials - expert cleaning, plumbing,
                AC maintenance, painting, and more, fast, reliable, tailored to
                your needs.
              </p>
            </div>
          </div>

          <div className="slider-wrapper">
            <button
              className="slider-arrow slider-arrow-left"
              onClick={() => scroll("left")}
              aria-label="Previous"
            >
              <ChevronLeft />
            </button>

            <div
              className="slider-container"
              ref={scrollContainerRef}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
            >
              {services.map((service) => (
                <div key={service.id} className="slider-card">
                  <div
                    className="slider-card-header"
                    style={{backgroundColor: service.color}}
                  >
                    <span className="slider-card-title">{service.title}</span>
                  </div>
                  <div className="slider-card-image">
                    <img
                      src={service.image}
                      alt={service.title}
                      draggable="false"
                    />
                  </div>
                </div>
              ))}
            </div>

            <button
              className="slider-arrow slider-arrow-right"
              onClick={() => scroll("right")}
              aria-label="Next"
            >
              <ChevronRight />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Slider;
