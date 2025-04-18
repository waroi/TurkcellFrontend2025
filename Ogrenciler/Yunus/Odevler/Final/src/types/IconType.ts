import { IconCollections } from "@/components/atoms/Icons/Icons"

export interface IconProps {
    collection: keyof typeof IconCollections
    name: string
    size?: number | string
    color?: string
    className?: string
}