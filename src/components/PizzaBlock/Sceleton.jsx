import React from "react"
import ContentLoader from "react-content-loader"

const Sceleton = (props) => (
  <ContentLoader 
    className="pizza-block"
    speed={2}
    width={280}
    height={465}
    viewBox="0 0 280 465"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="8" y="457" rx="0" ry="0" width="3" height="17" /> 
    <circle x="15" y="0" cx="125" cy="125" r="125" /> 
    <rect x="0" y="291" rx="9" ry="9" width="276" height="24" /> 
    <rect x="0" y="335" rx="8" ry="8" width="270" height="80" /> 
    <rect x="1" y="429" rx="8" ry="8" width="77" height="29" /> 
    <rect x="140" y="447" rx="0" ry="0" width="0" height="1" /> 
    <rect x="133" y="427" rx="8" ry="8" width="135" height="37" />
  </ContentLoader>
)

export default Sceleton