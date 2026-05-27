export async function POST(req: Request) {

  const body = await req.json();

  const { role, skills } = body;

  const questions = [
    `Explain your experience as a ${role}.`,
    `What projects have you built using ${skills}?`,
    `Explain a challenging bug you solved.`,
    `How would you optimize frontend performance?`,
    `What are best practices while working with ${skills}?`,
  ];

  const analysis = [
    "Improve advanced React patterns",
    "Learn frontend optimization",
    "Practice scalable component design",
    "Improve API integration handling",
  ];

  const roadmap = [
    "Master Advanced React",
    "Learn Next.js Backend APIs",
    "Study System Design",
    "Practice Authentication Flows",
    "Deploy Full Stack Applications",
  ];

  return Response.json({
    questions,
    analysis,
    roadmap,
  });

}