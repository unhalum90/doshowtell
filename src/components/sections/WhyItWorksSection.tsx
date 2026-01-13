"use client";

const benefits = [
  {
    title: "Authentic Understanding",
    description:
      "Students can't fake both a thoughtful artifact AND an articulate explanation. If they did the thinking, you'll hear it.",
    icon: "🎯",
  },
  {
    title: "Student Ownership",
    description:
      "They did the thinking, not AI. Handwritten work paired with their own voice creates undeniable evidence of learning.",
    icon: "✋",
  },
  {
    title: "Teacher Efficiency",
    description:
      "Review 30 student defenses in 30 minutes at 1.5x speed, instead of spending hours decoding written responses.",
    icon: "⏱️",
  },
  {
    title: "Formative Feedback",
    description:
      "See who's getting it, who's stuck, and what to reteach tomorrow. Act on insights, not just grades.",
    icon: "📊",
  },
];

export function WhyItWorksSection() {
  return (
    <section className="section">
      <div className="section-container">
        <header className="section-header">
          <h2 className="section-title">Why This Works</h2>
          <p className="section-subtitle">
            A pedagogy-first approach that gives you real insight into student
            thinking
          </p>
        </header>

        <div className="benefits-grid">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="benefit-item">
              <div className="benefit-icon-wrapper">{benefit.icon}</div>
              <div className="benefit-content">
                <h3 className="benefit-title">{benefit.title}</h3>
                <p className="benefit-description">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
