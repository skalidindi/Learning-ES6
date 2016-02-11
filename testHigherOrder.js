import _ from 'lodash';

let mgmtHosts = [
   {
      metadata: {
            MANAGEMENT_DATASTORE: 'datastore1',
            MANAGEMENT_PORTGROUP: 'VM Network',
            MANAGEMENT_NETWORK_NETMASK: '255.255.255.0',
            MANAGEMENT_NETWORK_DNS_SERVER: '6.7.2.3',
            MANAGEMENT_NETWORK_GATEWAY: '4.3.2.6',
            MANAGEMENT_VM_IPS: '8.9.21.1'
      },
      address_ranges: '1.2.3.4',
      isCloudHost: true,
      username: 'root',
      password: 'ca$hc0w'
   },
   {
      metadata: {
            MANAGEMENT_DATASTORE: 'datastore1',
            MANAGEMENT_PORTGROUP: 'VM Network',
            MANAGEMENT_NETWORK_NETMASK: '255.255.255.0',
            MANAGEMENT_NETWORK_DNS_SERVER: '6.7.2.3',
            MANAGEMENT_NETWORK_GATEWAY: '4.3.2.6',
            MANAGEMENT_VM_IPS: '8.9.21.1'
      },
      address_ranges: '11.12.13.14',
      isCloudHost: true,
      username: 'root',
      password: 'ca$hc0w'
   }
];

var cloudHosts = [
   {
      address_ranges: '11.12.13.15',
      username: 'root',
      password: 'ca$hc0w'
   },
   {
      address_ranges: '11.12.13.16',
      username: 'root2',
      password: 'ca$hc0w'
   },
   {
      address_ranges: '11.12.13.16',
      username: 'root3',
      password: 'ca$hc0w'
   },
];

// let hostMap = {};

// mgmtHosts.map(mgmtHost => hostMap[mgmtHost['address_ranges']] = true);
// console.log(hostMap);

// // var uniqCloudHosts = cloudHosts.filter(host => console.log(host.address_ranges));
// var uniqCloudHosts = cloudHosts.filter(host => hostMap[host.address_ranges] !== true);


// console.log(uniqCloudHosts);

// var unique = _.uniqWith(cloudHosts, (host) => {
//    return host.address_ranges
// });

// var destArray = _.uniqWith(cloudHosts, function(host){
//     return host.address_ranges;
// });
// console.log(destArray);

var data = [
    {
        url: 'www.example.com/hello',
        id: "22"
    },
    {
        url: 'www.example.com/hello',
        id: "22"
    },
    {
        url: 'www.example.com/hello-how-are-you',
        id: "23"
    },
    {
        url: 'www.example.com/i-like-cats',
        id: "24"
    },
    {
        url: 'www.example.com/i-like-pie',
        id: "25"
    }
]
console.log(_.uniqWith(data, function (e) {
  return e.id;
}));
