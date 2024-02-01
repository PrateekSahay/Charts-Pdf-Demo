const studentData = [
    {
      "name": "Dev Smith",
      "age": 21,
      "date_of_birth": "2019-08-07",
      "city": "Ahmedabad",
      "grades": {
        "Math": 67,
        "Science": 69,
        "English": 62,
        "History": 78,
        "Programming": 68
      }
    },
    {
      "name": "Ritvik Miller",
      "age": 20,
      "date_of_birth": "2014-04-18",
      "city": "Mumbai",
      "grades": {
        "Math": 68,
        "Science": 83,
        "English": 80,
        "History": 69,
        "Programming": 77
      }
    },
    {
      "name": "Ishaan Nelson",
      "age": 20,
      "date_of_birth": "2021-06-18",
      "city": "Kolkata",
      "grades": {
        "Math": 77,
        "Science": 81,
        "English": 74,
        "History": 92,
        "Programming": 81
      }
    },
    {
      "name": "Sanya Patel",
      "age": 21,
      "date_of_birth": "2015-01-29",
      "city": "Bangalore",
      "grades": {
        "Math": 87,
        "Science": 74,
        "English": 93,
        "History": 95,
        "Programming": 67
      }
    },
    {
      "name": "Myra Rodriguez",
      "age": 20,
      "date_of_birth": "2020-06-06",
      "city": "Bangalore",
      "grades": {
        "Math": 100,
        "Science": 95,
        "English": 95,
        "History": 92,
        "Programming": 81
      }
    },
    {
      "name": "Ishita Jackson",
      "age": 18,
      "date_of_birth": "2015-07-01",
      "city": "Pune",
      "grades": {
        "Math": 89,
        "Science": 89,
        "English": 78,
        "History": 79,
        "Programming": 79
      }
    },
    {
      "name": "Vihaan Williams",
      "age": 20,
      "date_of_birth": "2004-10-02",
      "city": "Pune",
      "grades": {
        "Math": 92,
        "Science": 98,
        "English": 71,
        "History": 81,
        "Programming": 61
      }
    },
    {
      "name": "Aanya Perez",
      "age": 18,
      "date_of_birth": "2012-09-18",
      "city": "Bangalore",
      "grades": {
        "Math": 91,
        "Science": 61,
        "English": 80,
        "History": 82,
        "Programming": 87
      }
    },
    {
      "name": "Dev Johnson",
      "age": 19,
      "date_of_birth": "2021-01-03",
      "city": "Kolkata",
      "grades": {
        "Math": 73,
        "Science": 90,
        "English": 87,
        "History": 73,
        "Programming": 63
      }
    },
    {
      "name": "Dev Taylor",
      "age": 20,
      "date_of_birth": "2020-11-08",
      "city": "Delhi",
      "grades": {
        "Math": 81,
        "Science": 93,
        "English": 71,
        "History": 90,
        "Programming": 69
      }
    },
    {
      "name": "Shlok Young",
      "age": 20,
      "date_of_birth": "2008-12-29",
      "city": "Delhi",
      "grades": {
        "Math": 75,
        "Science": 94,
        "English": 81,
        "History": 99,
        "Programming": 63
      }
    },
    {
      "name": "Advait Walker",
      "age": 20,
      "date_of_birth": "2005-10-30",
      "city": "Hyderabad",
      "grades": {
        "Math": 76,
        "Science": 78,
        "English": 65,
        "History": 73,
        "Programming": 66
      }
    },
    {
      "name": "Aryan Davis",
      "age": 20,
      "date_of_birth": "2014-01-18",
      "city": "Chennai",
      "grades": {
        "Math": 77,
        "Science": 78,
        "English": 68,
        "History": 72,
        "Programming": 73
      }
    },
    {
      "name": "Ananya Mukherjee",
      "age": 19,
      "date_of_birth": "2006-10-04",
      "city": "Delhi",
      "grades": {
        "Math": 89,
        "Science": 87,
        "English": 63,
        "History": 90,
        "Programming": 91
      }
    },
    {
      "name": "Arnav Smith",
      "age": 21,
      "date_of_birth": "2012-04-11",
      "city": "Chennai",
      "grades": {
        "Math": 91,
        "Science": 90,
        "English": 83,
        "History": 77,
        "Programming": 84
      }
    },
    {
      "name": "Shaurya King",
      "age": 19,
      "date_of_birth": "2022-04-05",
      "city": "Hyderabad",
      "grades": {
        "Math": 69,
        "Science": 91,
        "English": 98,
        "History": 86,
        "Programming": 73
      }
    },
    {
      "name": "Rudra Green",
      "age": 18,
      "date_of_birth": "2021-03-04",
      "city": "Hyderabad",
      "grades": {
        "Math": 65,
        "Science": 66,
        "English": 63,
        "History": 63,
        "Programming": 92
      }
    },
    {
      "name": "Mia Patel",
      "age": 19,
      "date_of_birth": "2005-08-29",
      "city": "Kolkata",
      "grades": {
        "Math": 73,
        "Science": 86,
        "English": 68,
        "History": 83,
        "Programming": 70
      }
    },
    {
      "name": "Reyansh Taylor",
      "age": 21,
      "date_of_birth": "2003-05-01",
      "city": "Chennai",
      "grades": {
        "Math": 88,
        "Science": 73,
        "English": 64,
        "History": 79,
        "Programming": 66
      }
    },
    {
      "name": "Aarush Baker",
      "age": 21,
      "date_of_birth": "2011-12-21",
      "city": "Kolkata",
      "grades": {
        "Math": 64,
        "Science": 88,
        "English": 90,
        "History": 68,
        "Programming": 60
      }
    },
    {
      "name": "Atharva Phillips",
      "age": 18,
      "date_of_birth": "2022-07-02",
      "city": "Pune",
      "grades": {
        "Math": 62,
        "Science": 73,
        "English": 79,
        "History": 94,
        "Programming": 99
      }
    },
    {
      "name": "Arjun Mitchell",
      "age": 21,
      "date_of_birth": "2009-06-16",
      "city": "Bangalore",
      "grades": {
        "Math": 89,
        "Science": 63,
        "English": 83,
        "History": 83,
        "Programming": 73
      }
    },
    {
      "name": "Shlok Jones",
      "age": 20,
      "date_of_birth": "2018-11-26",
      "city": "Pune",
      "grades": {
        "Math": 94,
        "Science": 96,
        "English": 82,
        "History": 89,
        "Programming": 73
      }
    },
    {
      "name": "Neha Scott",
      "age": 21,
      "date_of_birth": "2009-02-12",
      "city": "Hyderabad",
      "grades": {
        "Math": 96,
        "Science": 81,
        "English": 77,
        "History": 77,
        "Programming": 74
      }
    },
    {
      "name": "Zoya Evans",
      "age": 21,
      "date_of_birth": "2004-10-02",
      "city": "Hyderabad",
      "grades": {
        "Math": 70,
        "Science": 91,
        "English": 72,
        "History": 79,
        "Programming": 91
      }
    },
    {
      "name": "Reyansh Martinez",
      "age": 18,
      "date_of_birth": "2018-12-05",
      "city": "Bangalore",
      "grades": {
        "Math": 95,
        "Science": 62,
        "English": 75,
        "History": 65,
        "Programming": 87
      }
    },
    {
      "name": "Aanya Lee",
      "age": 21,
      "date_of_birth": "2016-05-28",
      "city": "Bangalore",
      "grades": {
        "Math": 93,
        "Science": 66,
        "English": 87,
        "History": 91,
        "Programming": 77
      }
    },
    {
      "name": "Ishaan Smith",
      "age": 19,
      "date_of_birth": "2017-07-06",
      "city": "Bangalore",
      "grades": {
        "Math": 99,
        "Science": 69,
        "English": 98,
        "History": 63,
        "Programming": 63
      }
    },
    {
      "name": "Kavya Williams",
      "age": 21,
      "date_of_birth": "2019-02-20",
      "city": "Kolkata",
      "grades": {
        "Math": 68,
        "Science": 99,
        "English": 85,
        "History": 90,
        "Programming": 69
      }
    },
    {
      "name": "Zoya Martin",
      "age": 20,
      "date_of_birth": "2009-02-10",
      "city": "Kolkata",
      "grades": {
        "Math": 61,
        "Science": 73,
        "English": 73,
        "History": 88,
        "Programming": 63
      }
    },
    {
      "name": "Ishaan Martinez",
      "age": 19,
      "date_of_birth": "2013-06-20",
      "city": "Delhi",
      "grades": {
        "Math": 95,
        "Science": 100,
        "English": 62,
        "History": 65,
        "Programming": 72
      }
    },
    {
      "name": "Aaryan Verma",
      "age": 21,
      "date_of_birth": "2011-09-13",
      "city": "Hyderabad",
      "grades": {
        "Math": 72,
        "Science": 84,
        "English": 92,
        "History": 95,
        "Programming": 99
      }
    },
    {
      "name": "Tara Scott",
      "age": 20,
      "date_of_birth": "2011-05-29",
      "city": "Bangalore",
      "grades": {
        "Math": 64,
        "Science": 99,
        "English": 74,
        "History": 81,
        "Programming": 74
      }
    },
    {
      "name": "Veer Parker",
      "age": 18,
      "date_of_birth": "2013-04-19",
      "city": "Bangalore",
      "grades": {
        "Math": 82,
        "Science": 94,
        "English": 80,
        "History": 93,
        "Programming": 85
      }
    },
    {
      "name": "Sanya Verma",
      "age": 20,
      "date_of_birth": "2003-09-05",
      "city": "Mumbai",
      "grades": {
        "Math": 88,
        "Science": 66,
        "English": 84,
        "History": 85,
        "Programming": 69
      }
    },
    {
      "name": "Rudra Young",
      "age": 20,
      "date_of_birth": "2010-02-18",
      "city": "Kolkata",
      "grades": {
        "Math": 84,
        "Science": 74,
        "English": 93,
        "History": 82,
        "Programming": 91
      }
    },
    {
      "name": "Sofia Hernandez",
      "age": 21,
      "date_of_birth": "2003-04-05",
      "city": "Hyderabad",
      "grades": {
        "Math": 100,
        "Science": 67,
        "English": 62,
        "History": 89,
        "Programming": 88
      }
    },
    {
      "name": "Aditya Clark",
      "age": 19,
      "date_of_birth": "2006-11-17",
      "city": "Kolkata",
      "grades": {
        "Math": 81,
        "Science": 80,
        "English": 95,
        "History": 73,
        "Programming": 66
      }
    },
    {
      "name": "Vivaan Carter",
      "age": 19,
      "date_of_birth": "2015-01-12",
      "city": "Mumbai",
      "grades": {
        "Math": 79,
        "Science": 100,
        "English": 67,
        "History": 60,
        "Programming": 60
      }
    },
    {
      "name": "Advait Green",
      "age": 19,
      "date_of_birth": "2014-06-16",
      "city": "Hyderabad",
      "grades": {
        "Math": 66,
        "Science": 79,
        "English": 75,
        "History": 82,
        "Programming": 77
      }
    },
    {
      "name": "Shlok Lee",
      "age": 18,
      "date_of_birth": "2020-04-01",
      "city": "Chennai",
      "grades": {
        "Math": 65,
        "Science": 85,
        "English": 87,
        "History": 88,
        "Programming": 83
      }
    },
    {
      "name": "Aarush Patel",
      "age": 20,
      "date_of_birth": "2003-09-03",
      "city": "Delhi",
      "grades": {
        "Math": 62,
        "Science": 61,
        "English": 75,
        "History": 92,
        "Programming": 64
      }
    },
    {
      "name": "Dev Roberts",
      "age": 21,
      "date_of_birth": "2020-11-13",
      "city": "Pune",
      "grades": {
        "Math": 67,
        "Science": 65,
        "English": 61,
        "History": 66,
        "Programming": 92
      }
    },
    {
      "name": "Zoya Wilson",
      "age": 18,
      "date_of_birth": "2015-06-10",
      "city": "Pune",
      "grades": {
        "Math": 85,
        "Science": 78,
        "English": 61,
        "History": 79,
        "Programming": 63
      }
    },
    {
      "name": "Sarthak Jones",
      "age": 19,
      "date_of_birth": "2016-09-28",
      "city": "Mumbai",
      "grades": {
        "Math": 65,
        "Science": 67,
        "English": 80,
        "History": 83,
        "Programming": 79
      }
    },
    {
      "name": "Vihaan Turner",
      "age": 21,
      "date_of_birth": "2018-01-14",
      "city": "Mumbai",
      "grades": {
        "Math": 87,
        "Science": 68,
        "English": 74,
        "History": 90,
        "Programming": 85
      }
    },
    {
      "name": "Neha Garcia",
      "age": 18,
      "date_of_birth": "2022-03-12",
      "city": "Hyderabad",
      "grades": {
        "Math": 79,
        "Science": 72,
        "English": 80,
        "History": 67,
        "Programming": 97
      }
    },
    {
      "name": "Ishaan Moore",
      "age": 19,
      "date_of_birth": "2023-10-12",
      "city": "Chennai",
      "grades": {
        "Math": 76,
        "Science": 68,
        "English": 70,
        "History": 85,
        "Programming": 72
      }
    },
    {
      "name": "Ishaan Jackson",
      "age": 18,
      "date_of_birth": "2019-09-08",
      "city": "Pune",
      "grades": {
        "Math": 98,
        "Science": 67,
        "English": 100,
        "History": 71,
        "Programming": 81
      }
    },
    {
      "name": "Aarav Jones",
      "age": 19,
      "date_of_birth": "2022-10-17",
      "city": "Kolkata",
      "grades": {
        "Math": 84,
        "Science": 71,
        "English": 91,
        "History": 79,
        "Programming": 76
      }
    },
    {
      "name": "Myra Turner",
      "age": 21,
      "date_of_birth": "2023-05-25",
      "city": "Mumbai",
      "grades": {
        "Math": 88,
        "Science": 80,
        "English": 92,
        "History": 75,
        "Programming": 61
      }
    },
    {
      "name": "Aryan Anderson",
      "age": 19,
      "date_of_birth": "2007-07-07",
      "city": "Ahmedabad",
      "grades": {
        "Math": 90,
        "Science": 68,
        "English": 85,
        "History": 70,
        "Programming": 73
      }
    },
    {
      "name": "Veer Perez",
      "age": 19,
      "date_of_birth": "2018-09-29",
      "city": "Mumbai",
      "grades": {
        "Math": 92,
        "Science": 66,
        "English": 72,
        "History": 83,
        "Programming": 96
      }
    },
    {
      "name": "Krisha Hill",
      "age": 20,
      "date_of_birth": "2014-02-02",
      "city": "Ahmedabad",
      "grades": {
        "Math": 88,
        "Science": 62,
        "English": 88,
        "History": 77,
        "Programming": 96
      }
    },
    {
      "name": "Dev Davis",
      "age": 20,
      "date_of_birth": "2010-10-30",
      "city": "Chennai",
      "grades": {
        "Math": 61,
        "Science": 61,
        "English": 65,
        "History": 80,
        "Programming": 94
      }
    },
    {
      "name": "Vihan Young",
      "age": 21,
      "date_of_birth": "2013-11-17",
      "city": "Kolkata",
      "grades": {
        "Math": 74,
        "Science": 61,
        "English": 75,
        "History": 71,
        "Programming": 74
      }
    },
    {
      "name": "Aaryan Davis",
      "age": 21,
      "date_of_birth": "2012-03-18",
      "city": "Pune",
      "grades": {
        "Math": 97,
        "Science": 60,
        "English": 60,
        "History": 91,
        "Programming": 94
      }
    },
    {
      "name": "Aaliyah Davis",
      "age": 19,
      "date_of_birth": "2019-03-09",
      "city": "Pune",
      "grades": {
        "Math": 83,
        "Science": 94,
        "English": 63,
        "History": 75,
        "Programming": 79
      }
    },
    {
      "name": "Shaurya Thompson",
      "age": 19,
      "date_of_birth": "2017-03-26",
      "city": "Bangalore",
      "grades": {
        "Math": 90,
        "Science": 96,
        "English": 78,
        "History": 60,
        "Programming": 86
      }
    },
    {
      "name": "Ishaan Patel",
      "age": 21,
      "date_of_birth": "2023-12-02",
      "city": "Delhi",
      "grades": {
        "Math": 99,
        "Science": 71,
        "English": 87,
        "History": 91,
        "Programming": 88
      }
    },
    {
      "name": "Rohan Roberts",
      "age": 20,
      "date_of_birth": "2011-05-25",
      "city": "Hyderabad",
      "grades": {
        "Math": 79,
        "Science": 84,
        "English": 71,
        "History": 73,
        "Programming": 100
      }
    },
    {
      "name": "Aaradhya Edwards",
      "age": 20,
      "date_of_birth": "2014-03-26",
      "city": "Chennai",
      "grades": {
        "Math": 75,
        "Science": 87,
        "English": 66,
        "History": 100,
        "Programming": 83
      }
    },
    {
      "name": "Arjun Davis",
      "age": 19,
      "date_of_birth": "2003-10-19",
      "city": "Chennai",
      "grades": {
        "Math": 66,
        "Science": 92,
        "English": 69,
        "History": 97,
        "Programming": 64
      }
    },
    {
      "name": "Vihan Lee",
      "age": 21,
      "date_of_birth": "2023-12-20",
      "city": "Bangalore",
      "grades": {
        "Math": 75,
        "Science": 93,
        "English": 97,
        "History": 66,
        "Programming": 96
      }
    },
    {
      "name": "Vivaan Edwards",
      "age": 18,
      "date_of_birth": "2021-10-06",
      "city": "Bangalore",
      "grades": {
        "Math": 71,
        "Science": 67,
        "English": 64,
        "History": 95,
        "Programming": 82
      }
    },
    {
      "name": "Ananya Miller",
      "age": 20,
      "date_of_birth": "2005-03-11",
      "city": "Kolkata",
      "grades": {
        "Math": 76,
        "Science": 83,
        "English": 96,
        "History": 96,
        "Programming": 64
      }
    },
    {
      "name": "Kian Johnson",
      "age": 18,
      "date_of_birth": "2012-01-04",
      "city": "Chennai",
      "grades": {
        "Math": 83,
        "Science": 85,
        "English": 87,
        "History": 86,
        "Programming": 91
      }
    },
    {
      "name": "Krisha Gupta",
      "age": 19,
      "date_of_birth": "2016-07-22",
      "city": "Delhi",
      "grades": {
        "Math": 62,
        "Science": 75,
        "English": 61,
        "History": 91,
        "Programming": 65
      }
    },
    {
      "name": "Sofia Malhotra",
      "age": 21,
      "date_of_birth": "2013-03-10",
      "city": "Pune",
      "grades": {
        "Math": 78,
        "Science": 63,
        "English": 69,
        "History": 62,
        "Programming": 100
      }
    },
    {
      "name": "Aaradhya Perez",
      "age": 18,
      "date_of_birth": "2011-07-20",
      "city": "Delhi",
      "grades": {
        "Math": 95,
        "Science": 96,
        "English": 82,
        "History": 67,
        "Programming": 64
      }
    },
    {
      "name": "Ishita Martinez",
      "age": 20,
      "date_of_birth": "2008-07-15",
      "city": "Bangalore",
      "grades": {
        "Math": 67,
        "Science": 88,
        "English": 85,
        "History": 91,
        "Programming": 69
      }
    },
    {
      "name": "Sara Roberts",
      "age": 21,
      "date_of_birth": "2015-09-04",
      "city": "Delhi",
      "grades": {
        "Math": 92,
        "Science": 95,
        "English": 70,
        "History": 99,
        "Programming": 72
      }
    },
    {
      "name": "Ananya Mitchell",
      "age": 21,
      "date_of_birth": "2012-12-28",
      "city": "Delhi",
      "grades": {
        "Math": 96,
        "Science": 85,
        "English": 70,
        "History": 89,
        "Programming": 83
      }
    },
    {
      "name": "Aarush Evans",
      "age": 18,
      "date_of_birth": "2003-03-20",
      "city": "Pune",
      "grades": {
        "Math": 83,
        "Science": 77,
        "English": 81,
        "History": 71,
        "Programming": 92
      }
    },
    {
      "name": "Neha Smith",
      "age": 18,
      "date_of_birth": "2015-03-28",
      "city": "Delhi",
      "grades": {
        "Math": 94,
        "Science": 68,
        "English": 66,
        "History": 78,
        "Programming": 86
      }
    },
    {
      "name": "Aarush Martinez",
      "age": 19,
      "date_of_birth": "2014-03-04",
      "city": "Pune",
      "grades": {
        "Math": 90,
        "Science": 99,
        "English": 76,
        "History": 93,
        "Programming": 70
      }
    },
    {
      "name": "Sanya Turner",
      "age": 21,
      "date_of_birth": "2020-04-15",
      "city": "Delhi",
      "grades": {
        "Math": 77,
        "Science": 74,
        "English": 92,
        "History": 95,
        "Programming": 63
      }
    },
    {
      "name": "Ritvik Wilson",
      "age": 18,
      "date_of_birth": "2016-07-10",
      "city": "Delhi",
      "grades": {
        "Math": 79,
        "Science": 98,
        "English": 73,
        "History": 92,
        "Programming": 91
      }
    },
    {
      "name": "Shlok Young",
      "age": 19,
      "date_of_birth": "2017-10-08",
      "city": "Kolkata",
      "grades": {
        "Math": 60,
        "Science": 80,
        "English": 88,
        "History": 79,
        "Programming": 89
      }
    },
    {
      "name": "Tara Hall",
      "age": 20,
      "date_of_birth": "2017-09-22",
      "city": "Delhi",
      "grades": {
        "Math": 75,
        "Science": 66,
        "English": 84,
        "History": 65,
        "Programming": 80
      }
    },
    {
      "name": "Dev Harris",
      "age": 19,
      "date_of_birth": "2008-09-07",
      "city": "Mumbai",
      "grades": {
        "Math": 70,
        "Science": 89,
        "English": 92,
        "History": 76,
        "Programming": 65
      }
    },
    {
      "name": "Aarush Jackson",
      "age": 20,
      "date_of_birth": "2016-04-11",
      "city": "Kolkata",
      "grades": {
        "Math": 80,
        "Science": 72,
        "English": 71,
        "History": 64,
        "Programming": 100
      }
    },
    {
      "name": "Ishika Green",
      "age": 21,
      "date_of_birth": "2023-02-06",
      "city": "Ahmedabad",
      "grades": {
        "Math": 80,
        "Science": 74,
        "English": 89,
        "History": 63,
        "Programming": 60
      }
    },
    {
      "name": "Aaryan Brown",
      "age": 20,
      "date_of_birth": "2014-03-13",
      "city": "Chennai",
      "grades": {
        "Math": 93,
        "Science": 86,
        "English": 87,
        "History": 82,
        "Programming": 96
      }
    },
    {
      "name": "Shaurya Harris",
      "age": 18,
      "date_of_birth": "2012-02-08",
      "city": "Kolkata",
      "grades": {
        "Math": 99,
        "Science": 96,
        "English": 68,
        "History": 93,
        "Programming": 77
      }
    },
    {
      "name": "Anika Smith",
      "age": 19,
      "date_of_birth": "2007-10-29",
      "city": "Kolkata",
      "grades": {
        "Math": 72,
        "Science": 98,
        "English": 91,
        "History": 82,
        "Programming": 91
      }
    },
    {
      "name": "Ishika Miller",
      "age": 20,
      "date_of_birth": "2008-02-12",
      "city": "Mumbai",
      "grades": {
        "Math": 64,
        "Science": 94,
        "English": 69,
        "History": 94,
        "Programming": 95
      }
    },
    {
      "name": "Veer Williams",
      "age": 19,
      "date_of_birth": "2018-11-30",
      "city": "Hyderabad",
      "grades": {
        "Math": 66,
        "Science": 79,
        "English": 81,
        "History": 74,
        "Programming": 66
      }
    },
    {
      "name": "Reyansh Martinez",
      "age": 18,
      "date_of_birth": "2013-06-26",
      "city": "Pune",
      "grades": {
        "Math": 96,
        "Science": 90,
        "English": 98,
        "History": 97,
        "Programming": 64
      }
    },
    {
      "name": "Amara Martinez",
      "age": 21,
      "date_of_birth": "2006-10-24",
      "city": "Bangalore",
      "grades": {
        "Math": 65,
        "Science": 95,
        "English": 64,
        "History": 71,
        "Programming": 87
      }
    },
    {
      "name": "Aanya Hill",
      "age": 18,
      "date_of_birth": "2004-08-26",
      "city": "Ahmedabad",
      "grades": {
        "Math": 64,
        "Science": 99,
        "English": 99,
        "History": 94,
        "Programming": 100
      }
    },
    {
      "name": "Zara Walker",
      "age": 19,
      "date_of_birth": "2005-04-22",
      "city": "Hyderabad",
      "grades": {
        "Math": 91,
        "Science": 66,
        "English": 77,
        "History": 66,
        "Programming": 69
      }
    },
    {
      "name": "Kavya Allen",
      "age": 21,
      "date_of_birth": "2007-05-26",
      "city": "Delhi",
      "grades": {
        "Math": 86,
        "Science": 82,
        "English": 68,
        "History": 97,
        "Programming": 64
      }
    },
    {
      "name": "Rudra Clark",
      "age": 21,
      "date_of_birth": "2005-01-30",
      "city": "Kolkata",
      "grades": {
        "Math": 69,
        "Science": 71,
        "English": 86,
        "History": 86,
        "Programming": 72
      }
    },
    {
      "name": "Vihan Hernandez",
      "age": 21,
      "date_of_birth": "2009-08-21",
      "city": "Kolkata",
      "grades": {
        "Math": 92,
        "Science": 79,
        "English": 66,
        "History": 83,
        "Programming": 63
      }
    },
    {
      "name": "Amara Rao",
      "age": 21,
      "date_of_birth": "2023-12-19",
      "city": "Pune",
      "grades": {
        "Math": 98,
        "Science": 68,
        "English": 78,
        "History": 100,
        "Programming": 96
      }
    },
    {
      "name": "Shaurya Lewis",
      "age": 19,
      "date_of_birth": "2010-07-21",
      "city": "Hyderabad",
      "grades": {
        "Math": 76,
        "Science": 93,
        "English": 73,
        "History": 66,
        "Programming": 86
      }
    },
    {
      "name": "Dev Edwards",
      "age": 19,
      "date_of_birth": "2012-08-31",
      "city": "Hyderabad",
      "grades": {
        "Math": 68,
        "Science": 69,
        "English": 63,
        "History": 67,
        "Programming": 87
      }
    },
    {
      "name": "Sanya Gonzalez",
      "age": 19,
      "date_of_birth": "2021-05-31",
      "city": "Hyderabad",
      "grades": {
        "Math": 70,
        "Science": 88,
        "English": 81,
        "History": 74,
        "Programming": 83
      }
    },
    {
      "name": "Sanya Malhotra",
      "age": 20,
      "date_of_birth": "2010-04-01",
      "city": "Hyderabad",
      "grades": {
        "Math": 82,
        "Science": 75,
        "English": 65,
        "History": 85,
        "Programming": 94
      }
    }
  ]
  
  export default studentData;