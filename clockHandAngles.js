/* Create clockHandAngles(seconds) that, given a number of seconds since 12:00:00, 
returns angles (in degrees) of the hour, minute and second hands. 
As review, 360 degrees form a full rotation. 
Have the degree round up as a whole number.
For input of 3600 secs (equivalent to 1:00:00), have it return "[30, 0, 0]" 
meaning the hour is 30 degrees, the minute and the second is 0 degree from noon.*/

function clockHandAngles(seconds){
    if(seconds>43200){
        seconds = seconds-43200;
      }
    let minutos = seconds % 3600;
    let segundos = minutos % 60;
    
    let seconds_angle = Math.round(6*segundos);
    let minutes_angle = Math.round(0.1*minutos);
    let hours_angle = Math.round((360/43200)*seconds);
    const angle_arr = [];
    angle_arr.push(hours_angle, minutes_angle, seconds_angle);
    return angle_arr;
}