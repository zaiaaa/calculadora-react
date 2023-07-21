import styled from 'styled-components'

export const Container = styled.div`

    width: 100%;
    height:100vh;
    background-color: #CACACA;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Roboto', sans-serif;
    `

export const Content = styled.div`
    background-color: #fff;
    width: 50%;
    padding: 0.8rem; 
    border-radius: 1rem;
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
 
`