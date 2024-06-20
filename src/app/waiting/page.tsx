"use client";

import { StartGame } from "@/logics/GameStartFlagHandler";
import { listenToGameStart } from "@/logics/MonitorGameStartFlag";
import { goToPage } from "@/logics/goToPage";
import { useEffect } from "react";

export default function Waiting() {
  useEffect(() => {
    const unsubscribe = listenToGameStart(() => {
      goToPage("/post");
      StartGame();
    });
    // development buildではuseEffectは2回実行されるそうです
    // https://react.dev/learn/synchronizing-with-effects#how-to-handle-the-effect-firing-twice-in-development

    // クリーンアップ関数を返してリスナーを解除
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div className="text-center">
      <div className="flex justify-center">
        <div>in チーム1</div>
      </div>
      <div>開始までお待ち下さい……………………</div>
    </div>
  );
}
