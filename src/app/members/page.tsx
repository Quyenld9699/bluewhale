"use client";

import { teamMembers } from "src/team-member";

export default function MembersPage() {
  console.log("🚀 ~ teamMembers:", teamMembers);

  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center flex-col">
      {/* Ocean depth background with realistic gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-200 to-slate-900"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500 to-transparent opacity-60"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-800 to-slate-900 opacity-80"></div>

      {/* Underwater light rays */}
      <div className="absolute inset-0 opacity-30">
        <div className="light-ray light-ray-1"></div>
        <div className="light-ray light-ray-2"></div>
        <div className="light-ray light-ray-3"></div>
      </div>

      {/* Ocean waves animation */}
      <div className="absolute inset-0 opacity-20">
        <div className="wave wave1"></div>
        <div className="wave wave2"></div>
        <div className="wave wave3"></div>
      </div>

      <div></div>
      <h1 className="absolute text-4xl text-white font-bold">Hello World</h1>
    </div>
  );
}
