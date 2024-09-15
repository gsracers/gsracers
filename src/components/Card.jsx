import React from 'react';

const Card = (props) => {
  return (
    <>
      <div className="flex hover:scale-105 duration-300 flex-col rounded-lg bg-blue-800/10 shadow-sm w-96 p-8 my-6 border border-blue-600">
        <div className="pb-8 m-0 mb-8 text-center text-slate-100 border-b border-blue-600">
          <p className="text-3xl uppercase font-semibold text-slate-300">
            {props.category}
          </p>
          <h1 className="flex justify-center gap-1 mt-4 font-bold text-white">
            <span className="text-lg"></span>{props.price}
          </h1>
        </div>
        <div className="p-0">
          <ul className="flex flex-col gap-4">
            {props.features.map((item, index) => (
              <li key={index} className="flex items-center gap-4">
                <span className="p-1 border rounded-full border-slate-500 bg-slate-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="w-4 h-4 text-slate-300"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                </span>
                <p className="text-slate-300">{item}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Card;
