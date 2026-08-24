"use client";

export default function ThemeToggle() {
  function toggle() {
    const root = document.documentElement;
    const next = root.getAttribute("data-bs-theme") === "dark" ? "light" : "dark";
    root.setAttribute("data-bs-theme", next);
    try {
      localStorage.setItem("mbh-theme", next);
    } catch {}
  }

  return (
    <button
      type="button"
      className="theme-toggle rounded-circle"
      onClick={toggle}
      aria-label="Toggle light or dark mode"
      title="Light / Dark mode"
    >
      <span aria-hidden="true" className="icon-sun">
        ☀️
      </span>
      <span aria-hidden="true" className="icon-moon">
        🌙
      </span>
    </button>
  );
}
