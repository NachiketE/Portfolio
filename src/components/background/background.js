import * as React from "react"


const backgroundData = {
  title: "Background",
  part1: "I am a Master of Science in Computer Science student at ",
  part2: "University of Southern California.",
  line2: "I am a Software Developer with a robust background in web development, iOS development, data engineering, DevOps, and cloud technologies, particularly AWS. My passion lies in creating innovative products and solutions that deliver meaningful, positive impact on people's lives. With a focus on leveraging cutting-edge technologies, I strive to build scalable, efficient systems that address real-world challenges and drive tangible value for users.",
  line3Part1: "When I'm off the screen",
  line3Part2: ", you'll likely find me playing cricket, cooking something delicious or going for long walks",
};
const Background = () => (
  <section className="section background">
    <div className="section__title">{backgroundData.title}</div>
    <div className="section__content">
      <p>
        {backgroundData.part1}
        <strong>{backgroundData.part2}</strong>
        {backgroundData.part3}
      </p>
      <p>
        {backgroundData.line2}
      </p>
      <p>
        <strong>{backgroundData.line3Part1}</strong>{backgroundData.line3Part2}
      </p>
    </div>
  </section>
)

export default Background
