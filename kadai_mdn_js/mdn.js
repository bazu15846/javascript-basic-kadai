const date = new Date();
const [month, day, year] = [
    date.getMonth(),
    date.getDate(),
    date.getFullYear(),
  ];
  console.log(year+"年" + (1+month)+"月"+ day+"日");