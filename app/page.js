"use client";

import { useRef } from "react";
import html2canvas from "html2canvas-pro";

export default function Home() {
  const posterRef = useRef(null);

  const downloadPoster = async () => {
    if (posterRef.current) {
      try {
        const canvas = await html2canvas(posterRef.current, {
          scale: 2,
          backgroundColor: "#ffffff",
          useCORS: true,
          logging: false,
          windowWidth: 1200,
          windowHeight: 1600,
          foreignObjectRendering: false,
        });
        const link = document.createElement("a");
        link.download = "30-Projects-Program-Poster.png";
        link.href = canvas.toDataURL("image/png");
        link.click();
      } catch (err) {
        console.error("Download error:", err);
        alert("Error downloading poster. Please try again.");
      }
    }
  };

  const domains = [
    { name: "Full Stack", icon: "💻", color: "#6366f1" },
    { name: "Frontend", icon: "🎨", color: "#ec4899" },
    { name: "Backend", icon: "⚙️", color: "#22c55e" },
    { name: "DevOps", icon: "☁️", color: "#f59e0b" },
    { name: "AI/ML", icon: "🤖", color: "#ef4444" },
    { name: "Data Science", icon: "🔬", color: "#8b5cf6" },
    { name: "Mobile App", icon: "📱", color: "#06b6d4" },
    { name: "Cybersecurity", icon: "🔒", color: "#14b8a6" },
  ];

  const languages = [
    "JavaScript", "TypeScript", "Python", "Java", "Go", "Rust", "C++", "Ruby"
  ];

  const features = [
    "30 Real-World Projects",
    "Your Chosen Domain(s)",
    "Beginner to Advanced",
    "Interview Ready",
    "GitHub Portfolio",
    "Unique for Each Student",
  ];

  return (
    <div style={{ minHeight: "100vh", background: "linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%)", padding: "32px 16px" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <button
          onClick={downloadPoster}
          style={{
            marginBottom: "24px",
            padding: "12px 24px",
            backgroundColor: "#6366f1",
            color: "white",
            borderRadius: "12px",
            fontWeight: 600,
            boxShadow: "0 10px 15px -3px rgba(99, 102, 241, 0.3)",
            cursor: "pointer",
            border: "none",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
            <polyline points="7 10 12 15 17 10"/>
            <line x1="12" y1="15" x2="12" y2="3"/>
          </svg>
          Download Poster as PNG
        </button>

        <div
          ref={posterRef}
          style={{
            background: "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)",
            borderRadius: "24px",
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
            overflow: "hidden",
            position: "relative",
          }}
        >
          <div style={{ position: "relative", padding: "48px" }}>
            <div style={{ position: "absolute", top: 0, right: 0, width: "400px", height: "400px", background: "rgba(99, 102, 241, 0.08)", borderRadius: "50%", filter: "blur(60px)" }}></div>
            <div style={{ position: "absolute", bottom: 0, left: 0, width: "300px", height: "300px", background: "rgba(139, 92, 246, 0.08)", borderRadius: "50%", filter: "blur(60px)" }}></div>
            
            <div style={{ position: "relative" }}>
              <div style={{ textAlign: "center", marginBottom: "32px" }}>
                <div style={{ display: "inline-block", padding: "6px 16px", background: "rgba(99, 102, 241, 0.1)", borderRadius: "9999px", color: "#6366f1", fontWeight: 600, fontSize: "14px", marginBottom: "16px" }}>
                  🎓 For College Students
                </div>
                
                <h1 style={{ fontSize: "48px", fontWeight: 700, color: "#0f172a", marginBottom: "16px", lineHeight: 1.2 }}>
                  30 Projects
                  <span style={{ display: "block", color: "#6366f1" }}>Portfolio Program</span>
                </h1>
                
                <p style={{ fontSize: "18px", color: "#64748b", maxWidth: "500px", margin: "0 auto" }}>
                  Choose YOUR domain, YOUR language, YOUR project mix. 
                  30 personalized projects built your way
                </p>
              </div>

              <div style={{ background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)", borderRadius: "16px", padding: "32px", marginBottom: "32px", textAlign: "center", color: "white" }}>
                <div style={{ fontSize: "48px", fontWeight: 700, marginBottom: "8px" }}>₹10,000</div>
                <div style={{ opacity: 0.8 }}>Complete 30-Project Custom Portfolio</div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "12px", marginBottom: "32px" }}>
                {domains.map((domain) => (
                  <div
                    key={domain.name}
                    style={{ background: "white", borderRadius: "12px", padding: "12px", textAlign: "center", border: "2px solid #e2e8f0" }}
                  >
                    <div style={{ fontSize: "24px", marginBottom: "4px" }}>{domain.icon}</div>
                    <div style={{ fontWeight: 600, color: "#0f172a", fontSize: "13px" }}>{domain.name}</div>
                  </div>
                ))}
              </div>

              <div style={{ background: "#f8fafc", borderRadius: "16px", padding: "24px", marginBottom: "32px", border: "1px solid #e2e8f0" }}>
                <div style={{ textAlign: "center", marginBottom: "16px" }}>
                  <h3 style={{ fontWeight: 700, color: "#0f172a", fontSize: "18px" }}>Choose Your Technology Stack</h3>
                  <p style={{ fontSize: "14px", color: "#64748b" }}>Select any language or framework</p>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "8px" }}>
                  {languages.map((lang) => (
                    <span
                      key={lang}
                      style={{ padding: "8px 16px", background: "white", borderRadius: "9999px", fontSize: "14px", fontWeight: 500, color: "#64748b", border: "1px solid #e2e8f0" }}
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>

              <div style={{ background: "white", borderRadius: "16px", padding: "24px", marginBottom: "32px", border: "1px solid #e2e8f0" }}>
                <div style={{ textAlign: "center", marginBottom: "16px" }}>
                  <h3 style={{ fontWeight: 700, color: "#0f172a", fontSize: "18px" }}>Customize Your Project Mix</h3>
                  <p style={{ fontSize: "14px", color: "#64748b" }}>Decide percentage allocation for each domain</p>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <span style={{ width: "80px", fontSize: "14px", fontWeight: 500, color: "#64748b" }}>Full Stack</span>
                    <div style={{ flex: 1, height: "12px", background: "#e2e8f0", borderRadius: "9999px", overflow: "hidden" }}>
                      <div style={{ height: "100%", background: "#6366f1", borderRadius: "9999px", width: "40%" }}></div>
                    </div>
                    <span style={{ width: "48px", fontSize: "14px", fontWeight: 700, color: "#6366f1" }}>40%</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <span style={{ width: "80px", fontSize: "14px", fontWeight: 500, color: "#64748b" }}>DevOps</span>
                    <div style={{ flex: 1, height: "12px", background: "#e2e8f0", borderRadius: "9999px", overflow: "hidden" }}>
                      <div style={{ height: "100%", background: "#f59e0b", borderRadius: "9999px", width: "30%" }}></div>
                    </div>
                    <span style={{ width: "48px", fontSize: "14px", fontWeight: 700, color: "#f59e0b" }}>30%</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <span style={{ width: "80px", fontSize: "14px", fontWeight: 500, color: "#64748b" }}>AI/ML</span>
                    <div style={{ flex: 1, height: "12px", background: "#e2e8f0", borderRadius: "9999px", overflow: "hidden" }}>
                      <div style={{ height: "100%", background: "#ef4444", borderRadius: "9999px", width: "30%" }}></div>
                    </div>
                    <span style={{ width: "48px", fontSize: "14px", fontWeight: 700, color: "#ef4444" }}>30%</span>
                  </div>
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px", marginBottom: "32px" }}>
                {features.map((feature, index) => (
                  <div
                    key={index}
                    style={{ display: "flex", alignItems: "center", gap: "8px", color: "#0f172a" }}
                  >
                    <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#6366f1" }}></div>
                    <span style={{ fontWeight: 500, fontSize: "14px" }}>{feature}</span>
                  </div>
                ))}
              </div>

              <div style={{ paddingTop: "24px", borderTop: "1px solid #e2e8f0", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "16px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "#64748b" }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                  <span style={{ fontWeight: 500 }}>100% Customizable</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "#64748b" }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                    <polyline points="14 2 14 8 20 8"/>
                    <line x1="16" y1="13" x2="8" y2="13"/>
                    <line x1="16" y1="17" x2="8" y2="17"/>
                  </svg>
                  <span style={{ fontWeight: 500 }}>Interview Prep Included</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "#64748b" }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                    <line x1="8" y1="21" x2="16" y2="21"/>
                    <line x1="12" y1="17" x2="12" y2="21"/>
                  </svg>
                  <span style={{ fontWeight: 500 }}>GitHub Profile Setup</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
