import { Form } from "react-bootstrap"
import { SectionType } from "../types.d"

type Props = {
    type: SectionType,
    placeholder: string,
    loading: boolean,
    onChange: (value: string) => void,
    value: string}

const commonStyles = { border:0, height: "200px", resize: 'none' }

export const TextArea = ({ type, placeholder, loading, value, onChange } : Props) => {
    const styles = type === SectionType.From 
    ? commonStyles
    : { ...commonStyles, backgroundColor: "#f5f5f5" }

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        onChange(event.target.value)
    }

    return (
        <Form.Control
            autoFocus={type === SectionType.From}
            as="textarea"
            placeholder={placeholder}
            style={ styles }
            value={value}
            onChange={handleChange}
            
        />
    )
}