import React from 'react';
import { ScrollView, View } from 'react-native';
import styles from './home.style';
import Menu from './Menu';
import UserAttendanceStats from './UserAttendanceStats';
import UserHomeCard from './UserHomeCard';

const Home = () => {
  //Main Return
  return (
    <ScrollView style={styles.container}>
      <UserHomeCard />
      <UserAttendanceStats />
      <Menu />
    </ScrollView>
  );
};

export default Home;
