/**
 * 根据经纬度计算两点距离
 * unit:string default = m 英里
 * unit = K 公里
 * unit = N 海里
 */

const distance = function(lat1, lng1, lat2, lng2, unit) {
  if (typeof lat1 !== 'number' || typeof lng1 !== 'number' || typeof lat2 !== 'number' || typeof lng2 !== 'number') {
    return new Error('lat/lng must be Number')
  }

  if ((lat1 == lat2) && (lng1 == lng2)) {
    return 0;
  } else {
    var radlat1 = Math.PI * lat1 / 180;
    var radlat2 = Math.PI * lat2 / 180;
    var theta = lng1 - lng2;
    var radtheta = Math.PI * theta / 180;
    var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
    if (dist > 1) {
      dist = 1;
    }
    dist = Math.acos(dist);
    dist = dist * 180 / Math.PI;
    dist = dist * 60 * 1.1515;
    if (unit == "K") { dist = dist * 1.609344 }
    if (unit == "N") { dist = dist * 0.8684 }
    return dist;
  }
}


export default distance
