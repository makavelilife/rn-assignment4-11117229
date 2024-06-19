import React from 'react';
import { StyleSheet, Text, TextInput, View, ScrollView, Image, Pressable } from 'react-native';
import FeaturedJobCard from '../Cards/FeaturedJobCard';
import PopularJobCard from '../Cards/PopularJobCard';
import { Ionicons } from '@expo/vector-icons';



const HomeScreen = ({ route }) => {
  const { name, email } = route.params;

  // Example job data
  const featuredJobs = [
    { title: 'Software Engineer', company: 'Facebook', salary: '$180,000', location: 'Accra, Ghana', logo: require('../assets/facebook.png'), color: '#4267B2' },
    { title: 'Product Manager', company: 'Google', salary: '$160,000', location: 'San Francisco, CA', logo: require('../assets/google.png'), color: '#060229' },
    // Add more job data here
  ];

  const popularJobs = [
    { title: 'Jr Executive', company: 'Burger King', salary: '$96,000/y', location: 'Los Angeles, US', logo: require('../assets/burger.png'), color: '#FF6F00' },
    { title: 'Product Manager', company: 'Beats', salary: '$84,000/y', location: 'Florida, US', logo: require('../assets/beats.png'), color: '#E53935' },
    { title: 'Product Manager', company: 'Facebook', salary: '$86,000/y', location: 'Florida, US', logo: require('../assets/facebook.png'), color: '#4267B2' },
    // Add more job data here
  ];

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <Pressable>
        <View style={styles.header}>
          <View>
            <Text style={styles.userName}>{name}</Text>
            <Text style={styles.userEmail}>{email}</Text>
          </View>
          <Image style={styles.profileImage} source={require('../assets/profile.png')} />
        </View>

        <View style={styles.searchContainer}>
          <Ionicons name="search-outline" size={20} color="#6B7280" />
          <TextInput
            style={styles.searchInput}
            placeholder="Search a job or position"
            placeholderTextColor="#6B7280"
          />
          {/* Optional additional icon/button on the right side */}
          <Ionicons name="options-outline" size={20} color="#6B7280" style={styles.filterIcon} />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Featured Jobs</Text>
          <Text style={styles.seeAll}>See all</Text>
        </View>
        <ScrollView horizontal style={styles.jobList}>
          {featuredJobs.map((job, index) => (
            <FeaturedJobCard key={index} job={job} />
          ))}
        </ScrollView>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Popular Jobs</Text>
          <Text style={styles.seeAll}>See all</Text>
        </View>
        <ScrollView>
          <View style={styles.jobList}>
            {popularJobs.map((job, index) => (
              <PopularJobCard key={index} job={job} />
            ))}
          </View>
        </ScrollView>
      </Pressable>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
    paddingTop: 20
  },
  contentContainer: {
    padding:20,
    paddingTop: 20
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 40,
  },
  userName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  userEmail: {
    fontSize: 16,
    color: '#6B7280',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E5E7EB',
    borderRadius: 10,
    padding: 10,
    marginbuttom:10,
  },
  searchInput: {
    marginLeft: 10,
    fontSize: 16,
    flex: 1,
    color: '#374151',
  },
  filterIcon: {
    marginLeft: 10,
  },
  section: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  seeAll: {
    fontSize: 14,
    color: '#95969D',
  },
  jobList: {
    marginBottom: 20,
  },
});

export default HomeScreen;
