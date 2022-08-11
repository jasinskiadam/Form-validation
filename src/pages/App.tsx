import styled from 'styled-components';
import GlobalStyles from '../styles/GlobalStyles';
import Signup from '../components/Signup';

function App() {
  return (
    <>
      <GlobalStyles />
      <Wrapper className='App'>
        <Signup />
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
`;

export default App;
