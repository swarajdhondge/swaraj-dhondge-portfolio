import React from 'react';
import SectionTitle from '../components/SectionTitle';
import { Wrench, Cpu, Zap } from 'lucide-react';

const projects = [
  {
    title: "CI/CD Deployment & Monitoring Optimization",
    icon: <Zap className="w-6 h-6 text-blue-400" />,
    points: [
      "Kubernetes-based CI/CD with Jenkins & Nexus",
      "Real-time monitoring using ELK & Prometheus",
      "Boosted deployment speed and reliability"
    ]
  },
  {
    title: "Hybrid AI-Based Web App Deployment",
    icon: <Cpu className="w-6 h-6 text-green-400" />,
    points: [
      "Deployed across EKS + GCP VMs",
      "Dockerfile & Cloud Build optimization",
      "Cut deployment time by 80%"
    ]
  },
  {
    title: "Legacy Job Automation",
    icon: <Wrench className="w-6 h-6 text-yellow-400" />,
    points: [
      "150+ Bash/SQL jobs automated via Maestro",
      "Reduced manual ops by 50%",
      "Improved alerting & monitoring by 40%"
    ]
  }
];

const DevOpsProjects = React.memo(function DevOpsProjects() {
  return (
    <section className="p-6 bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      <SectionTitle
        title="DevOps Projects"
        subtitle="Infrastructure, automation, and cloud solutions I’ve engineered"
      />
      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((proj, i) => (
          <div
            key={i}
            className="bg-gray-800/80 p-6 rounded-2xl shadow-xl border border-gray-700 transition-all hover:shadow-blue-600/20"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-700">
                {proj.icon}
              </div>
              <h3 className="text-lg font-semibold text-blue-300">{proj.title}</h3>
            </div>
            <div className="space-y-3 text-sm text-gray-300">
              {proj.points.map((pt, j) => (
                <div key={j} className="flex items-start gap-2">
                  <span className="text-blue-400 mt-0.5">•</span>
                  <p>{pt}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
});

export default DevOpsProjects;