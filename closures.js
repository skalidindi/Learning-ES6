var me = 'Bruce Wayne';
function greetMe() {
   console.log('Hello ' + me + '!');
}
var me = 'Batman';
greetMe();

function sendRequest() {
   var requestID = '123';
   $.ajax({
      url: '/myUrl',
      success: function (response) {
         alert('Request ' + requestID + ' returned')
      }
   })
}
