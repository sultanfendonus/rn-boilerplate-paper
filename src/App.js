import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Avatar} from 'react-native-paper';
import {Button, Text} from 'react-native-paper';
import {Paragraph, Dialog, Portal} from 'react-native-paper';
import {Appbar} from 'react-native-paper';

const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;
const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';

const App: () => React$Node = (props) => {
  const [visible, setVisible] = React.useState(false);
  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);

  return (
    <>
      <StatusBar backgroundColor="#9c2bdb" barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Appbar.Header>
            <Appbar.BackAction onPress={() => {}} />
            <Appbar.Content title="Title" subtitle={'Subtitle'} />
            <Appbar.Action icon={MORE_ICON} onPress={() => {}} />
          </Appbar.Header>

          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              margin: 10,
              justifyContent: 'center',
            }}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
              }}>
              <Button
                style={{marginRight: 20}}
                icon="camera"
                mode="contained"
                onPress={showDialog}>
                Press me
              </Button>

              <Button
                icon="camera"
                mode="contained"
                onPress={() => props.navigation.navigate('Details')}>
                Press me
              </Button>
            </View>
          </View>

          <Portal>
            <Dialog visible={visible} onDismiss={hideDialog}>
              <Dialog.Title>Alert</Dialog.Title>
              <Dialog.Content>
                <Paragraph>This is simple dialog</Paragraph>
              </Dialog.Content>
              <Dialog.Actions>
                <Button onPress={hideDialog}>Cancel</Button>
                <Button onPress={hideDialog} mode="contained">
                  Save
                </Button>
              </Dialog.Actions>
            </Dialog>
          </Portal>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
