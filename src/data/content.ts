import { Project, Experience, Education, Skill } from '../types';

export const projects: Project[] = [
  {
    title: "Cloud Infrastructure Automation",
    description: "Implemented infrastructure as code using Terraform to manage multi-cloud environments",
    technologies: ["Terraform", "AWS", "Azure", "GitHub Actions"],
    link: "https://github.com/yourusername/cloud-infra"
  },
  {
    title: "Kubernetes Cluster Management",
    description: "Designed and implemented scalable Kubernetes clusters with automated deployment pipelines",
    technologies: ["Kubernetes", "Docker", "Helm", "ArgoCD"],
    link: "https://github.com/yourusername/k8s-management"
  }
];

export const experiences: Experience[] = [
  {
    title: "Senior DevOps Engineer",
    company: "Tech Solutions Inc.",
    period: "2021 - Present",
    description: [
      "Led the implementation of CI/CD pipelines reducing deployment time by 70%",
      "Managed multi-cloud infrastructure serving 1M+ users",
      "Implemented infrastructure as code using Terraform and Ansible"
    ]
  },
  {
    title: "Cloud Engineer",
    company: "Cloud Systems Ltd",
    period: "2019 - 2021",
    description: [
      "Designed and maintained AWS infrastructure",
      "Implemented monitoring and alerting systems",
      "Reduced cloud costs by 40% through optimization"
    ]
  }
];

export const education: Education[] = [
  {
    degree: "Master's in Computer Science",
    institution: "Tech University",
    period: "2017 - 2019",
    description: "Specialized in Cloud Computing and Distributed Systems"
  },
  {
    degree: "Bachelor's in Computer Engineering",
    institution: "Engineering College",
    period: "2013 - 2017",
    description: "Focus on Software Engineering and System Design"
  }
];

export const skills: Skill[] = [
  {
    category: "Cloud Platforms",
    items: ["AWS", "Azure", "GCP", "OpenStack"]
  },
  {
    category: "DevOps Tools",
    items: ["Docker", "Kubernetes", "Jenkins", "GitLab CI", "ArgoCD"]
  },
  {
    category: "Infrastructure as Code",
    items: ["Terraform", "Ansible", "CloudFormation", "Pulumi"]
  },
  {
    category: "Monitoring & Logging",
    items: ["Prometheus", "Grafana", "ELK Stack", "Datadog"]
  }
];