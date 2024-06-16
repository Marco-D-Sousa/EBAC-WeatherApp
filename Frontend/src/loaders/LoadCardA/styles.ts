import styled from "styled-components";

export const Container = styled.div`
    width: 786px;
    height: 424px;
    padding: 24px 32px;
    

    .cardA-title {
        width: 130px;
        height: 26px;
    }

    .cardA-subtitle {
        width: 192px;
        height: 24px;
        margin-top: 6px;
    }
    
    .loadList {
        display: flex;
    

        .loadList-Icon{
            width: 123px;
            height: 101px;
            margin-top: 70px;
        }

        .loadList-temperature{
            width: 150px;
            height: 88px;
            margin-top: 85px;
            margin-left: 10px;
        }

        .loadListCondition{
            margin-left: 25px;
            
            .loadListCondition-title{
                width: 318px;
                height: 30px;
                margin-top: 100px;            
            }

            .loadListCondition-subTitle{
                width: 228px;
                height: 27px;
                margin-top: 10px;                
            }
        }
    }

    .CardA-information{
        width: 286px;
        height: 25px;
        margin-top: 7px;
    }

    .loadConditions{
        display: flex;
        margin-top: 75px;

        .loadConditions-condition{
        width: 480px;
        height: 40px;
        
    }

        .loadConditions-button{
            width: 207px;
            height: 40px;
            margin-left: 15px;
            border-radius: 27px;
        }

    }

    
`
