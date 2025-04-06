import React, { useState } from 'react';
import SectionTitle from '../components/SectionTitle'; 
import { ChevronDown, ChevronUp } from 'lucide-react';

const experience = [
  {
    title: "Cloud Infrastructure & Security",
    points: [
      "Designed 3-tier AWS architecture with EC2, RDS, and Load Balancers",
      "Configured VPCs, security groups, IAM, and CloudTrail for security",
      "Reduced security incidents by 20% through AWS best practices"
    ]
  },
  {
    title: "CI/CD & Automation",
    points: [
      "Built CI/CD pipelines using Jenkins, GitLab, and GitHub Actions",
      "Reduced deployment time by 40% and build time by 30%",
      "Scripted automation with Bash & Python for over 200 workflows"
    ]
  },
  {
    title: "Kubernetes & Monitoring",
    points: [
      "Managed EKS & GKE clusters for scalable deployments",
      "Deployed monitoring with Prometheus, Grafana, ELK",
      "Proactively managed container health and performance"
    ]
  }
];

export default function DevOpsExperience() {
  const [active, setActive] = useState(null);

  return (
    <section className="p-6 bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      <SectionTitle
        title="DevOps Experience"
        subtitle="Roles, environments, and engineering challenges I've tackled"
      />
      <div className="max-w-4xl mx-auto space-y-6">
        {experience.map((item, idx) => (
          <div
            key={idx}
            className="rounded-2xl border border-gray-700 bg-gray-800/90 shadow-lg transition-all"
          >
            <button
              onClick={() => setActive(active === idx ? null : idx)}
              className="w-full flex items-center justify-between px-6 py-4 font-medium text-left text-blue-200 hover:bg-gray-700/40 transition"
            >
              <span>{item.title}</span>
              {active === idx ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
            {active === idx && (
              <div className="px-6 pb-6 space-y-3 text-sm text-gray-300">
                {item.points.map((pt, i) => (
                  <div key={i} className="flex gap-2 items-start">
                    <span className="text-blue-400 mt-0.5">•</span>
                    <p>{pt}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
