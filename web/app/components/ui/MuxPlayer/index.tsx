import MuxPlayer from "@mux/mux-player-react";
import React, { useEffect, useRef, useState } from "react";
import Controls from "./controls";
import "./_index.scss";
type Props = {
  playbackId: string;
  title?: string;
  controls?: boolean;
};

const MuxVideoPlayer = ({ playbackId, title, controls }: Props) => {
  const [ready, setReady] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);
  const [muted, setMuted] = useState<boolean>(true);

  useEffect(() => {
    setReady(true);
  }, []);

  return (
    <div className='mux-player-container' onClick={() => setMuted(!muted)}>
      {ready && (
        <>
          <MuxPlayer
            playbackId={playbackId}
            metadata={title ? { video_title: title } : undefined}
            autoPlay='muted'
            muted={muted}
            loop
            onProgress={(event: CustomEvent) => {
              const target = event.target as HTMLMediaElement;
              const currentTime = target?.currentTime;
              const duration = target?.duration;
              if (duration > 0) setProgress(currentTime / duration);
            }}
          />
          {controls && <Controls progress={progress} muted={muted} />}
        </>
      )}
    </div>
  );
};

export default MuxVideoPlayer;
