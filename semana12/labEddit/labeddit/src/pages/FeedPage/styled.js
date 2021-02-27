import styled from "styled-components";

export const FeedContainer = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Cardo&family=Changa:wght@300&family=Francois+One&display=swap");
  font-family: "Francois One", sans-serif;
  background-color: #f8f8f8;
  width: 100%;
  align-itens: center;
`;

export const FeedCard = styled.div`
  background-color: white;
  text-align: center;
  margin: auto;
  margin-top: 30px;
  width: 50%;
  border: 1px solid grey;
  border-radius: 10px;
  padding: 10px;
  overflow: auto;
  cursor: pointer;
  @media only screen and (max-width: 600px) {
    display: flex;
    align-itens: center;
    flex-direction: column;
    flex-wrap: wrap;
    width: 90%;
    margin: 5px;
  }
`;
export const FeedHeader = styled.div`
  height: 40px;
  text-align: center;
  text-transform: uppercase;
  padding: 0px 0px 30px 0px;
  background: -webkit-linear-gradient(
    left,
    RGB(108, 66, 245) 50%,
    RGB(185, 66, 245) 50%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const FeedFooter = styled.div`
  height: 40px;
  border-top: 1px solid grey;
  display: flex;
  align-items: center;
  padding: 0 10px;
  justify-content: space-between;
`;

export const FeedText = styled.div`
  padding: 50px;
  overflow: auto;
`;

export const CommentContainer = styled.form`
  text-align: center;
  margin: auto;
  width: 50%;
  padding: 20px;
  cursor: pointer;
  @media only screen and (max-width: 600px) {
    display: flex;
    align-itens: center;
    flex-direction: column;
    flex-wrap: wrap;
    width: 90%;
    margin: 5px;
  }
`;
export const CommentText = styled.textarea`
  width: 100%;
  height: 150px;
  padding: 12px 20px;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 4px;
  background-color: white;
  resize: none;
`;
export const CommentTitle = styled.input`
  width: 100%;
  height: 50px;
  padding: 12px 20px;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 4px;
  background-color: white;
  resize: none;
`;
export const Button = styled.button`
  whidth: 10%;
  text-align: center;
  background-color: #3f51b5;
  color: #ffffff;
  transition-duration: 0.5s;
  margin: auto;
  width: 30%;
  padding: 10px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  float: center;
  :hover {
    background-color: #002984;
    color: #ffffff;
  }
`;
