import { Project, Experience, Education, Skill } from '../types';
import { Cloud, Code2, Infinity, Container, Frame } from 'lucide-react';

export const projects: Project[] = [
  {
    title: 'Cloud Infrastructure Automation',
    description: 'Automated cloud infrastructure deployment using Terraform and AWS',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80',
    technologies: ['Terraform', 'AWS', 'Python'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com'
  },
  {
    title: 'Kubernetes Monitoring Solution',
    description: 'Comprehensive monitoring solution for Kubernetes clusters',
    image: 'https://images.unsplash.com/photo-1517433670267-08bbd4be890f?auto=format&fit=crop&q=80',
    technologies: ['Kubernetes', 'Prometheus', 'Grafana'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com'
  },
  {
    title: 'CI/CD Pipeline Automation',
    description: 'Automated CI/CD pipeline using GitHub Actions and AWS',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80',
    technologies: ['GitHub Actions', 'AWS', 'Docker'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com'
  },
  {
    title: 'Security Compliance Tool',
    description: 'Automated security compliance checking for cloud infrastructure',
    image: 'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&q=80',
    technologies: ['Python', 'AWS Security Hub', 'Terraform'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com'
  },
  {
    title: 'Multi-Cloud Cost Optimizer',
    description: 'Cost optimization tool for multi-cloud environments',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80',
    technologies: ['AWS', 'Azure', 'Python'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com'
  },
  {
    title: 'Container Security Scanner',
    description: 'Automated container image security scanning solution',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80',
    technologies: ['Docker', 'Python', 'Trivy'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com'
  }
];

export const experiences: Experience[] = [
  {
    title: "Senior Cloud DevOps Engineer",
    company: "AppDirect",
    period: "2021 - Present",
    description: [
      "Led the migration of Kubernetes and microservices architecture",
      "Infrastucture Standerdization and Automation along with Cost Optimization",
      "Implemented infrastructure as code using Terraform and Ansible"
    ]
  },
  {
    title: "QA Automation Engineer",
    company: "Rackware Inc",
    period: "2019 - 2021",
    description: [
      "On-demand Kubernetes and OpenShift Automation",
      "Jenkins CI/CD Pipeline Automation",
      "Automation Framework Development"
    ]
  }
];

export const education: Education[] = [
  {
    degree: "Bachelor's in Computer Technology",
    institution: "Pune Institute of Computer Technology",
    period: "2016 - 2019",
    description: "Specialized in Software Engineering and Cloud Computing"
  },
  {
    degree: "Diploma in Computer Science",
    institution: "Government Polytechnic Nashik",
    period: "2013 - 2016",
    description: "Focused on programming and software development"
  }
];

export const skillsData = [
  {
    icon: Cloud,
    title: 'Cloud Platforms',
    skills: [
      { name: 'AWS', logo: 'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/aws-icon.svg' },
      { name: 'Azure', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/azure/azure-original.svg' },
      { name: 'Google Cloud', logo: 'https://www.vectorlogo.zone/logos/google_cloud/google_cloud-icon.svg' },
      { name: 'OCI', logo: 'https://www.vectorlogo.zone/logos/oracle/oracle-icon.svg' }
    ],
  },
  {
    icon: Infinity,
    title: 'CI/CD Tools',
    skills: [
      { name: 'Jenkins', logo: 'https://www.vectorlogo.zone/logos/jenkins/jenkins-icon.svg' },
      { name: 'GitHub Actions', logo: 'https://www.vectorlogo.zone/logos/github/github-icon.svg' },
      { name: 'ArgoCD', logo: 'https://www.vectorlogo.zone/logos/argoprojio/argoprojio-icon.svg' }
    ],
  },
  {
    icon: Frame,
    title: 'Other Tools',
    skills: [
      { name: 'Git', logo: 'https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg' },
      { name: 'Datadog', logo: 'https://www.vectorlogo.zone/logos/datadoghq/datadoghq-icon.svg' },
      { name: 'Linux', logo: 'https://www.vectorlogo.zone/logos/linux/linux-icon.svg' },
      { name: 'Cloudflare', logo: 'https://www.vectorlogo.zone/logos/cloudflare/cloudflare-icon.svg' },
    ],
  },
  {
    icon: Container,
    title: 'Containerization',
    skills: [
        { name: 'Kubernetes', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/kubernetes/kubernetes-plain.svg' },
        { name: 'Docker', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg' },
        { name: 'OpenShift', logo: 'https://www.vectorlogo.zone/logos/openshift/openshift-icon.svg' },
        { name: 'Helm', logo: 'https://helm.sh/img/helm.svg' },
    ],
  },
  {
    icon: Container,
    title: 'Infrastructure as Code',
    skills: [
        { name: 'Terraform', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/terraform/terraform-original.svg' },
        { name: 'Ansible', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/ansible/ansible-original.svg' }
    ],
  },
  {
    icon: Code2,
    title: 'Languages',
    skills: [
      { name: 'Go', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/go/go-original.svg' },
      { name: 'Python', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg' }
    ],
  }
];

export const highlights = {
  projects: [
    {
      title: 'Kubernetes Secret Decoder',
      date: 'April 2024',
      link: 'https://github.com/pratikkumar-mohite/s3-cleaner', 
      description: 'Developed a tool to decode Kubernetes secrets'
    },
    {
      title: 'AWS S3 Cleanup Automation',
      date: 'November 2024',
      link: 'https://github.com/pratikkumar-mohite/s3-cleaner',
      description: 'Automated cleanup of versioned S3 buckets'
    }
  ],
  articles: [
    {
      title: 'GitOps fundamentals with Codefresh',
      date: 'March 2022',
      link: 'https://medium.com/@DotSlashMohite/gitops-fundamentals-with-codefresh-f2500a5e4ff4'
    },
    {
      title: 'Foundation for Istio by solo.io',
      date: 'September 2024',
      link: 'https://medium.com/@DotSlashMohite/foundation-for-istio-by-solo-io-a6a0ebc11669'
    },
  ],
  linkedInPosts: [
    {
      title: 'GitHub Actions for CI/CD',
      date: 'March 2024',
      link: 'https://www.linkedin.com/posts/pratikkumar-mohite_learning-cicd-githubactions-activity-7189299639366369280-4DMg?utm_source=share&utm_medium=member_desktop'
    },
    {
      title: 'Kubernetes Community Day 2024',
      date: 'March 2024',
      link: 'https://www.linkedin.com/posts/pratikkumar-mohite_kcdpune2024-kcdpune-kcd-activity-7186011465743552515-TbfI?utm_source=share&utm_medium=member_desktop'
    }
  ]
};