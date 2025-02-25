module.exports = {
    images: {
      domains: ["res.cloudinary.com", "arrowedge.netlify.app"], // Add Cloudinary if using it
      unoptimized: true, // Required for Netlify
    },
    experimental: {
      images: {
        layoutRaw: true, // Helps avoid Next.js image optimization issues on Netlify
      },
    },
  };
  