import React, {useState} from "react";
import Project from "../Project";
import assignments from "../../project.json"; // need to make project.json
import Wrapper from "../Wrapper/Wrapper";
import Title from "../Title/Title";


function Projects() {
  const [project] = useState (assignments);

  return (
    <Wrapper>
      <Title>Projects</Title>
      {project.map(p => {
        return <Project
          key={p.id}
          title={p.title}
          image={p.image}
          description={p.description}
          // occupation={f.occupation}
          // location={f.location}
          // doRemove = {function() {removeFriend(f.id)}}
        />
      })}
    </Wrapper>
  );
}

export default Projects;
