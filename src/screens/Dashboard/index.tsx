import React from 'react'

import { Feather } from '@expo/vector-icons'

import { 
    Container, 
    Header,
    UserWrapper,
    UserInfo,
    Photo,
    User,
    UserGreeting,
    UserName,
    Icon,
    HighlightCards,
    Transactions,
    Title,
    TransactionsList,
    LogoutButton
} from './styles';
import { HighlightCard, TransactionCard, TransactionCardProps } from '../../components';


export interface DataListProps extends TransactionCardProps {
    id: string;
}

export default function Dashboard() {
    const data: DataListProps[] = [{
        id: '1',
        type: 'positive',
        title: "Desenvolvimento de site",
        amount:"R$ 12.000,00",
        category:{
            name: "Vendas",
            icon: "dollar-sign"
        },
        date:"13/04/2020"
    },
    {
        id: '2',
        type: 'negative',
        title: "Hamburgui",
        amount:"R$ 59,00",
        category:{
            name: "Alimentação",
            icon: "coffee"
        },
        date:"13/04/2020"
    },
    {
        id: '3',
        type: 'negative',
        title: "Aluguel do apartamento",
        amount:"R$ 1.200,00",
        category:{
            name: "Casa",
            icon: "shopping-bag"
        },
        date:"13/04/2020"
    }
]
    return (
        <Container>
            <Header>
                <UserWrapper>
                    <UserInfo>
                        <Photo 
                            source={{ uri: 'https://avatars.githubusercontent.com/u/51422234?v=4' }}
                        />
                        <User>
                            <UserGreeting>
                                Olá,
                            </UserGreeting>
                            <UserName>
                                André
                            </UserName>
                        </User>
                    </UserInfo>
                    <LogoutButton onPress={() => {}}>
                        <Icon name="power"/>
                    </LogoutButton>
                </UserWrapper>

            </Header>
            <HighlightCards> 
                <HighlightCard 
                    title="Entradas"
                    amount="R$ 17.400,00"
                    lastTransaction="Última entrada em 13 de abril"
                    type="up"
                />
                <HighlightCard 
                    title="Saídas"
                    amount="R$ 1.259,00"
                    lastTransaction="Última saída em 03 de abril"
                    type="down"
                />
                <HighlightCard 
                    title="Total"
                    amount="R$ 16.141,00"
                    lastTransaction="01 á 16 de abril"
                    type="total"
                />
            </HighlightCards>
            <Transactions>
                <Title>
                    Listagem
                </Title>
                <TransactionsList 
                    data={data}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => <TransactionCard data={item}/>}
                    
                />
            </Transactions>
        </Container>
    )
}
