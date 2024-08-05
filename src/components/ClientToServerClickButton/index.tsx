"use client";
import { HandleClick } from "./functions";
import ClickButton from "@/components/common/ClickButton";

/**
 * ### A Simple Client button calling for a Server Function (action)
 */

export default function ClientToServerClickButton() {
    return (
        <form action={HandleClick}>
            <ClickButton />
        </form>
    )
}