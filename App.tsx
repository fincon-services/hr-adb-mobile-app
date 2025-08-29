import { Provider } from 'react-redux';
import RootNavigation from './src/navigation';
import { store } from './src/store/configureStore';
import { SafeAreaProvider } from 'react-native-safe-area-context';

function App() {
  ///
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <RootNavigation />
      </Provider>
    </SafeAreaProvider>
  );
}

export default App;
