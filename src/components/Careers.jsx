import "./Careers.css";

const benefits = [
  {
    icon: "🚀",
    title: "Innovation First",
    description:
      "Work with modern technologies and solve challenging real-world problems.",
  },
  {
    icon: "📚",
    title: "Keep Learning",
    description:
      "Explore new skills, technologies and ideas while growing continuously.",
  },
  {
    icon: "🤝",
    title: "Team Work",
    description:
      "Collaborate with talented people and build meaningful digital products.",
  },
  {
    icon: "🌱",
    title: "Grow With Us",
    description:
      "Take ownership, improve your skills and build a strong career path.",
  },
];

const openings = [
  {
    icon: "💻",
    title: "Frontend Developer",
    location: "Indore, India",
    type: "Full Time",
    experience: "1–2 Years",
    description:
      "Build responsive and modern web experiences using React and modern frontend technologies.",
    subject: "Application for Frontend Developer",
  },
  {
    icon: "⚙️",
    title: "Backend Developer",
    location: "Indore, India",
    type: "Full Time",
    experience: "1–2 Years",
    description:
      "Develop scalable APIs, backend services and database-driven applications.",
    subject: "Application for Backend Developer",
  },
  {
    icon: "🎨",
    title: "UI/UX Designer",
    location: "Indore, India",
    type: "Full Time",
    experience: "0–2 Years",
    description:
      "Design intuitive digital experiences, interfaces and user journeys.",
    subject: "Application for UI/UX Designer",
  },
  {
    icon: "📈",
    title: "Business Development Executive",
    location: "Indore, India",
    type: "Full Time",
    experience: "1–3 Years",
    description:
      "Build client relationships, identify opportunities and help grow our business.",
    subject: "Application for Business Development Executive",
  },
];

const Career = () => {
  const applyForJob = (subject) => {
    const email = "careers@proagnexa.com";

    window.location.assign(`mailto:${email}?subject=${encodeURIComponent(subject)}`);
  };

  return (
    <main className="career-page">

      {/* ================= HERO ================= */}
      <section className="career-hero">
        <div className="career-hero-bg career-bg-one"></div>
        <div className="career-hero-bg career-bg-two"></div>

        <div className="career-hero-content">
          <span className="career-badge">
            ⚡ JOIN OUR TEAM
          </span>

          <p className="career-brand">
            PROAGNEXA <span>TECHNOLOGY</span>
          </p>

          <h1>
            Build Your Career.
            <br />
            <span>Shape the Future.</span>
          </h1>

          <p className="career-hero-text">
            Join a team of passionate innovators, developers and creators
            building technology solutions that make a real difference.
          </p>

          <div className="career-hero-buttons">
            <a href="#openings" className="career-primary-btn">
              Explore Opportunities
              <span>→</span>
            </a>

            <a href="#culture" className="career-secondary-btn">
              Why Join Us?
            </a>
          </div>
        </div>

        {/* Floating visual */}
        <div className="career-visual">
          <div className="career-orbit orbit-1"></div>
          <div className="career-orbit orbit-2"></div>

          <div className="career-glass-card">
            <div className="career-glass-icon">⚡</div>

            <span>PROAGNEXA</span>
            <strong>TECHNOLOGY</strong>

            <div className="career-mini-line"></div>

            <small>
              Build. Learn. Grow.
            </small>
          </div>

          <div className="floating-card floating-top">
            🚀 <span>Innovation</span>
          </div>

          <div className="floating-card floating-bottom">
            💡 <span>Ideas → Impact</span>
          </div>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="career-stats">
        <div className="career-stat">
          <strong>50+</strong>
          <span>Happy Clients</span>
        </div>

        <div className="career-stat">
          <strong>100+</strong>
          <span>Projects Delivered</span>
        </div>

        <div className="career-stat">
          <strong>20+</strong>
          <span>Team Members</span>
        </div>

        <div className="career-stat">
          <strong>5+</strong>
          <span>Years Experience</span>
        </div>
      </section>

      {/* ================= CULTURE ================= */}
      <section className="career-culture" id="culture">
        <div className="career-section-heading">
          <span>WHY PROAGNEXA</span>

          <h2>
            More Than Just a Job.
            <br />
            <strong>It's a Journey.</strong>
          </h2>

          <p>
            We believe great products are built by great people. That's why
            we create an environment where everyone can learn, contribute
            and grow.
          </p>
        </div>

        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <article className="benefit-card" key={benefit.title}>
              <div className="benefit-top">
                <span className="benefit-number">
                  0{index + 1}
                </span>

                <div className="benefit-icon">
                  {benefit.icon}
                </div>
              </div>

              <h3>{benefit.title}</h3>

              <p>{benefit.description}</p>

              <div className="benefit-arrow">
                →
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ================= OPEN POSITIONS ================= */}
      <section className="career-openings" id="openings">
        <div className="career-section-heading openings-heading">
          <span>OPEN POSITIONS</span>

          <h2>
            Find Your Next
            <br />
            <strong>Opportunity.</strong>
          </h2>

          <p>
            Explore our current openings and find a role where you can
            contribute, learn and make an impact.
          </p>
        </div>

        <div className="jobs-grid">
          {openings.map((job) => (
            <article className="job-card" key={job.title}>
              <div className="job-card-header">
                <div className="job-icon">
                  {job.icon}
                </div>

                <span className="job-type">
                  {job.type}
                </span>
              </div>

              <h3>{job.title}</h3>

              <div className="job-details">
                <span>📍 {job.location}</span>
                <span>💼 {job.type}</span>
                <span>⭐ {job.experience}</span>
              </div>

              <p>{job.description}</p>

              <button
                type="button"
                className="apply-btn"
                onClick={() => applyForJob(job.subject)}
              >
                Apply Now
                <span>→</span>
              </button>
            </article>
          ))}
        </div>
      </section>

      {/* ================= RESUME CTA ================= */}
      <section className="career-resume">
        <div className="resume-content">
          <span>DON'T SEE YOUR ROLE?</span>

          <h2>
            We Are Always Looking For
            <br />
            <strong>Great Talent.</strong>
          </h2>

          <p>
            Send us your resume and tell us how you can contribute to
            Proagnexa Technology. We would love to hear from you.
          </p>

          <a
            href="mailto:careers@proagnexa.com?subject=General%20Job%20Application"
            className="resume-btn"
          >
            Send Your Resume
            <span>→</span>
          </a>
        </div>

        <div className="resume-decoration">
          <div>+</div>
          <div>+</div>
          <div>+</div>
        </div>
      </section>

    </main>
  );
};

export default Career;