import { useEffect, useRef } from "react";
import "./styles.css";

export default function App() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const obs = new MutationObserver((entries) => {
      entries.forEach((e) => {
        console.log("change", e);
      });
    });

    obs.observe(ref.current, {
      attributes: true,
      childList: true,
      subtree: true
    });

    return () => {
      obs.disconnect();
    };
  }, []);

  return (
    <div ref={ref} className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
