import styled from 'styled-components'
import Fab from '@material-ui/core/Fab'

// export const FeedPageContainer = styled.div`
// //  display: flex;
// //  justify-content: clumn
// //   border: solid 3px black;
// //   width: 70vh;
// //   height: 350px;
// //   text-align: center;
// //   margin: 30px;

// display: flex;

//   flex-direction: column;
 
//   justify-content: center;
//   align-items: center;
//   width: 350px;
//   margin-left: 2%;
//   //heigth: 300px;
//   margin-top: 5vh;
//   border: solid 1px black;
// `


export const FeedPageContainer = styled.div`
  //display: flex;
  justify-content: center;
  text-align: center;
  flex-direction: row;
  flex-wrap: wrap;
  border: solid 1px black;
  margin: 30px;
`

export const AddComentarioButton = styled(Fab)`
  position: fixed !important;
  right: 20px;
  bottom: 20px;
  z-index: 3;
`