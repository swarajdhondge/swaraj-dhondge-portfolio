
import React from 'react';
import { FaAws, FaGoogle, FaDocker, FaJenkins, FaPython, FaLinux, FaGitAlt, FaNodeJs } from 'react-icons/fa';
import { SiTerraform, SiKubernetes, SiGrafana, SiPrometheus, SiGithubactions, SiGnubash, SiGitlab } from 'react-icons/si';

const skills = [
  { icon: <FaAws size={40} />, name: "AWS" },
  { icon: <FaGoogle size={40} />, name: "GCP" },
  { icon: <SiTerraform size={40} />, name: "Terraform" },
  { icon: <FaDocker size={40} />, name: "Docker" },
  { icon: <SiKubernetes size={40} />, name: "Kubernetes" },
  { icon: <FaJenkins size={40} />, name: "Jenkins" },
  { icon: <SiGithubactions size={40} />, name: "GitHub Actions" },
  { icon: <SiGitlab size={40} />, name: "GitLab CI" },
  { icon: <FaGitAlt size={40} />, name: "Git" },
  { icon: <SiPrometheus size={40} />, name: "Prometheus" },
  { icon: <SiGrafana size={40} />, name: "Grafana" },
  { icon: <SiGnubash size={40} />, name: "Bash" },
  { icon: <FaPython size={40} />, name: "Python" },
  { icon: <FaLinux size={40} />, name: "Linux" },
  { icon: <FaNodeJs size={40} />, name: "Node.js" },
];

export default function Skills() {
  return (
    <section className="p-6 bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      <h2 className="text-3xl font-bold text-center mb-8">DevOps Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 justify-items-center">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-4 bg-gray-800 rounded-lg shadow hover:shadow-lg transition transform hover:scale-105"
          >
            {skill.icon}
            <p className="mt-2 text-sm font-semibold">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
