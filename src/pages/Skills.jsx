import React from 'react';

const skills = [
  { icon: 'https://raw.githubusercontent.com/devicons/devicon/v2.16.0/icons/amazonwebservices/amazonwebservices-original-wordmark.svg', name: 'AWS' },
  { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg', name: 'Azure' },
  { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg', name: 'GCP' },
  { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg', name: 'Terraform' },
  { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', name: 'Docker' },
  { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg', name: 'Kubernetes' },
  { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', name: 'GitHub' },
  { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bitbucket/bitbucket-original.svg', name: 'Bitbucket'},
  { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/githubactions/githubactions-original.svg', name: 'GitHub Actions'},
  { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg', name: 'Jenkins' },
  { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prometheus/prometheus-original.svg', name: 'Prometheus' },
  { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg', name: 'Grafana' },
  { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg', name: 'Bash' },
  { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', name: 'Python' },
  { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg', name: 'Linux' },
];

export default function Skills() {
  return (
    <section className="p-6 bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      <h2 className="text-3xl font-bold text-center mb-8">DevOps Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 justify-items-center">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center w-28 h-28 justify-center p-4 bg-gray-800 rounded-lg shadow hover:shadow-lg transition transform hover:scale-105"
          >
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow">
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-8 h-8 object-contain"
                loading="lazy"
              />
            </div>
            <p className="mt-2 text-xs text-center">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
