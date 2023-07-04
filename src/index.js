import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const skills = [
  {
    skill: "Java",
    level: "advanced",
    color: "#2662EA"
  },
  {
    skill: "Spring Boot",
    level: "intermediate",
    color: "#EFD81D"
  },
  {
    skill: "JDBC",
    level: "intermediate",
    color: "#C3DCAF"
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#E84F33"
  },
  {
    skill: "MySQL",
    level: "intermediate",
    color: "#E84F33"
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB"
  },
  {
    skill: "AWS",
    level: "beginner",
    color: "#FF3B00"
  }
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <div>
      <img className="avatar" src="./profile.png" alt="profile"></img>
    </div>
  );
}

function Intro() {
  return (
    <div className="data">
      <h1>VIGNESH P</h1>
      <p>
        Experienced Java developer with strong skills in full-stack web
        development. Consistently delivers high-quality software solutions on
        time and within budget. Collaborative team player. Committed to meeting
        project deadlines and exceeding client expectations.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill skill={skill.skill} level={skill.level} color={skill.color} />
      ))}
    </div>
  );
}

function Skill({ skill, level, color }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>
        {level === "beginner" && "👶"}
        {level === "intermediate" && "👍"}
        {level === "advanced" && "💪"}
      </span>
    </div>
  );
}
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
