// ProfilePage.jsx

import styled from "styled-components";
import Btn from "./Btn";

const Container = styled.div`
  max-width: 400px;
  margin: 30px auto;
  padding: 20px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  text-align: center;

  @media (max-width: 600px) {
    max-width: 90%;
  }
`;

const Avatar = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  margin-bottom: 15px;
`;

const Name = styled.h2`
  font-size: 1.8rem;
  color: #222;
`;

const Bio = styled.p`
  font-size: 1rem;
  color: #555;
`;

function ProfilePage() {
  return (
    <Container>
      <Avatar src="https://via.placeholder.com/120" alt="Profile" />
      <Name>Saravanan Sekar</Name>
      <Bio>Frontend Developer | React Enthusiast</Bio>
      <Btn/>
    </Container>
  );
}
export default ProfilePage;
