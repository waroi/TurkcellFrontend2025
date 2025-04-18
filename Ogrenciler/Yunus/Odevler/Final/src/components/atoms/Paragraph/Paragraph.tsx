const Paragraph = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
    <p className={`${className}`}>{children}</p>
)

export default Paragraph