import React from 'react';

const CounterSection = () => {
  const counters = [
    { count: 125, label: 'Satisfied Customers' },
    { count: 865, label: 'Investments' },
    { count: 510, label: 'Project Completed' },
    { count: 1350, label: 'Positive Feedbacks' },
  ];

  return (
    <section className="bg-[#f9f8fa] relative py-[7.5rem]">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {counters.map((counter, index) => (
            <div key={index} className="serial-box text-center">
              <span>{counter.count}</span>
              <p >{counter.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CounterSection;
