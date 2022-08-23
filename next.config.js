module.exports = {
  images: {
    domains: [
      "i.postimg.cc",
      "picsum.photos",
      "pbs.twimg.com",
      "files.stripe.com",
      "media-exp1.licdn.com",
    ],
  },
  env: {
    NEXTAUTH_URL:
      `https://${process.env.NEXT_PUBLIC_VERCEL_URL}` ||
      "https://ceroacienweb-gilt.vercel.app",
  },
};
