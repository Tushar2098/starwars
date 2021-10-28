import { Dropdown, SearchBox, Stack } from '@fluentui/react';
import { useCallback, useEffect, useState } from 'react';
import { API } from '../services/api';
import { entityTransformFields } from '../utils';
import EntityList from './List';

export default function Home() {
  const stackTokens = { childrenGap: 20 };
  const inputStyles = { root: { width: '100%' } };
  const dropdownStyles = { dropdown: { width: 200 } };
  const [searchInput, setSearchInput] = useState();
  const [entities, setEntities] = useState([]);
  const [selectedEntityType, setSelectedEntityType] = useState('people');

  const dropdownItems = [
    { text: 'People', key: 'people' },
    { text: 'Planets', key: 'planets' },
    { text: 'Starships', key: 'starships' },
  ];

  const onInputChange = (value) => {
    setSearchInput(value);
  };

  const onEntityTypeChange = (evt, item) => {
    setSelectedEntityType(item.key);
  };

  const transform = useCallback((data, entityType) => {
    return data.map((d) => {
      const result = {};
      Object.keys(d).forEach((key) => {
        if (entityTransformFields[entityType].indexOf(key) !== -1) {
          result[key] = d[key];
        }
      });
      return result;
    });
  }, []);

  useEffect(() => {
    if (searchInput) {
      API.search(selectedEntityType, searchInput).then((response) => {
        const updatedResponse = transform(response.data.results, selectedEntityType);
        setEntities(updatedResponse);
      });
    }
    return () => {
      console.log('Cleanup!!');
    };
  }, [searchInput, selectedEntityType, transform]);

  return (
    <Stack tokens={stackTokens}>
      <div className='flex flex-end'>
        <Dropdown
          label='Select Entity to Search'
          selectedKey={selectedEntityType}
          placeholder='Select an option'
          onChange={onEntityTypeChange}
          options={dropdownItems}
          styles={dropdownStyles}
        />
        <SearchBox
          placeholder='Search'
          underlined={true}
          styles={inputStyles}
          onChange={({ target }) => onInputChange(target.value)}
          value={searchInput}
        />
      </div>

      <EntityList entities={entities}></EntityList>
    </Stack>
  );
}
