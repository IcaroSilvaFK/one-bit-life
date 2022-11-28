import { StatusBar } from 'expo-status-bar';
import { Screens } from './src/routes';

export default function App() {
  return (
    <>
      <StatusBar style='light' translucent animated />
      <Screens />
    </>
  );
}
