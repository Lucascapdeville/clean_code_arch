
export  class Distance{

  static calculate(lat_inicial : number , lon_inicial : number, lat_final : number, lon_final : number){
  var earth_radius = 6371;
  var lat_diference_rad = (lat_final-lat_inicial) * (Math.PI/180);
  var lon_diference_rad = (lon_final-lon_inicial) * (Math.PI/180); 
  var a = 
    Math.sin(lat_diference_rad/2) * Math.sin(lat_diference_rad/2) +
    Math.cos((Math.PI/180) * (lat_inicial)) * Math.cos((Math.PI/180) * (lat_final)) * 
    Math.sin(lon_diference_rad/2) * Math.sin(lon_diference_rad/2)
    ; 
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    var distance = earth_radius * c;
    return Math.round(distance);
  }
}