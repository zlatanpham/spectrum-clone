import React from 'react';
import Link from 'next/link';

export default function ExplorePage() {
  return (
    <div className="w-full">
      <div className="bg-purple-500 text-center py-20">
        <h2 className="font-bold text-white text-3xl">Find a community</h2>
        <p className="text-white mb-5">
          Try searching for topics like “crypto” or for products like “React”
        </p>
        <input
          type="text"
          placeholder="Search for communities or topics..."
          className="px-10 py-3 rounded"
        />

        <div className="text-white mt-10">
          <h3 className="font-bold text-xl mb-2">Create your own community</h3>
          <p className="mb-5">
            Building communitiese on Spectrum is easy and free!
          </p>
          <Link href="/new/community">
            <a
              title="New community"
              className="bg-white text-black inline-block px-4 py-2 rounded"
            >
              <button>Create a community</button>
            </a>
          </Link>
        </div>
      </div>

      <div className="py-3 px-2 bg-white border-b border-gray-300">Tab</div>

      <div className="px-2 py-3">Community list</div>
    </div>
  );
}
