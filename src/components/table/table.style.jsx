import styled from 'styled-components'

let widthTable = '70em'

const Container = styled.div(() => ({
    borderWidth: 0.3,
    borderStyle: 'solid',
    borderColor: '#e5e5e5',
    fontFamily: 'sans-serif',
    // display: 'table',
    height: '25em',
}))

const ScrollView = styled.div(() => ({
    borderWidth: 0.3,
    borderStyle: 'solid',
    borderColor: '#e5e5e5',
    fontFamily: 'sans-serif',
    // display: 'table',
    height: '25em',
    overflow: 'auto'
}))

const HeaderRow = styled.div((props) => ({
    display: 'flex',
    paddingLeft: 10,
    flexDirection: 'row',
    borderColor: 'red',
    borderWidth: 10,
    backgroundColor: '#ffffff',
    width: widthTable,
    justifyContent: 'space-around',
    alignItems: 'center'
}))

const ItemRow = styled.div((props) => ({
    paddingLeft: 10,
    display: 'flex',
    flexDirection: 'row',
    borderColor: '#fff',
    borderWidth: 1,
    width: widthTable,
    justifyContent: 'space-around',
    backgroundColor: props.index % 2 == 1 ? '#ffffff' : '#caf0f8',
    alignItems: 'center'
}))

const ColumnTitle = styled.div((props) => ({
    textAlign: 'left',
    fontSize: 13,
    flex: 1,
    padding: 5,
    fontWeight: 'bold',
    flexDirection: 'row',
}))

const ColumnItem = styled.div((props) => ({
    textAlign: 'left',
    fontSize: 12,
    flex: 1,
    padding: 5,
    flexDirection: 'row',
}))

export { Container,HeaderRow, ColumnTitle, ColumnItem, ItemRow, ScrollView }