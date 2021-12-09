import { Container, ScrollView, HeaderRow, ColumnTitle, ColumnItem, ItemRow } from './table.style';
import { Button } from '../button'

//recebe como parametro (propriedade) os elementos header, list, updateItem e deleteItem
const Table = ({ header, list, updateItem, deleteItem }) => {

    let keys = Object.keys(list[0]? list[0]: {})

    //Monta tabela
    return (
        <Container>
            <HeaderRow>
                {header.map((item) => { // header e item é os dados vindo na propriedade, aqui nós relacionamos as colunas com as linhas
                    return <ColumnTitle>{item}</ColumnTitle>
                })}
            </HeaderRow>
            <ScrollView>


                {list.map((itemObj, index) => {
                    return (<ItemRow key={index} index={index}>
                        {
                            keys.map((item) => { //Adiciona os elementos da linha em sua determinada coluna
                                return <ColumnItem>{itemObj[item]}</ColumnItem>
                            })

                        } 
                        <ColumnItem> 
                            <Button style={{ marginRight: 10 }} label={'Editar'} variant={'primary'} onClick={updateItem} />
                            <Button label={'Deletar'} variant={'secondary'} onClick={deleteItem} />
                        </ColumnItem>
                    </ItemRow>)
                })}
                

            </ScrollView>
        </Container>

    );
}
export { Table }