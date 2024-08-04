"use client";
import { Button } from "@/components/ui/button";
import { HandleClick } from "./functions";

/**
 * ### A Simple Client button calling for a Server Function (action)
 */

export default function ClientToServerClickButton() {
    return (
        <form action={HandleClick}>
            <Button type="submit">Click</Button>
        </form>
    )
}