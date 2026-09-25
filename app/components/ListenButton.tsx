"use client"

import { useEffect, useRef, useState, useSyncExternalStore } from "react"
import { HugeiconsIcon } from "@hugeicons/react"
import {
    HeadphonesIcon,
    PauseIcon,
    PlayIcon,
    StopIcon,
} from "@hugeicons/core-free-icons"

type PlaybackState = "idle" | "playing" | "paused"

interface ListenButtonProps {
    // Text split into paragraph-sized chunks. Chrome stops long utterances
    // after ~15s, so each chunk is spoken as its own utterance.
    chunks: string[]
    lang?: string
}

function subscribeNoop() {
    return () => {}
}

function pickVoice(lang: string) {
    const voices = speechSynthesis.getVoices()
    const prefix = lang.split("-")[0]
    return (
        voices.find((voice) => voice.lang === lang && voice.default) ??
        voices.find((voice) => voice.lang === lang) ??
        voices.find((voice) => voice.lang.startsWith(prefix)) ??
        null
    )
}

export default function ListenButton({
    chunks,
    lang = "en-US",
}: ListenButtonProps) {
    const isSupported = useSyncExternalStore(
        subscribeNoop,
        () => "speechSynthesis" in window,
        () => false
    )
    const [state, setState] = useState<PlaybackState>("idle")
    const [current, setCurrent] = useState(0)
    // Bumped on every stop/restart so callbacks from cancelled utterances are ignored.
    const sessionRef = useRef(0)

    useEffect(() => {
        if (!isSupported) return
        // Voices load asynchronously in Chrome; touching getVoices() kicks that off.
        speechSynthesis.getVoices()
        return () => {
            sessionRef.current++
            speechSynthesis.cancel()
        }
    }, [isSupported])

    if (!isSupported || chunks.length === 0) return null

    const speakFrom = (index: number, session: number) => {
        if (session !== sessionRef.current) return
        if (index >= chunks.length) {
            setState("idle")
            setCurrent(0)
            return
        }

        const utterance = new SpeechSynthesisUtterance(chunks[index])
        utterance.lang = lang
        utterance.voice = pickVoice(lang)
        utterance.onend = () => speakFrom(index + 1, session)
        utterance.onerror = (event) => {
            if (event.error === "interrupted" || event.error === "canceled")
                return
            if (session === sessionRef.current) setState("idle")
        }

        setCurrent(index)
        speechSynthesis.speak(utterance)
    }

    const play = () => {
        if (state === "paused") {
            speechSynthesis.resume()
            setState("playing")
            return
        }
        const session = ++sessionRef.current
        speechSynthesis.cancel()
        setState("playing")
        speakFrom(0, session)
    }

    const pause = () => {
        speechSynthesis.pause()
        setState("paused")
    }

    const stop = () => {
        sessionRef.current++
        speechSynthesis.cancel()
        setState("idle")
        setCurrent(0)
    }

    const buttonClass =
        "inline-flex h-8 items-center justify-center gap-1.5 rounded-md px-2 text-magenta transition-colors duration-200 hover:bg-fg/10 hover:text-yellow"

    return (
        <div
            className="mb-6 inline-flex items-center gap-1 rounded-lg border border-fg/20 bg-bg/50 p-1 text-sm"
            aria-label="Listen to this post"
        >
            {state === "playing" ?
                <button
                    type="button"
                    onClick={pause}
                    className={buttonClass}
                    aria-label="Pause reading"
                >
                    <HugeiconsIcon
                        icon={PauseIcon}
                        size={18}
                        strokeWidth={1.75}
                    />
                    <span>Pause</span>
                </button>
            :   <button
                    type="button"
                    onClick={play}
                    className={buttonClass}
                    aria-label={
                        state === "paused" ? "Resume reading" : "Listen to post"
                    }
                >
                    <HugeiconsIcon
                        icon={state === "paused" ? PlayIcon : HeadphonesIcon}
                        size={18}
                        strokeWidth={1.75}
                    />
                    <span>{state === "paused" ? "Resume" : "Listen"}</span>
                </button>
            }
            {state !== "idle" && (
                <>
                    <button
                        type="button"
                        onClick={stop}
                        className={buttonClass}
                        aria-label="Stop reading"
                    >
                        <HugeiconsIcon
                            icon={StopIcon}
                            size={18}
                            strokeWidth={1.75}
                        />
                    </button>
                    <span
                        className="px-2 font-mono text-xs text-fg/50"
                        aria-live="polite"
                    >
                        {current + 1}/{chunks.length}
                    </span>
                </>
            )}
        </div>
    )
}
