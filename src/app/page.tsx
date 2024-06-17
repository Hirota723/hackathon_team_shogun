"use client";

import TeamCard from "@/components/TeamCard";
import { useState } from "react";

export interface Team {
  name: string;
  id: string;
}

export default function Home() {
  const [teams, setTeams] = useState<Team[]>([
    { name: "Team1", id: "1" },
    { name: "Team2", id: "2" },
    { name: "Team3", id: "3" },
    { name: "Team4", id: "4" },
  ]);

  const teamCards = teams.map((team) => <TeamCard>{team.name}</TeamCard>)

  return (
    <div className="text-center">
      <div>トロッコ問題ゲーム！</div>
      <div>
        <div>
          チーム一覧
        </div>
        <div className="grid auto-rows-[6rem] grid-cols-[repeat(auto-fill,minmax(8rem,1fr))] gap-2 p-2 overflow-y-auto">
          {teamCards}
        </div>
        <div>
          開始までお待ち下さい…………
        </div>
        <button onClick={() => setTeams([...teams, { name: "Team5", id: "5" }]) }>addTeams</button>
      </div>
    </div>
  );
}
