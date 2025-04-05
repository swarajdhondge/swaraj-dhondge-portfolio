import React, { useState } from 'react';
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
      <h2 className="text-3xl font-bold text-center mb-8">DevOps Experience</h2>
      <div className="max-w-4xl mx-auto space-y-4">
        {experience.map((item, idx) => (
          <div
            key={idx}
            className="rounded-xl border border-gray-700 bg-gray-800/80 backdrop-blur-md overflow-hidden shadow-lg hover:shadow-xl transition"
          >
            <button
              className="w-full flex items-center justify-between px-6 py-4 font-semibold text-left text-white hover:bg-gray-700/80 transition"
              onClick={() => setActive(active === idx ? null : idx)}
            >
              <span>{item.title}</span>
              {active === idx ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
            {active === idx && (
              <ul className="px-6 pb-6 list-disc text-sm text-gray-300 space-y-2">
                {item.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
