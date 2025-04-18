import Paragraph from "../../Paragraph/Paragraph"

const LevelDescription = ({ children }: { children: React.ReactNode }) => {
    return <Paragraph className="level-description">{children}</Paragraph>
}

export default LevelDescription