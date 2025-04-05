
import React, { useState } from 'react';

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
    <section className="p-6 bg-black text-white">
      <h2 className="text-3xl font-bold text-center mb-6">DevOps Experience</h2>
      <div className="max-w-3xl mx-auto space-y-4">
        {experience.map((item, idx) => (
          <div key={idx} className="border border-gray-700 rounded-lg">
            <button
              className="w-full text-left px-4 py-3 bg-gray-800 hover:bg-gray-700 transition font-semibold"
              onClick={() => setActive(active === idx ? null : idx)}
            >
              {item.title}
            </button>
            {active === idx && (
              <ul className="px-6 py-4 list-disc text-sm text-gray-300 space-y-1">
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
