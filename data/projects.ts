export type Project = {
  title: string;
  description: string;
  stack: string[];
  link?: string;
};

export const projects: Project[] = [
  {
    title: "Visitors Management System",
    description:
      "A full-stack system for managing visitor records, authentication, and access control in an institutional environment.",
    stack: ["Next.js", "ASP.NET Core", "PostgreSQL"],
    link: "https://github.com/olusesanayomide/Optipass",
  },
  {
 title: "Library Management System",
    description:
      "Backend-focused system for managing library operations including book inventory, borrowing workflows, and background processing using a worker service.",
    stack: ["ASP.NET Core", "PostgreSQL", "Background Worker"],
    link: "https://github.com/olusesanayomide/Library-Management-System", 
   },
  {
 title: "Enterprise Resource Planning system",
    description:
      "A robust ERP backend built with NestJS, Prisma, and PostgreSQL. Unlike basic CRUD apps, this system uses a ledger-based inventory engine where stock is never edited—it is only moved.",
    stack: ["Nest.js", "PostgreSQL", "Prisma", "Swagger Ui "],
    link: "https://github.com/olusesanayomide/erp-backend.git", 
   },
];
