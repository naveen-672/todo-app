//2. using css stylesheet
// import "../css/style.css";

import style from "./InlineComponent.module.css";

//inline style1
// const headingStyle = {
//   color: "grey",
//   fontSize: "20px",
//   backgroundColor: "orange",
// };

export default function InlineComponent() {
  return (
    <div>
      <h1 className={style.heading}>Inline component</h1>
      {/* //2. using css stylesheet */}
      {/* <h1 className="headingStyle">Inline component</h1> */}
      {/*1. inline style 2 */}
      {/* <h1 style={headingStyle}>inline component</h1> */}
      {/* 1. inline style 1   */}
      {/* <h1
        style={{
          color: "grey",
          fontSize: "20px",
          backgroundColor: "orange",
        }}
      >
        inline component
      </h1> */}
    </div>
  );
}
