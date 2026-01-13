"use client";

const steps = [
  {
    number: 1,
    title: "DO the Work",
    description:
      "Complete your thinking work however you learn best: handwritten notes, sketches, diagrams, or calculations.",
    details: "This is YOUR thinking time—messy is fine, mistakes are expected.",
    icon: "✏️",
  },
  {
    number: 2,
    title: "SHOW Your Work",
    description:
      "Take a photo of your physical work. Upload the photo. This is your receipt that you did the thinking.",
    details: "Bring the original to class for verification.",
    icon: "📸",
  },
  {
    number: 3,
    title: "TELL What You Learned",
    description:
      "Record 90 seconds explaining your thinking: What did you figure out? What was hard? What do you still wonder?",
    details: "Your voice reveals your real understanding.",
    icon: "🎤",
  },
];

export function ThreeStepsSection() {
  return (
    <section id="learn-more" className="section">
      <div className="section-container">
        <header className="section-header">
          <h2 className="section-title">How It Works</h2>
          <p className="section-subtitle">
            Three simple steps that reveal authentic student understanding
          </p>
        </header>

        <div className="steps-grid">
          {steps.map((step) => (
            <div key={step.number} className="step-card">
              <div className="step-header">
                <div className="step-icon">{step.icon}</div>
                <span className="step-number">{step.number}</span>
              </div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.description}</p>
              <p className="step-details">{step.details}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
