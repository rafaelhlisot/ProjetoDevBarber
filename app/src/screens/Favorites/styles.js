import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #63C2D1;
`;

export const HeaderArea = styled.View`
    justify-content: center;
    height: 50px;
    padding: 0px 20px;
`;

export const HeaderTitle = styled.Text`
    font-size: 18px;
    color: #FFF;
    font-weight: bold;
    text-align: left;
`;

export const Scroller = styled.ScrollView`
    flex: 1;
    padding: 0px 20px;
`;

export const ListArea = styled.View`
    margin-top: 20px;
    margin-bottom: 20px;
`;

export const EmptyWarning = styled.Text`
    text-align: center;
    margin-top: 30px;
    color: #FFF;
    font-size: 14px;
`;