interface TeamMember {
  id: number;
  name: string;
  designation: string;
  imageUrl: string;
  linkedInUrl?: string;
  email?: string;
}

interface TeamCategory {
  category: string;
  description: string;
  members: TeamMember[];
}

export const teamData: TeamCategory[] = [
  {
    category: "Management Team",
    description: "Our management team oversees the business operations...",
    members: [
      {
        id: 1,
        name: "Abhinandh KP",
        designation: "UI/UX Designer",
        imageUrl: "Abhinandh.png",
        linkedInUrl: "https://www.linkedin.com/in/abhinandh-kottappurath-266b8714a/",
      },
      {
        id: 2,
        name: "Sivayogesh Balamurugan",
        designation: "UI/UX Designer",
        imageUrl: "Siva.png",
        linkedInUrl: "http://www.linkedin.com/in/sivayogesh-balamurugan-2b493920ashiva",
      },
      {
        id: 2,
        name: "Sivayogesh Balamurugan",
        designation: "UI/UX Designer",
        imageUrl: "Siva.png",
        linkedInUrl: "http://www.linkedin.com/in/sivayogesh-balamurugan-2b493920ashiva",
      },
      {
        id: 2,
        name: "Sivayogesh Balamurugan",
        designation: "UI/UX Designer",
        imageUrl: "Siva.png",
        linkedInUrl: "http://www.linkedin.com/in/sivayogesh-balamurugan-2b493920ashiva",
      },
      {
        id: 2,
        name: "Sivayogesh Balamurugan",
        designation: "UI/UX Designer",
        imageUrl: "Siva.png",
        linkedInUrl: "http://www.linkedin.com/in/sivayogesh-balamurugan-2b493920ashiva",
      },
    ]
  },
  {
    category: "Development Team",
    description: "Our development team designs and implements...",
    members: [
      {
        id: 2,
        name: "Sivayogesh Balamurugan",
        designation: "UI/UX Designer",
        imageUrl: "Siva.png",
        linkedInUrl: "http://www.linkedin.com/in/sivayogesh-balamurugan-2b493920ashiva",
      },
      {
        id: 2,
        name: "Sivayogesh Balamurugan",
       designation: "UI/UX Designer",
        imageUrl: "Siva.png",
        linkedInUrl: "http://www.linkedin.com/in/sivayogesh-balamurugan-2b493920ashiva",
      },
      {
        id: 2,
        name: "Sivayogesh Balamurugan",
       designation: "UI/UX Designer",
        imageUrl: "Siva.png",
        linkedInUrl: "http://www.linkedin.com/in/sivayogesh-balamurugan-2b493920ashiva",
      },
      {
        id: 2,
        name: "Sivayogesh Balamurugan",
       designation: "UI/UX Designer",
        imageUrl: "Siva.png",
        linkedInUrl: "http://www.linkedin.com/in/sivayogesh-balamurugan-2b493920ashiva",
      },
    ]
  },
  {
    category: "Marketing Team",
    description: "The marketing team is responsible for outreach...",
    members: [
      {
        id: 2,
        name: "Sivayogesh Balamurugan",
       designation: "UI/UX Designer",
        imageUrl: "Siva.png",
        linkedInUrl: "http://www.linkedin.com/in/sivayogesh-balamurugan-2b493920ashiva",
      },
      {
        id: 2,
        name: "Sivayogesh Balamurugan",
       designation: "UI/UX Designer",
        imageUrl: "Siva.png",
        linkedInUrl: "http://www.linkedin.com/in/sivayogesh-balamurugan-2b493920ashiva",
      },
      {
        id: 2,
        name: "Sivayogesh Balamurugan",
       designation: "UI/UX Designer",
        imageUrl: "Siva.png",
        linkedInUrl: "http://www.linkedin.com/in/sivayogesh-balamurugan-2b493920ashiva",
      },
      {
        id: 2,
        name: "Sivayogesh Balamurugan",
       designation: "UI/UX Designer",
        imageUrl: "Siva.png",
        linkedInUrl: "http://www.linkedin.com/in/sivayogesh-balamurugan-2b493920ashiva",
      },
    ]
  },
  {
    category: "Technical Team",
    description: "The technical team ensures that all systems...",
    members: [
      {
        id: 2,
        name: "Sivayogesh Balamurugan",
       designation: "UI/UX Designer",
        imageUrl: "Siva.png",
        linkedInUrl: "http://www.linkedin.com/in/sivayogesh-balamurugan-2b493920ashiva",
      },
      {
        id: 2,
        name: "Sivayogesh Balamurugan",
       designation: "UI/UX Designer",
        imageUrl: "Siva.png",
        linkedInUrl: "http://www.linkedin.com/in/sivayogesh-balamurugan-2b493920ashiva",
      },
      {
        id: 2,
        name: "Sivayogesh Balamurugan",
       designation: "UI/UX Designer",
        imageUrl: "Siva.png",
        linkedInUrl: "http://www.linkedin.com/in/sivayogesh-balamurugan-2b493920ashiva",
      },
      {
        id: 2,
        name: "Sivayogesh Balamurugan",
       designation: "UI/UX Designer",
        imageUrl: "Siva.png",
        linkedInUrl: "http://www.linkedin.com/in/sivayogesh-balamurugan-2b493920ashiva",
      },
    ]
  }
];




export type PeopleType = {
  id: number;
  name: string;
  designation: string;
  image: string;
  linked_in: string;
};

export const people: PeopleType[] = [
  {
    id: 1,
    name: "Abhinandh KP",
    designation: "UI/UX Designer",
    image: "/Abhinandh.png",
    linked_in: "https://www.linkedin.com/in/abhinandh-kottappurath-266b8714a/",
  },
  {
    id: 2,
    name: "Sivayogesh Balamurugan",
    designation: "UI/UX Designer",
    image: "Siva.png",
    linked_in: "http://www.linkedin.com/in/sivayogesh-balamurugan-2b493920ashiva",
  },
  {
    id: 3,
    name: "Ahammed Junaid KT",
    designation: "ReactJS Developer",
    image: "Junaid.png",
    linked_in: "https://www.linkedin.com/in/ahammed-junaid-kt-b5b828212/",
  },
  {
    id: 4,
    name: "Vishnu Prakash RK",
    designation: "PHP Developer",
    image: "Vishnu.png",
    linked_in: "https://www.linkedin.com/in/vishnu-prakash-rk/",
  },
  {
    id: 5,
    name: "Ansif PV",
    designation: "Digital marketing Executive",
    image: "Ansif.png",
    linked_in: "https://www.linkedin.com/in/ansif-pv-43ba35241/",
  },
  {
    id: 6,
    name: "Adithya P P",
    designation: "Associate Project Manager",
    image: "Adithya.png",
    linked_in: "www.linkedin.com/in/adithya-p-p-2bba3b243/",
  },
  {
    id: 7,
    name: "Dona",
    designation: "Content Writer",
    image: "Dona.png",
    linked_in: "https://www.linkedin.com/in/dona-devasia-a5a8962a9/",
  },
  {
    id: 8,
    name: "Sahal Muhammad",
    designation: "Graphic Designer & Video Editor",
    image: "Sahal.png",
    linked_in: "",
  },
  {
    id: 9,
    name: "Soumya",
    designation: "ReactJS Developer Trainee",
    image: "Soumya.png",
    linked_in: "https://www.linkedin.com/in/soumya-t96/soumya",
  },
  {
    id: 10,
    name: "Hariharan",
    designation: ".Net Developer",
    image: "Hari.png",
    linked_in: "https://www.linkedin.com/in/hariharandotnet16",
  },
  {
    id: 11,
    name: "Rohith P",
    designation: "Technical Support Executive",
    image: "Rohith.png",
    linked_in: "https://www.linkedin.com/in/rohith-p-416a56317/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
  },
  {
    id: 12,
    name: "Fawaz Mohammed",
    designation: "Technical Support Executive",
    image: "Fawas.png",
    linked_in: "",
  },
  {
    id: 13,
    name: "Anagha C ",
    designation: "Technical Support Executive",
    image: "Anagha.png",
    linked_in: "",
  },
  {
    id: 14,
    name: "Drisya",
    designation: "Technical Support Executive",
    image: "Drishya.png",
    linked_in: "",
  },
  {
    id: 15,
    name: "Shilpa Lijith ",
    designation: "HR",
    image: "Shilpa.png",
    linked_in: "https://www.linkedin.com/in/shilpa-lijith-263702172/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
  },
  {
    id: 16,
    name: "Abdul Naser",
    designation: "Accounts Manager",
    image: "Naser.png",
    linked_in: "",
  },

];
