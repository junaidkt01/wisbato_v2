export interface WorkProcessCardProps {
  id: number;
  x: number;
  y: number;
  checkpoint_id: string;
  icon: string;
  color: string;
  title: string;
  content: string[];
}

export const workProcessCard: WorkProcessCardProps[] = [
  {
    id: 1,
    x: 300 + 39,
    y: -200,
    checkpoint_id: "pointA 1",
    icon: "1.svg",
    color: "#C3DFFF",
    title: "Idea",
    content: [
      "Brainstorming and validating concepts",
      "User persona creation and feature prioritization",
      "Prototyping for visualization",
      "Market research for trend identification",
      "Ideation workshops for refinement",
    ],
  },
  {
    id: 2,
    x: 100 + 34,
    y: -100,
    checkpoint_id: "pointB 2",
    icon: "2.svg",
    color: "#DCD2F7",
    title: "Design",
    content: [
      "UI/UX design based on research",
      "Iterative design optimization",
      "Style guide development for consistency",
      "Stakeholder collaboration for feedback",
      "Usability testing for validation",
    ],
  },
  {
    id: 3,
    x: 500 + 80,
    y: -150,
    checkpoint_id: "pointC 3",
    color: "#F7D2DB",
    icon: "3.svg",
    title: "Development",
    content: [
      "Efficient code writing based on design",
      "Functionality implementation",
      "API integration as needed",
      "Version control and code reviews",
      "Continuous integration and deployment",
    ],
  },
  {
    id: 4,
    x: 100 + 10,
    y: -150,
    checkpoint_id: "pointD 4",
    color: "#F5C9FD",
    icon: "4.svg",
    title: "Test",
    content: [
      "Test case creation",
      "Unit and integration testing",
      "User acceptance testing (UAT)",
      "Regression testing",
      "Performance monitoring",
    ],
  },
  {
    id: 5,
    x: 300 + 50,
    y: 600,
    checkpoint_id: "pointE 5",
    color: "#FFE3C2",
    icon: "5.svg",
    title: "Support",
    content: [
      "Documentation and training materials",
      "Technical support and issue troubleshooting ",
      "System performance monitoring",
      "User feedback gathering",
      "Product iteration based on feedback",
    ],
  },
];

// export const workProcessCard = [
//   {
//     id: 1,
//     x: 300 + 39,
//     y: -200,
//     icon: "1.svg",
//     color: "#C3DFFF",
//     title: "Idea",
//     content: [
//       "Brainstorming and validating concepts",
//       "User persona creation and feature prioritization",
//       "Prototyping for visualization",
//       "Market research for trend identification",
//       "Ideation workshops for refinement",
//     ],
//   },
//   {
//     id: 2,
//     x: 100 + 34,
//     y: -100,
//     icon: "2.svg",
//     color: "#DCD2F7",
//     title: "Design",
//     content: [
//       "UI/UX design based on research",
//       "Iterative design optimization",
//       "Style guide development for consistency",
//       "Stakeholder collaboration for feedback",
//       "Usability testing for validation",
//     ],
//   },
//   {
//     id: 3,
//     x: 500 + 80,
//     y: -150,
//     color: "#F7D2DB",
//     icon: "3.svg",
//     title: "Development",
//     content: [
//       "Efficient code writing based on design",
//       "Functionality implementation",
//       "API integration as needed",
//       "Version control and code reviews",
//       "Continuous integration and deployment",
//     ],
//   },
//   {
//     id: 4,
//     x: 100 + 10,
//     y: -150,
//     color: "#F5C9FD",
//     icon: "4.svg",
//     title: "Test",
//     content: [
//       "Test case creation",
//       "Unit and integration testing",
//       "User acceptance testing (UAT)",
//       "Regression testing",
//       "Performance monitoring",
//     ],
//   },
//   {
//     id: 5,
//     x: 300 + 50,
//     y: 600,
//     color: "#FFE3C2",
//     icon: "5.svg",
//     title: "Support",
//     content: [
//       "Documentation and training materials",
//       "Technical support and issue troubleshooting ",
//       "System performance monitoring",
//       "User feedback gathering",
//       "Product iteration based on feedback",
//     ],
//   },
// ];
