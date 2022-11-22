import styled from "styled-components";

export const Formik = styled.form`
  input {
    background: #eeeded;
    /* Base/Button */

    border: 1px solid #e6e5e5;
    border-radius: 4px;
    margin-top: 20px;
    height: 42px;
    text-indent: 10px;
    /* margin-right: 40px; */
  }

  & > div:nth-child(1) {
    input {
      width: 200px;
    }
  }
  & > div:nth-child(2) {
    input {
      width: 100%;
      box-sizing: border-box;
      }
  }

  & > div:nth-child(3) {
    
    display:flex;
    gap: 12px;

    & > input:nth-child(1) {
      width: 200px;
      /* margin-right: 12px; */
    }

    & > input:last-child {
      /* padding: 0 0 0 12px; */
      width: 340px;
    }
  }

  & > div:nth-child(4) {

    display: flex;
    gap: 12px;
    align-items: flex-end;


    & > input:nth-child(1){
      width: 200px;


    }

    & > input:nth-child(2){
      width: 290px;

    }
    & > input:nth-child(3){
      width: 60px;

    }
  }
`;
