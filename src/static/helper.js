import { toPng } from 'html-to-image';

const saveChartAsImage = async (reference) => {
    const pieChartImage = await toPng(reference);
    return pieChartImage;
};  

const getLeaveDate = (joinDate) => {
    const date = new Date(joinDate);
    date.setFullYear(date.getFullYear() + Math.random() * 10);
    const year = date.toLocaleString("default", { year: "numeric" });
    const month = date.toLocaleString("default", {
      month: "2-digit",
    });
    const day = date.toLocaleString("default", { day: "2-digit" });

    return `${year}-${month}-${day}`;
  };

  
  const calculateJoinersAndLeavers = (studentData) => {
    const joiners = {};
    const leavers = {};

    studentData.forEach((student) => {
      const joinDate = student.date_of_birth;
      const leaveDate = student.leave_date || getLeaveDate(student.date_of_birth);

      if (joinDate in joiners) {
        joiners[joinDate]++;
      } else {
        joiners[joinDate] = 1;
      }

      if (leaveDate && leaveDate in leavers) {
        leavers[leaveDate]++;
      } else if (leaveDate) {
        leavers[leaveDate] = 1;
      }
    });

    const dates = [
      ...new Set([...Object.keys(joiners), ...Object.keys(leavers)]),
    ];

    const joinersData = dates.map((date) => joiners[date] || 0);
    const leaversData = dates.map((date) => leavers[date] || 0);

    return { dates, joinersData, leaversData };
  };

  const calculateGradeDistribution = (studentData) => {
    const gradeCounts = {
      A: 0,
      B: 0,
      C: 0,
      D: 0,
      F: 0,
    };

    studentData.forEach((student) => {
      const grade =
        Object.values(student.grades).reduce((a, b) => a + b, 0) /
        Object.keys(student.grades).length;

      if (grade >= 90) {
        gradeCounts.A++;
      } else if (grade >= 80) {
        gradeCounts.B++;
      } else if (grade >= 70) {
        gradeCounts.C++;
      } else if (grade >= 60) {
        gradeCounts.D++;
      } else {
        gradeCounts.F++;
      }
    });

    console.log(gradeCounts);

    return Object.values(gradeCounts);
  };


export {
    saveChartAsImage,
    getLeaveDate,
    calculateJoinersAndLeavers,
    calculateGradeDistribution
}