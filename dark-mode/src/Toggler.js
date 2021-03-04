export default function Toggler({ isDark, setDarkMode }) {
  return (
    <button onClick={() => setDarkMode((prev) => !prev)}>
      {isDark ? "Light Mode" : "Dark Mode"}
    </button>
  );
}
