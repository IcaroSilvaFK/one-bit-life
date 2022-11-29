import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Explanation } from '../../screens/Explanation';
import { Home } from '../../screens/Home';
import { Main } from '../../screens/Main';

const { Navigator, Screen } = createNativeStackNavigator();

export function Stack() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name='home' component={Home} />
      <Screen name='explanation' component={Explanation} />
      <Screen name='main' component={Main} />
    </Navigator>
  );
}
