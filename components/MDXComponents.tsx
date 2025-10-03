import React from "react";

export const MDXComponents = {
  h1: (props: any) => <h1 className="text-4xl font-bold my-4" {...props} />,
  h2: (props: any) => <h2 className="text-3xl font-semibold my-3" {...props} />,
  p: (props: any) => <p className="my-2" {...props} />,
  // You can add more custom components for code blocks, images, etc.
};
