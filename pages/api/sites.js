import db from "@/lib/firebase-admin";

export default async function handler(_, res) {
  const snapshot = await db.collection("sites").get();
  let sites = [];
  snapshot.forEach((doc) => {
    sites.push({ id: doc.id, ...doc.data() });
  });

  res.status(200).json(sites);

  //   res.status(200).json({ name: "John Doe" });
}
