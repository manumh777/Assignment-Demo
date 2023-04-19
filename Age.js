function life(age)
{
  if(age<=90)
    {
      
      let days=(365*90)-(365*age);
      let weeks=(52*90)-(52*age);
      let year=12*90-(12*age);
      console.log("days ", days);
      console.log("weeks ", weeks );
      console.log("year ", year);
    }
  else{
    console.log("ERROR");
  }
}
life(25);
