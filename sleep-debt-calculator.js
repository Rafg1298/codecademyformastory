const getSleepHours = day => {
if (day === 'monday'){
  return 8
} 
switch (day){
  case 'tuesday':
  return 5;
  case 'wednesday':
  return 7;
  case 'thursday':
  return 5;
  case 'friday':
  return 6;
  case 'saturday':
  return 9;
  case 'sunday':
  return 6
}
}


const getActualSleepHours = () => {
getSleepHours('Monday') + 
getSleepHours('Tuesday') +
getSleepHours('Wednesday') +
getSleepHours('Thursday') + 
getSleepHours('Friday') +
getSleepHours('Saturday') + 
getSleepHours('Sunday');
}

const getIdealSleepHours = () => {
  var idealHours = 8;
  return idealHours * 7;
}

console.log(getActualSleepHours());

console.log(getIdealSleepHours());

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();
  if(actualSleepHours === getIdealSleepHours)
  {
  console.log('Perfect amount of sleep!')
  }
  else if (actualSleepHours > getIdealSleepHours){
  console.log('Extra sleep!')
  }
  else (actualSleepHours < getIdealSleepHours)
  {
  console.log('You need more sleep')
  }
if (actualSleepHours < idealSleepHours) {
  console.log('You got' + (idealSleepHours - actualSleepHours) + 'hour(s) less sleep than you needed this week. Get some rest.');
}
}

calculateSleepDebt();
