import { useEffect, useState } from 'react';

type SkillsProps = {
  skills: string[];
};

export const Skills = ({ skills }: SkillsProps) => {
  const [isLogged, setLogged] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLogged(true);
    }, 500)
  }, [])

  return (
    <>
      <ul>
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
      {isLogged ? (
        <button>Start learning</button>
      ) : (
        <button onClick={() => setLogged(true)}>Login</button>
      )}
    </>
  );
};
