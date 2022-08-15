import Layout from "../components/layout";

export default function IndexPage() {
  return (
    <Layout>
      <h1>NextAuth.js Example</h1>
      <p>aqui va la variable {process.env.NEXTAUTH_URL}</p>
      <p>
        This is an example site to demonstrate how to use{" "}
        <a href="https://next-auth.js.org">NextAuth.js</a> for authentication.
      </p>
    </Layout>
  );
}
