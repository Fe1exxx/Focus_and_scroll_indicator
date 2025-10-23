import { useEffect, useState } from "react";

export default function ProgressBar() {
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight;
      const winHeight = window.innerHeight;

      if (docHeight <= winHeight) {
        setScrollPercent(100);
        return;
      }

      const totalScrollable = docHeight - winHeight;
      const percent = Math.min(
        100,
        Math.max(0, (scrollTop / totalScrollable) * 100)
      );
      setScrollPercent(percent);
    };

    // Запускаем сразу
    handleScroll();

    // Используем passive: true для максимальной производительности
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Не показываем, если 0
  if (scrollPercent === 0) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        height: "3px",
        width: `${scrollPercent}%`,
        backgroundColor: "#007bff",
        zIndex: 1000,
      }}
    />
  );
}
