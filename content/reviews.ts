export type Review = {
  id: string;
  name: string;
  company?: string;
  rating: number;
  comment: string;
  date: string;
  approved: boolean;
};

export const reviews: Review[] = [
  {
    id: "r1",
    name: "Morgan Ellis",
    company: "Midwest Packaging Co.",
    rating: 5,
    comment:
      "Controls D Automation rebuilt our line HMI in a way operators actually use. Startup support was clear, and the documentation made handoff easy for our maintenance team.",
    date: "2025-12-02",
    approved: true,
  },
  {
    id: "r2",
    name: "Priya Nandakumar",
    company: "Riverbend Treatment Plant",
    rating: 5,
    comment:
      "They understood our SCADA priorities quickly—alarms, trends, and remote visibility—without overcomplicating the system. Communication during commissioning was excellent.",
    date: "2025-09-18",
    approved: true,
  },
  {
    id: "r3",
    name: "Chris Delgado",
    company: "Northline Manufacturing",
    rating: 4,
    comment:
      "Solid migration from our legacy PLC platform. The cutover plan protected production, and the new diagnostics have already saved us troubleshooting time.",
    date: "2025-05-09",
    approved: true,
  },
];

export function getApprovedReviews(extra: Review[] = []) {
  return [...reviews, ...extra].filter((review) => review.approved);
}

export function getAverageRating(list: Review[]) {
  if (list.length === 0) return 0;
  const total = list.reduce((sum, review) => sum + review.rating, 0);
  return Math.round((total / list.length) * 10) / 10;
}
