// FeaturedJobCard.js
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';


const FeaturedJobCard = ({ job }) => (
  <View style={[styles.featuredJobCard, { backgroundColor: job.color }]}>
    <View style={styles.jobDetails}>
    <Image source={ job.logo } style={styles.jobIcon} />
      <View style={styles.second}>
        <Text style={styles.jobTitle}>{job.title}</Text>
        <Text style={styles.jobCompany}>{job.company}</Text>
      </View>
      
    </View>
    <View style={styles.first}>
        <Text style={styles.jobSalary}>{job.salary}</Text>
        <Text style={styles.jobLocation}>{job.location}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  featuredJobCard: {
    borderRadius: 15,
    padding: 20,
    marginRight: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    width: 300,
    height: 200,
  },
  first: {
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'flex-end',
    bottom: 0,
    paddingBottom: 10,
    justifyContent: 'space-between'
  },
  second: {
    paddingLeft: 20
  },
  jobIcon: {
   marginTop: 5,
   borderRadius: 5,
   width: 30,
   height: 30,
  },
  jobDetails: {
    color: '#fff',
    flexDirection: 'row'
  },
  jobTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  jobCompany: {
    fontSize: 14,
    color: '#e0e0e0',
  },
  jobSalary: {
    fontSize: 14,
    color: '#fff',
    marginTop: 10,
  },
  jobLocation: {
    fontSize: 14,
    color: '#e0e0e0',
    paddingLeft: 120
  },
});

export default FeaturedJobCard;
