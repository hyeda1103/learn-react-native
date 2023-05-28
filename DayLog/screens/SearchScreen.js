import React, {useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import EmptySearchResult from 'components/EmptySearchResult';
import FeedList from 'components/FeedList';
import LogContext from 'contexts/LogContext';
import SearchContext from 'contexts/SearchContext';

function SearchScreen({navigation}) {
  const {keyword} = useContext(SearchContext);
  const {logs} = useContext(LogContext);

  const filteredItems = logs.filter(log =>
    [log.title, log.body].some(text => text.includes(keyword)),
  );

  const filtered = keyword === '' ? [] : filteredItems;

  if (keyword === '') {
    return <EmptySearchResult type="EMPTY_KEYOWRD" />;
  }

  if (filtered.length === 0) {
    return <EmptySearchResult type="NOT_FOUND" />;
  }

  return (
    <View style={styles.block}>
      <FeedList logs={filtered} />
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
});

export default SearchScreen;
