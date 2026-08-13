const About: React.FC = () => {
  return (
    <section aria-labelledby="abouts-heading">
      <div>
        <h2 className="text-xl font-bold mb-5">About Me.</h2>
        <p className="text-neutral-300 text-sm leading-8">
          <strong>Frontend developer</strong> building
          responsive, production-grade interfaces with React, Next.js, and
          TypeScript. Translates high-fidelity designs into scalable frontend
          architecture, layers interactive UI over live data and backend APIs,
          and ships accessible, performant experiences across SaaS platforms —
          from early-stage products to client-facing web applications.
        </p>
      </div>
    </section>
  );
};

export default About;
