import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const ProjectCard = ({
  project: { id, title, description, image, source, tags },
}) => {
  return (
    <Link href={`/projects/${id}`}>
      <a>
        <motion.div
          className="rounded-xl w-full bg-gradient-to-r from-[#6EE7B7] via-[#3B82F6] to-[#9333EA] p-1 hover:cursor-pointer shadow-lg"
          whileHover={{ y: -10, scale: 1.05, transition: { duration: 0.4 } }}
        >
          <div className="w-full h-full p-4 bg-white rounded-lg dark:bg-gray-900">
            <div className="flex flex-col items-center space-y-4 ">
              <img
                src={image.url}
                alt={title}
                className="object-cover w-full rounded-lg max-h-64"
              />
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                {title}
              </h2>
              <p className="text-md">{description}</p>

              <div className="flex items-center space-x-4">
                {tags.map((tag, key) => (
                  <span
                    key={key}
                    className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-pink-100 bg-pink-700 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </a>
    </Link>
  );
};

export default ProjectCard;
