import styled from 'styled-components';

export const ScrollerWrapper = styled.div`
    @media screen and (max-width: 834px) {
        overflow:auto;
        
        &::-webkit-scrollbar {
        height: 8px;
        }

        &::-webkit-scrollbar-thumb {
        background-color: rgb(255, 255, 255, 0.1);
        border-radius: 12px;
        }

        &::-webkit-scrollbar-track {
        background-color: rgb(15, 15, 15, 1);
        }
    }
`

export const Overflow = styled.div`
    background: var(--layout-color);
    padding: 24px 21px 36px;
    border-radius: 12px;
    
    @media screen and (min-width: 834px) and (max-width: 1439px) {
        padding-bottom: 44px;
    }
    
    @media screen and (max-width: 834px){
        margin-bottom: 8px;
        padding:0px;
        background-color: transparent;
    }
    
`

export const CaloriesSectionhWrapper = styled.div`
    margin-top: 16px;
    
`
export const CaloriesHeadingWrapper = styled.div`
    display: flex;
    align-items: baseline;
    margin-bottom: 6px;
    justify-content: space-between;
`
export const CaloriesHeader = styled.h2`
    font-family: Poppins;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 32px;  
    margin-right: 40px;
    @media screen and (max-width: 834px) {
        /* margin-right: 77px; */
        font-size: 18px;
        line-height: 26px;
    }
`

export const HeaderData = styled.div`
    display: flex;
`

export const СaloriesGraphWrapper = styled.div`
    border-radius: 12px;
    background:var(--layout-color);
    padding-left: 15px;
    padding-top: 25px;
    padding-right: 15px;
    padding-bottom: 25px;
    min-width: 676px;
    min-height: 382px;
    /* width: 676px; */
    /* height: 382px; */
    flex-shrink: 0;
    /* width: 320px; */
    /* max-width: 320px; */
`

export const TestForDiv = styled.div`
    /* width:676px; */
    height: 323px;
`

export const CaloriesAverageTitle = styled.p`
    color:var(--primary-title-text-color);
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; 
    margin-right: 8px;
`

export const CaloriesAverageNumber = styled.p`
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
`