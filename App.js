import {createSwitchNavigator,createAppContainer} from 'react-navigation';

import HomeStack from './routes/Home.route';


const AppNavigator = createSwitchNavigator({
  Home: HomeStack
}, {
  initialRouteName: 'Home',
});
export default createAppContainer(AppNavigator)