export default function Home() {
  return (
    <main style={{ maxWidth: 800, margin: "40px auto", fontFamily: "system-ui" }}>
      <h1>Tyler — Applied Mathematics</h1>
      <p>PDEs • Scientific Computing • Data & Inference</p>

      <h2>About</h2>
      <p>
        I am an applied mathematics MS student interested in partial differential
        equations, numerical methods, and computational modeling of physical systems.
      </p>

      <h2>Projects</h2>
      <ul>
        <li>Advection–Diffusion Equation Solver</li>
        <li>Inverse Heat Equation Problem</li>
      </ul>

      <h2>Skills</h2>
      <ul>
        <li>Numerical PDEs</li>
        <li>Scientific Python</li>
        <li>Sparse Linear Algebra</li>
      </ul>
    </main>
  );
}
