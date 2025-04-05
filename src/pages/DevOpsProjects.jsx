import React from 'react';

const projects = [
  {
    title: "CI/CD Deployment & Monitoring Optimization",
    points: [
      "Refined Kubernetes-based CI/CD pipeline with Jenkins & Nexus",
      "Implemented ELK and Prometheus for better monitoring",
      "Achieved 98% deployment success rate with 20% speed boost"
    ]
  },
  {
    title: "Hybrid AI-Based Web App Deployment",
    points: [
      "Deployed AI-based app in hybrid EKS + GCP VMs",
      "Optimized Dockerfiles, Cloud Build YAML",
      "Reduced deployment time by 80% with automation"
    ]
  },
  {
    title: "Legacy Job Automation",
    points: [
      "Automated 150+ Bash/SQL jobs with Tivoli Maestro",
      "Cut manual work by 50%, improved monitoring by 40%"
    ]
  }
];

export default function DevOpsProjects() {
  return (
    <section className="p-6 bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      <h2 className="text-3xl font-bold text-center mb-8">DevOps Projects</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((proj, i) => (
          <div
            key={i}
            className="bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-lg transition-all border border-gray-700"
          >
            <h3 className="text-lg font-semibold mb-3 text-blue-300">{proj.title}</h3>
            <ul className="list-disc pl-5 space-y-2 text-sm text-gray-300">
              {proj.points.map((pt, j) => (
                <li key={j}>{pt}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
