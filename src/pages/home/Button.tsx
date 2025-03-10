import styled from "styled-components";

interface ButtonStyleProps {
  bg?: string;
  color?: string;
  width?: string;
  borderColor?: string;
  height?: string;
}

const Wrapper = styled.button<ButtonStyleProps>`
  color: ${(props) => props.color || "#fff"};
  background-color: ${(props) => props.bg || "#403234"};
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "40px"};
  padding: 12px 24px;
  border-radius: 10px;
  border: ${(props) =>`1px solid ${props.borderColor ?? "none"}`};
`;

interface ButtonProps {
  text: string;
  onClick?: () => void;
  bg?: string;
  color?: string;
  width?: string;
  height?: string
  borderColor?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const Button = ({
  text,
  onClick,
  bg,
  color,
  width,
  borderColor,
  height,
  type,
  disabled
}: ButtonProps) => {
  return (
    <Wrapper
      bg={bg}
      color={color}
      width={width}
      borderColor={borderColor}
      onClick={onClick}
      height={height}
      type={type}
      disabled={disabled}
    >
      {text}
    </Wrapper>
  );
};

export default Button;