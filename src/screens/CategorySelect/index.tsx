
import React from 'react';
import { FlatList } from 'react-native';

import {
  Container,
  Header,
  Title,
  CategoryItem,
  Icon,
  Name,
  Separator,
  Footer,
} from './styles';

import { categories } from '../../utils/categories';
import { Button } from '../../components';

export interface CategoryProps {
  key: string;
  name: string;
}

interface CategorySelectProps {
  category: CategoryProps;
  setCategory: (category: CategoryProps) => void;
  closeSelectCategory: () => void;
}

export function CategorySelect({
  category,
  closeSelectCategory,
  setCategory,
}: CategorySelectProps): JSX.Element {
  
  function handleCategorySelect(categoryItem: CategoryProps) {
    setCategory(categoryItem);
  }

  return (
    <Container>
      <Header>
        <Title>Categoria</Title>
      </Header>

      <FlatList
        data={categories}
        keyExtractor={item => item.key}
        style={{
          flex: 1,
          width: '100%',
        }}
        renderItem={({ item }) => (
          <CategoryItem
            isSelected={category.key === item.key}
            onPress={() => handleCategorySelect(item)}
          >
            <Icon name={item.icon} />

            <Name>{item.name}</Name>
          </CategoryItem>
        )}
        ItemSeparatorComponent={() => <Separator />}
      />

      <Footer>
        <Button title="Selecionar" onPress={closeSelectCategory} />
      </Footer>
    </Container>
  );
}