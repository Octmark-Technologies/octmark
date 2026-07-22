import type { TeamMember } from "@/types/content";

export const teamMembers: TeamMember[] = [
  {
    name: "Rahul",
    slug: "rahul",
    role: "Founder",
    bio: "Built and operated growth systems across 12 sectors over three years. Rahul works directly on every engagement, not as an account manager, but as the person building the system.",
    initials: "R",
    profileImage: undefined,
    linkedinUrl: "https://www.linkedin.com/in/rahul-octmark",
    order: 1,
    isFounder: true,
  },
];

export const specialistNetwork: TeamMember[] = [
  {
    name: "CRM Specialist",
    slug: "crm-specialist",
    role: "CRM Architecture",
    bio: "CRM architecture and custom module development.",
    initials: "C",
    order: 1,
    isSpecialist: true,
    expertise: ["CRM Implementation", "CRM Architecture", "Custom Modules"],
  },
  {
    name: "Automation Specialist",
    slug: "automation-specialist",
    role: "Marketing Automation",
    bio: "End-to-end marketing automation, WhatsApp sequences, and email workflows.",
    initials: "A",
    order: 2,
    isSpecialist: true,
    expertise: ["Gallabox", "Email Automation", "WhatsApp"],
  },
  {
    name: "Analytics Specialist",
    slug: "analytics-specialist",
    role: "Growth Analytics",
    bio: "Attribution modelling, dashboard build, and revenue reporting.",
    initials: "A",
    order: 3,
    isSpecialist: true,
    expertise: ["Attribution", "Dashboards", "Revenue Reporting"],
  },
  {
    name: "Content Specialist",
    slug: "content-specialist",
    role: "Content Strategy",
    bio: "Strategic content for growth-stage B2B businesses.",
    initials: "C",
    order: 4,
    isSpecialist: true,
    expertise: ["B2B Content", "SEO", "Thought Leadership"],
  },
];

export function getFounder(): TeamMember {
  return teamMembers[0];
}

export function getCoreTeam(): TeamMember[] {
  return teamMembers.filter((m) => !m.isSpecialist && !m.isFounder);
}
