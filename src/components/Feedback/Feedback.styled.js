
import styled from "styled-components";


export const StyledButton = styled.button`

margin-right: 20px;
  appearance: none;
  background-color: #bad1e8;
  border: 1px solid rgba(202, 184, 230, 0.15);
  border-radius: 6px;
  box-shadow: rgba(202, 184, 230, 0.04) 0 1px 0, rgba(255, 255, 255, 0.25) 0 2px 0 inset;
  box-sizing: border-box;
  color: #1f4033;
  cursor: pointer;
  display: inline-block;

  font-family: -apple-system, system-ui, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  list-style: none;
  padding: 6px 16px;
  position: relative;
  transition: background-color 0.5s cubic-bezier(0.3, 0, 0.5, 1);

  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: middle;
  white-space: nowrap;
  word-wrap: break-word;


&:hover {
  background-color: #F3F4F6;
  text-decoration: none;
  transition-duration: 0.1s;
}

&:focus {
  outline: 1px transparent;
}
`;
