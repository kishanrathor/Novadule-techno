import React from 'react';
import 'devicon/devicon.min.css'; // Import Devicon styles


const Award1 = () => {
  const data = [
    { icon: "devicon-javascript-plain colored", title: "JavaScript" },
    { icon: "devicon-python-plain colored", title: "Python" },
    { icon: "devicon-java-plain colored", title: "Java" },
    { icon: "devicon-cplusplus-plain colored", title: "C++" },
    { icon: "devicon-mongodb-plain colored", title: "MongoDB" },
    { icon: "devicon-mysql-plain colored", title: "MySQL" },
    { icon: "devicon-nodejs-plain colored", title: "Node.js" },
    { icon: "devicon-react-original colored", title: "React.js" },

    { icon: "devicon-php-plain colored", title: "PHP" },
    { icon: "devicon-ruby-plain colored", title: "Ruby" },
    { icon: "devicon-go-plain colored", title: "Go" },
    { icon: "devicon-kotlin-plain colored", title: "Kotlin" },
    { icon: "devicon-typescript-plain colored", title: "TypeScript" },
    { icon: "devicon-swift-plain colored", title: "Swift" },
  ];

  return (
    <div className="slider-container bg-light py-4">
      <div className="slider d-flex">
        {/* Render the data */}
        {data.map((item, i) => (
          <div key={i} className="slider-item text-center px-3">
            <i
              className={`devicon ${item.icon} mb-2`}
              style={{ fontSize: "30px" }} // Original colors come from the `colored` class
            ></i>
            <p className="slider-title fw-bold">{item.title}</p>
          </div>
        ))}

        {/* Repeat for infinite scrolling */}
        {data.map((item, i) => (
          <div key={`${i}-repeat`} className="slider-item text-center px-3">
            <i
              className={`devicon ${item.icon} mb-2`}
              style={{ fontSize: "60px" }}
            ></i>
            <p className="slider-title fw-bold">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Award1;
