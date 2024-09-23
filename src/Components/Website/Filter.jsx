const Checkbox = ({ items }) => {
  return (
    <div className="space-y-2">
      {items &&
        items.map((item, index) => (
          <label key={index} className="flex justify-between items-center">
            <span className="text-[15px] capitalize">{item.title}</span>
            <input
              type="checkbox"
              className="form-checkbox w-6 h-6 text-blue-600"
            />
          </label>
        ))}
    </div>
  );
};

export default Checkbox;

// const Checkbox = () => {
//   return (
//     <div className="space-y-4">
//       <label className="flex justify-between items-center text-dark text-xl p-2 select-none relative">
//         <span>One</span>
//         <input type="checkbox" className="checkbox-custom" />
//         <div className="svg-icon">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             height="1em"
//             viewBox="0 0 448 512"
//           >
//             <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
//           </svg>
//         </div>
//       </label>

//       <label className="flex justify-between items-center text-dark text-xl p-2 select-none relative">
//         <span>Two</span>
//         <input type="checkbox" className="checkbox-custom" />
//         <div className="svg-icon">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             height="1em"
//             viewBox="0 0 448 512"
//           >
//             <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
//           </svg>
//         </div>
//       </label>

//       <label className="flex justify-between items-center text-dark text-xl p-2 select-none relative">
//         <span>Three</span>
//         <input type="checkbox" className="checkbox-custom" />
//         <div className="svg-icon">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             height="1em"
//             viewBox="0 0 448 512"
//           >
//             <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
//           </svg>
//         </div>
//       </label>

//       <label className="flex justify-between items-center text-dark text-xl p-2 select-none relative">
//         <span>Four</span>
//         <input type="checkbox" className="checkbox-custom" />
//         <div className="svg-icon">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             height="1em"
//             viewBox="0 0 448 512"
//           >
//             <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
//           </svg>
//         </div>
//       </label>
//     </div>
//   );
// };

// // Tailwind CSS classes for custom checkbox styles
// const tailwindStyles = `
// .checkbox-custom {
//   width: 35px;
//   height: 35px;
//   cursor: pointer;
//   appearance: none;
//   border-radius: 5px;
//   background-color: #64ccc5;
//   transition: all 0.3s;
//   position: relative;
// }

// .checkbox-custom::before {
//   content: "";
//   background-color: #ffc8c8;
//   position: absolute;
//   width: 55px;
//   height: 3px;
//   border-radius: 25px;
//   transform: translate(100px, 0px) scale(0);
//   transition: ease-out 0.15s;
// }

// .checkbox-custom:checked::before {
//   transform: translateX(2em);
//   top: 12px;
// }

// .checkbox-custom:hover {
//   transform: translate(4px, 4px);
//   background-color: #ffc8c8;
// }

// .checkbox-custom:checked {
//   background-color: #ffc8c8;
// }

// .svg-icon {
//   position: absolute;
//   width: 25px;
//   height: 25px;
//   display: flex;
//   z-index: 3;
//   top: 35%;
//   left: 11%;
//   color: #fefefe;
//   transform: rotate(0deg) scale(0);
//   transition: ease-in 0.2s;
// }

// .checkbox-custom:checked ~ .svg-icon {
//   transform: rotate(360deg) scale(1);
// }
// `;

// // Inject custom styles into Tailwind
// const injectStyles = () => {
//   const style = document.createElement("style");
//   style.innerHTML = tailwindStyles;
//   document.head.appendChild(style);
// };

// // Call the injectStyles function
// injectStyles();

// export default Checkbox;
