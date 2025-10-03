"use client";
import Link from "next/link";

const Sidebar = () => {
  const docs = [
    { title: "Introduction", path: "/docs/introduction" },
    { title: "Getting Started", path: "/docs/getting-started" },
    { title: "Features", path: "/docs/advanced-topics/features" },
  ];

  return (
    <div className="w-64 h-screen overflow-y-auto bg-gray-50 border-r p-4">
      <h2 className="font-bold mb-4">Docs</h2>
      <ul>
        {docs.map((doc) => (
          <li key={doc.path} className="my-2">
            <Link href={doc.path} className="hover:text-blue-500">
              {doc.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
