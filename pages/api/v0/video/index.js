import ApiVideoClient from "@api.video/nodejs-client";

export default async function handler(req, res) {
  const { id } = req.query;

  console.log(id);

  const tags = [id];

  const apiKey = process.env.API_KEY;
  const client = new ApiVideoClient({
    apiKey,
  });

  const method = req.method;
  switch (method) {
    case "GET":
      if (!id) return res.json({ error: "id is required" });

      const result = await client.videos.list({
        tags,
        sortBy: "publishedAt",
        sortOrder: "ASC",
      });

      res.status(200).json({
        count: result.data.length,
        data: result.data,
      });
      break;

    case "POST":
      res.status(200).json({ message: "Hello World!" });
      break;
    default:
      res.setHeader("Allow", ["GET", "PUT", "POST", "DELETE"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
