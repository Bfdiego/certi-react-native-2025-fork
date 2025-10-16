import { View, StyleSheet } from 'react-native';
import { CATEGORIES } from '../data/categories';
import React,  { useState }  from 'react';
import { Filter } from './Filter';
export const Filters = () => {
    const [categories, setCategories] = useState(CATEGORIES);
    const selectCategories = (category: { name: string; active: boolean }) => {
        const newCategories = categories.map(cat => {
          if (cat.name === category.name) {
            return { ...cat, active: !cat.active };
          }
          return cat;
        });
        setCategories(newCategories);
      };

    return (
        <View style={styles.container}>
            {
                categories.length > 0 && categories.map(
                    (category, index) => {
                        return (
                            <Filter
                                key={`${category.name}-${index}`}
                                cat={category}
                                index={index}
                                selectCategory={selectCategories}
                            />
                        )

                    }
                )
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        marginLeft: 5,
        flexDirection: 'row',
        flexWrap: 'wrap'
    }
})