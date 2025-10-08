import { useState } from "react";

export default function DiscordButton() {
  const [showToast, setShowToast] = useState(false);
  const [showCopyStatus, setShowCopyStatus] = useState(false);
  return (
    <>
      <button
        onClick={async () => {
          await navigator.clipboard.writeText("1112978741342261379");
          setShowToast(true);
          setShowCopyStatus(true);
          setTimeout(() => setShowToast(false), 4000);
        }}
      >
        {!showCopyStatus ? "Discord" : "Discord ID Copied!"}
      </button>
      {showToast && (
        <div className="-translate-x-1/5 fixed bottom-8 left-1/2 z-[9999] bg-ctp-surface1 p-2 text-sm text-ctp-crust-light shadow-lg">
          Copied to clipboard!
        </div>
      )}
    </>
  );
}
