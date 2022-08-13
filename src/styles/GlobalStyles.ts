import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  background-color: #121212;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  color: #BB86FC;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
    Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

input, select {
  font-size:16px;
  background-color: #121212;
  color: whitesmoke;
  border: 1px solid #4a5568;
  border-radius: 2px;
  outline: none;
  padding: 5px;

  &:focus {
    border: 2px solid #555;
  }
}

button {
  background-color: #bb86fc;
  &:hover {
    background-color: #bb86fcc7;
    color: white;
    cursor: pointer;
  }
}

.error{
  color:red;
}

::-webkit-calendar-picker-indicator {
  filter: invert(0.5);
}
`;
