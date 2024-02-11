const Project = ({ name, description, techStack, liveLink, githubLink, imgSrc }) => {

  return (
    <div className="project">
      <div className="project_info">
        <div className="project_name">{name}</div>
        <div className="project_desc">{description}</div>
        <div className="project_techstack">
          {techStack.map((tech, index) => (
            <span key={index}>{tech}</span>
          ))}
        </div>
        <div className="project_live_link">
          <a href={liveLink}>LIVE</a>
          <div className="project_github_link">
            <a href={githubLink}>
              <img src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" alt="github" />
            </a>
          </div>
        </div>
      </div>
      <div className="project_img">
        <img src={imgSrc} alt="website" />
      </div>
    </div>
  );
};

const AllProjects = () => {
  const projects = [
    {
      name: 'Graphql game-review API',
      description: 'This project implements a GraphQL API for managing game information and reviews. It includes a basic schema for games, reviews, and authors, with CRUD operations for games and relationships between entities.',
      techStack: ['JS'],
      liveLink: 'https://github.com/codewithneeraj/graphql-game-reviews-api',
      githubLink: 'https://github.com/codewithneeraj/graphql-game-reviews-api',
      imgSrc: 'https://graphql.com/graphql-dot-com.jpg',
    },
    {
      name: 'Random Joke Generator',
      description: 'This Webapp fetches a random joke from "https://icanhazdadjoke.com/" when a button is clicked, and displays it on a webpage. It includes error handling to manage potential issues during the API request.',
      techStack: ['HTML', 'CSS', 'JS'],
      liveLink: 'https://random-jokes-generator-peach.vercel.app/',
      githubLink: 'https://github.com/codewithneeraj/Random-Jokes-Generator/tree/master',
      imgSrc: 'https://i.ibb.co/Vw2Wsbv/Screenshot-2024-02-10-at-11-59-27-PM.png',
    },
    {
      name: 'Chritsmas Landing Page',
      description: 'Christmas-themed website featuring dark/light mode, smooth scrolling, and a mobile-first design for compatibility across devices.',
      techStack: ['HTML', 'CSS', 'JS'],
      liveLink: 'https://christmas-responsive-website.vercel.app/',
      githubLink: 'https://github.com/codewithneeraj/Christmas-Responsive-Website',
      imgSrc: 'https://i.ibb.co/z7pp5Hc/Screenshot-2024-02-10-at-11-55-21-PM.png',
    },
  ];

  return (
    <>
      <section id="projects">
        <div className="project_wrapper">
          {projects.map((project, index) => (
            <Project key={index} {...project} />
          ))}
        </div>
      </section>
    </>
  );
};

export default AllProjects;
