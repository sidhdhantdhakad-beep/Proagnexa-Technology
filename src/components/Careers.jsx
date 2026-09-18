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

const internships = [
  {
    icon: "⚛️",
    title: "React JS Developer",
    badge: "Intern",
    location: "Indore, India / Hybrid",
    type: "Internship",
    experience: "Fresher / Motivated Learner",
    description:
      "We are looking for passionate and motivated React JS Developer Interns eager to learn, build, and innovate. Work on exciting live projects, gain hands-on experience with expert mentorship, and grow your career in a dynamic IT environment.",
    subject: "Application for React JS Developer Intern",
  },
  {
    icon: "🐘",
    title: "PHP/Laravel Developer",
    badge: "Intern",
    location: "Indore, India / Hybrid",
    type: "Internship",
    experience: "Fresher / Motivated Learner",
    description:
      "We are seeking enthusiastic PHP & Laravel Developer Interns who are passionate about coding and problem-solving. Gain real-world experience, work on live projects with expert guidance, and accelerate your career in web development.",
    subject: "Application for PHP/Laravel Developer Intern",
  },
  {
    icon: "🎨",
    title: "UI/UX Designer",
    badge: "Intern",
    location: "Indore, India / Hybrid",
    type: "Internship",
    experience: "Fresher / Creative Mind",
    description:
      "We are looking for enthusiastic UI/UX Designer Interns who love crafting intuitive and engaging digital experiences. Gain hands-on exposure to modern design tools, collaborate with developers, and design interfaces that users love.",
    subject: "Application for UI/UX Designer Intern",
  },
];

const fullTimeOpenings = [
  {
    icon: "💻",
    title: "Frontend Developer",
    badge: "Full Time",
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
    badge: "Full Time",
    location: "Indore, India",
    type: "Full Time",
    experience: "1–2 Years",
    description:
      "Develop scalable APIs, backend services and database-driven applications.",
    subject: "Application for Backend Developer",
  },
];

const testimonials = [
  ['Michael Lee', 'We chose Proagnexa Technology for their industry-specific automation expertise. The solutions were tailor-made for our retail operations and helped us scale faster while reducing operational costs.'],
  ['Priya Mehta', 'What impressed us most is their dedicated support team and post-launch maintenance. They ensured smooth system performance and proactive updates, which made them a long-term technology partner for us.'],
  ['Amit Jain', 'Proagnexa Technology helped us automate our logistics workflows end-to-end. Their expertise in RPA and process automation reduced our manual workload by 40%, improving efficiency and accuracy across departments.'],
  ['Anuj Goyal', 'Their team delivered a secure and compliant solution for our financial platform. We were impressed with their commitment to data security and regulatory compliance, which gave us complete peace of mind.'],
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
          <small>Successfully work with</small>
          <strong>40</strong>
          <span>HAPPY CLIENTS</span>
        </div>

        <div className="career-stat">
          <small>Successfully completed</small>
          <strong>102</strong>
          <span>FINISHED PROJECTS</span>
        </div>

        <div className="career-stat">
          <small>Recruit more than</small>
          <strong>20</strong>
          <span>SKILLED EXPERTS</span>
        </div>

        <div className="career-stat">
          <small>Industries we have served</small>
          <strong>15</strong>
          <span>INDUSTRIES</span>
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

      {/* ================= OPEN POSITIONS / INTERNSHIPS ================= */}
      <section className="career-openings" id="openings">
        <div className="career-section-heading openings-heading">
          <span>EXCITING INTERNSHIP OPPORTUNITIES</span>

          <h2>
            Exciting Internship Opportunities to
            <br />
            <strong>Kickstart Your Career with Us!</strong>
          </h2>

          <p>
            Gain real-world experience, work on live projects with expert guidance, and accelerate your career in a dynamic IT environment.
          </p>
        </div>

        <div className="jobs-grid">
          {[...internships, ...fullTimeOpenings].map((job) => (
            <article className="job-card" key={job.title}>
              <div className="job-card-header">
                <div className="job-icon">
                  {job.icon}
                </div>

                <span className={`job-type ${job.badge === 'Intern' ? 'intern-badge' : ''}`}>
                  {job.badge || job.type}
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

      {/* ================= TESTIMONIALS ================= */}
      <section className="career-testimonials">
        <div className="career-section-heading">
          <span>WHAT OUR CLIENTS SAY</span>
          <h2>
            Why Businesses Trust
            <br />
            <strong>Proagnexa Technology.</strong>
          </h2>
        </div>

        <div className="career-testimonials-grid">
          {testimonials.map(([name, quote]) => (
            <article className="career-testimonial-card" key={name}>
              <div className="testimonial-stars" aria-label="5 stars">★★★★★</div>
              <p>&ldquo;{quote}&rdquo;</p>
              <strong>{name}</strong>
              <span>Verified Client Review</span>
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