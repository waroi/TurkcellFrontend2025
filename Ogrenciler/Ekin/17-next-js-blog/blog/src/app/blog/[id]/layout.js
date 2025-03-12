import Layout from "@/components/Layout";

export default ({ children }) => {
  return (
    <Layout active="add" bodyClassName="blog-body" fill>
      {children}
    </Layout>
  );
};
