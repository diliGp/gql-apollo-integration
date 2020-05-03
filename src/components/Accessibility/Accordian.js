import React from 'react';

const list = [
  `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim corporis magni corrupti labore.
  Similique ea doloremque natus maxime quis inventore, rerum, ad sequi, consequatur cumque
  suscipit est dolore iure eveniet.`,
  `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim corporis magni corrupti labore.
  Similique ea doloremque natus maxime quis inventore, rerum, ad sequi, consequatur cumque
  suscipit est dolore iure eveniet.`,
  `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim corporis magni corrupti labore.
  Similique ea doloremque natus maxime quis inventore, rerum, ad sequi, consequatur cumque
  suscipit est dolore iure eveniet.`
];

const Accordian = () => {
  return (
    <section className="container-accordian text-center">
      <h1 id="user-heading">Accordian Section</h1>
      <ul aria-labelledby="user-heading" id="user-section">
        {
          list.map((content, i) => (
            <li key={i}>
              <button 
                aria-label={`User ${i} content`} 
                aria-controls={`user_${i}_p`} 
                aria-expanded="false"
              >
                <h2 id={`u${i}h3`}>User {i + 1} title</h2>
                <p id={`user_${i}_p`}>{content}</p>
              </button>
            </li>
          ))
        }
      </ul>
      <button className="btn btn-neu mtb10">Change text</button>
    </section>
  )
};

export default Accordian;
