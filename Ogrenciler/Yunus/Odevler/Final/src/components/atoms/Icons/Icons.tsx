'use client'

import { useState, useEffect } from 'react'
import { IconType } from 'react-icons'
import { IconProps } from '@/types/IconType'

const getIconImport = async (collection: string) => {
    switch (collection) {
        case 'ai':
            return import('react-icons/ai').then(module => module)
        case 'ci':
            return import('react-icons/ci').then(module => module)
        case 'fa':
            return import('react-icons/fa').then(module => module)
        case 'fi':
            return import('react-icons/fi').then(module => module)
        case 'go':
            return import('react-icons/go').then(module => module)
        case 'io':
            return import('react-icons/io').then(module => module)
        case 'pi':
            return import('react-icons/pi').then(module => module)
        default:
            throw new Error(`İcon koleksiyonu "${collection}" desteklenmiyor`)
    }
}

const iconCollectionsCache: Record<string, any> = {}

const Icon = ({ collection, name, size = 24, color = 'currentColor', className = '' }: IconProps) => {
    const [IconComponent, setIconComponent] = useState<IconType | null>(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        if (!collection || !name) {
            setIsLoading(false)
            return
        }
        const loadIconComponent = async () => {
            try {
                let iconCollection = iconCollectionsCache[collection]
                if (!iconCollection) {
                    iconCollection = await getIconImport(collection)
                    iconCollectionsCache[collection] = iconCollection
                }
                const Component = iconCollection[name as keyof typeof iconCollection] as IconType
                if (!Component) {
                    console.warn(`Icon "${name}" not found in collection "${collection}"`)
                    setIconComponent(null)
                } else {
                    setIconComponent(() => Component)
                }
            } catch (error) {
                console.error(`Error loading icon: ${collection}/${name}`, error)
                setIconComponent(null)
            } finally {
                setIsLoading(false)
            }
        }
        loadIconComponent()
    }, [collection, name])
    if (isLoading || !IconComponent) {
        return null
    }
    return (
        <IconComponent
            size={size}
            color={color}
            className={className}
            aria-hidden="true"
        />
    )
}

export default Icon