import styled from "styled-components";

export const Container = styled.div`
    background-color: snow;
`;

export const TableRow = styled.tr`
    display: table;
    table-layout: fixed;
    width: 100%;
    &:nth-child(2n + 1) td {
        background-color: #EBEBEB;
    };
`;

export const HeadingContainer = styled.div`
    display: flex;
    justify-content: center;
    font-weight: 600;
    margin-bottom: 1em;
`;

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 1em;
`;

export const TableHead = styled.thead`
    flex: 1;
    width: calc(100% - 0.9em);
    display: table;
    table-layout: fixed;
`;

export const ColumnName = styled.th`
    text-align: left;
`;