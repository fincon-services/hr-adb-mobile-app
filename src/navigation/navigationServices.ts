// navigationService.ts
import {
  CommonActions,
  createNavigationContainerRef,
  StackActions,
} from '@react-navigation/native';
import type { AppStackParamList, AuthStackParamList } from './navigationTypes';

// Combine your root stack types here
// If using nested navigators, consider creating a RootStackParamList that includes them all
export type RootStackParamList = AppStackParamList & AuthStackParamList;

export const navigationRef = createNavigationContainerRef<RootStackParamList>();

// Navigate
export function navigate<RouteName extends keyof RootStackParamList>(
  name: RouteName,
  params?: RootStackParamList[RouteName],
) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
}

// Replace current screen
export function replace<RouteName extends keyof RootStackParamList>(
  name: RouteName,
  params?: RootStackParamList[RouteName],
) {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(StackActions.replace(name, params));
  }
}

// Push to stack
export function push<RouteName extends keyof RootStackParamList>(
  name: RouteName,
  params?: RootStackParamList[RouteName],
) {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(StackActions.push(name, params));
  }
}

// Go back
export function goBack() {
  if (navigationRef.isReady() && navigationRef.canGoBack()) {
    navigationRef.goBack();
  }
}

// Get current route
export function getCurrentRoute() {
  return navigationRef.getCurrentRoute();
}

// General reset to any screen
export function reset<RouteName extends keyof RootStackParamList>(
  name: RouteName,
  params?: RootStackParamList[RouteName],
) {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name, params }],
      }),
    );
  }
}

// Custom: Reset after login → Home
export const navigateToAppStack = () => {
  navigationRef.current?.dispatch(
    CommonActions.reset({
      index: 0,
      routes: [
        {
          name: 'AppStack',
          state: {
            index: 0,
            routes: [{ name: 'Home' }],
          },
        },
      ],
    }),
  );
};

// Custom: Reset after logout → SignIn
export function navigateToAuthStack() {
  navigationRef.current?.dispatch(
    CommonActions.reset({
      index: 0,
      routes: [{ name: 'SignIn' }],
    }),
  );
}

// export function navigate<RouteName extends keyof RootStackParamList>(
//   name: RouteName,
//   params?: RootStackParamList[RouteName],
// ) {
//   if (navigationRef.isReady()) {
//     navigationRef.navigate(name, params);
//   }
// }

// export const navigateToAppStack = () => {
//   navigationRef.current?.dispatch(
//     CommonActions.reset({
//       index: 0,
//       routes: [
//         {
//           name: 'AppStack',
//           state: {
//             index: 0,
//             routes: [{ name: 'Home' }],
//           },
//         },
//       ],
//     }),
//   );
// };

// export function replace<RouteName extends keyof RootStackParamList>(
//   name: RouteName,
//   params?: RootStackParamList[RouteName],
// ) {
//   if (navigationRef.isReady()) {
//     navigationRef.dispatch(StackActions.replace(name, params));
//   }
// }

// export function reset(
//   routeName: keyof RootStackParamList,
//   params?: RootStackParamList[typeof routeName],
// ) {
//   if (navigationRef.isReady()) {
//     navigationRef.dispatch(
//       CommonActions.reset({
//         index: 0,
//         routes: [{ name: routeName, params }],
//       }),
//     );
//   }
// }

// export function goBack() {
//   if (navigationRef.isReady() && navigationRef.canGoBack()) {
//     navigationRef.goBack();
//   }
// }

// export function getCurrentRoute() {
//   return navigationRef.getCurrentRoute();
// }

// export function push<RouteName extends keyof RootStackParamList>(
//   name: RouteName,
//   params?: RootStackParamList[RouteName],
// ) {
//   if (navigationRef.isReady()) {
//     navigationRef.dispatch(StackActions.push(name, params));
//   }
// }
