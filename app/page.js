"use client";

import { useRef } from "react";
import html2canvas from "html2canvas";

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
          fonts: { family: "Arial, sans-serif" },
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
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <button
          onClick={downloadPoster}
          className="mb-6 px-6 py-3 bg-[#6366f1] text-white rounded-xl font-semibold shadow-lg hover:bg-[#4f46e5] transition-all duration-200 flex items-center gap-2 mx-auto"
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
          className="bg-white rounded-3xl shadow-2xl overflow-hidden"
          style={{ background: "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)" }}
        >
          <div className="relative">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#6366f1]/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#8b5cf6]/5 rounded-full blur-3xl"></div>
            
            <div className="relative p-12">
              <div className="text-center mb-8">
                <div className="inline-block px-4 py-1.5 bg-[#6366f1]/10 rounded-full text-[#6366f1] font-semibold text-sm mb-4">
                  🎓 For College Students
                </div>
                
                <h1 className="text-5xl font-bold text-[#0f172a] mb-4 leading-tight">
                  30 Projects
                  <span className="block text-[#6366f1]">Portfolio Program</span>
                </h1>
                
                <p className="text-lg text-[#64748b] max-w-2xl mx-auto">
                  Choose YOUR domain, YOUR language, YOUR project mix. 
                  30 personalized projects built your way
                </p>
              </div>

              <div className="bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] rounded-2xl p-8 mb-8 text-white text-center">
                <div className="text-5xl font-bold mb-2">₹10,000</div>
                <div className="text-white/80">Complete 30-Project Custom Portfolio</div>
              </div>

              <div className="grid grid-cols-4 md:grid-cols-4 gap-3 mb-8">
                {domains.map((domain) => (
                  <div
                    key={domain.name}
                    className="bg-white rounded-xl p-3 text-center border-2 border-[#e2e8f0] hover:border-[#6366f1] transition-all"
                  >
                    <div className="text-2xl mb-1">{domain.icon}</div>
                    <div className="font-semibold text-[#0f172a] text-sm">{domain.name}</div>
                  </div>
                ))}
              </div>

              <div className="bg-[#f8fafc] rounded-2xl p-6 mb-8 border border-[#e2e8f0]">
                <div className="text-center mb-4">
                  <h3 className="font-bold text-[#0f172a] text-lg">Choose Your Technology Stack</h3>
                  <p className="text-sm text-[#64748b]">Select any language or framework</p>
                </div>
                <div className="flex flex-wrap justify-center gap-2">
                  {languages.map((lang) => (
                    <span
                      key={lang}
                      className="px-4 py-2 bg-white rounded-full text-sm font-medium text-[#64748b] border border-[#e2e8f0] hover:border-[#6366f1] hover:text-[#6366f1] transition-colors cursor-pointer"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 mb-8 border border-[#e2e8f0]">
                <div className="text-center mb-4">
                  <h3 className="font-bold text-[#0f172a] text-lg">Customize Your Project Mix</h3>
                  <p className="text-sm text-[#64748b]">Decide percentage allocation for each domain</p>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="w-24 text-sm font-medium text-[#64748b]">Full Stack</span>
                    <div className="flex-1 h-3 bg-[#e2e8f0] rounded-full overflow-hidden">
                      <div className="h-full bg-[#6366f1] rounded-full" style={{ width: "40%" }}></div>
                    </div>
                    <span className="w-12 text-sm font-bold text-[#6366f1]">40%</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-24 text-sm font-medium text-[#64748b]">DevOps</span>
                    <div className="flex-1 h-3 bg-[#e2e8f0] rounded-full overflow-hidden">
                      <div className="h-full bg-[#f59e0b] rounded-full" style={{ width: "30%" }}></div>
                    </div>
                    <span className="w-12 text-sm font-bold text-[#f59e0b]">30%</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-24 text-sm font-medium text-[#64748b]">AI/ML</span>
                    <div className="flex-1 h-3 bg-[#e2e8f0] rounded-full overflow-hidden">
                      <div className="h-full bg-[#ef4444] rounded-full" style={{ width: "30%" }}></div>
                    </div>
                    <span className="w-12 text-sm font-bold text-[#ef4444]">30%</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-8">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 text-[#0f172a]"
                  >
                    <div className="w-2 h-2 rounded-full bg-[#6366f1]"></div>
                    <span className="font-medium text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-[#e2e8f0] flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-[#64748b]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                  <span className="font-medium">100% Customizable</span>
                </div>
                <div className="flex items-center gap-2 text-[#64748b]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                    <polyline points="14 2 14 8 20 8"/>
                    <line x1="16" y1="13" x2="8" y2="13"/>
                    <line x1="16" y1="17" x2="8" y2="17"/>
                  </svg>
                  <span className="font-medium">Interview Prep Included</span>
                </div>
                <div className="flex items-center gap-2 text-[#64748b]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                    <line x1="8" y1="21" x2="16" y2="21"/>
                    <line x1="12" y1="17" x2="12" y2="21"/>
                  </svg>
                  <span className="font-medium">GitHub Profile Setup</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
