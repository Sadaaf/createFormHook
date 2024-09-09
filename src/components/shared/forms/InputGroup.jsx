import styled from "styled-components";
import Label from "../../ui/inputs/Label";
import TextInput from "../../ui/inputs/TextInput";

const Container = styled.div`
  width: 100%;
  padding: 1rem;
  border: 1px solid;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ErrorMessage = styled.div`
  font-size: 0.8rem;
  color: red;
`;

const InputGroup = ({
  label,
  name,
  placeholder,
  value,
  error,
  onChange,
  onFocus,
  onBlur,
}) => {
  return (
    <Container>
      <Label htmlFor={name}>{label}</Label>
      <TextInput
        value={value}
        name={name}
        id={name}
        placeholder={placeholder}
        onChange={onChange}
        error={error}
        onFocus={onFocus}
        onBlur={onBlur}
      />
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </Container>
  );
};

export default InputGroup;
