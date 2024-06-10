import styled from 'styled-components';
import { colors } from "../../styles/colors";

export const Header = styled.header`
    background-color: ${colors.daysList};
    /* Ver a possibilidade de aumentar o height: 80px; e demais espaçamentos */
    width:1440px;
    height: 68px;
    border-radius: 20px;
    align-items: center;
    text-align: center;
    display: flex;
    justify-content: space-around;
    margin-top:40px ;
    margin-left: 5px;
    margin-bottom: 44px;
    
    
    
    
    .logo{
        display: flex;
        width: 136px;
        height: 48px;
        margin-top: 10px;
        margin-left: 0;
        margin-bottom: 16px;      
    }

    .formButton {    
        border-radius: 16px;
        display: flex;
        cursor: pointer; 
        
        .form{    
            height: 30px;
            width: 170px;
            text-align: center;
            border-radius: 16px;
            border-left:px;
            border-width: 1px;  
        }
    
        .button{            
            height: 30px;
            width: 65px;
            text-align: center;
            border-radius: 16px;
            cursor: pointer;
            background-color: #BCBCBC;
        }
    } 

        .localizacao{            
            background-color:#BCBCBC ;
            height: 30px;
            width:85px;
            justify-content: end;
            border-radius: 16px;
            cursor: pointer;                  
        }   
`

export const Title = styled.h3`
    color: #000;
    text-align: left;

`




