// PopularJobCard.js
import React from 'react';
import { StyleSheet, Text, View, Image,} from 'react-native';

const PopularJobCard = ({ job }) => (
  <View style={styles.popularJobCard}>
    <View style={styles.first}>
        <Image source={ job.logo } style={styles.logo} />
        <View style={styles.jobDetails}>
            <Text style={styles.jobTitle}>{job.title}</Text>
            <Text style={styles.jobCompany}>{job.company}</Text>
        </View>
    </View>
    <View style={styles.second}>
        <Text style={styles.jobSalary}>{job.salary}</Text>
        <Text style={styles.jobLocation}>{job.location}</Text>
    </View>
  </View>
);



const styles = StyleSheet.create({
  popularJobCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 15,
    marginBottom: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  logo: {
    width: 40,
    height: 40,
    marginRight: 15,
  },
  first: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  second: {
    alignItems: 'flex-end',
    paddingLeft: 85,
  },
  jobDetails: {
    flex: 1,
  },
  jobTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  jobCompany: {
    fontSize: 14,
    color: '#6B7280',
  },
  jobSalary: {
    fontSize: 14,
    color: '#0D0D26',
  },
  jobLocation: {
    fontSize: 14,
    color: '#9CA3AF',
  },
});

export default PopularJobCard;
