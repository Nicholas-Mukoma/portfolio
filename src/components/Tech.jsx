import { BallCanvas } from "./canvas"
import { SectionWrapper } from "../hoc"
import { technologies } from "../constants"




const Tech = () => {
  return (
    <>
      <div className="text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] flex items-center justify-center">
          <h2>Tech Stack</h2>
      </div>
      <div className="flex flex-row flex-wrap justify-center gap-10 mt-6">
          {technologies.map((technology) => (
            <div key={technology.name} className="w-28 h-28 flex flex-col items-center justify-center">
              <BallCanvas icon={technology.icon}/>
              <p>{technology.name}</p>
            </div>
          ))}
      </div>
    </>
  )
}

export default SectionWrapper(Tech)