import React from 'react'
import "./Typography.scss"

type TypographyProps = {
    variant: "head-1" | "head-2" | "head-3" | "head-4" | "head-5" | "caption-1" | "caption-2" | "body-1" | "body-2" | "body-3" | "free";
    className?: string;
    children: React.ReactNode;
    btnAlike?: "df" | "sm-1" | "sm-2";
    onClick?: () => void;
}

type htmlTag = "h1" | "h2" | "h3" | "h4" | "h5" | "p" | "span";

const tagMap: Record<TypographyProps["variant"], htmlTag> = {
    "head-1" : "h1",
    "head-2" : "h2",
    "head-3" : "h3",
    "head-4" : "h4",
    "head-5" : "h5",
    "caption-1" : "span",
    "caption-2" : "span",
    "body-1" : "p",
    "body-2" : "p",
    "body-3":"p",
    "free": "p",
}

const Typography: React.FC<TypographyProps> = ({btnAlike, variant, className="", children, onClick}) => {
  const Tag = tagMap[variant];
    return(
        <Tag onClick={onClick} className={`${variant} btn-size-${btnAlike} ${className}`}>{children}</Tag>        
  )
}

export default Typography