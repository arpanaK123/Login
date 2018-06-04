// app.filter("removeDuplicate", function() {
//   return function(data, detailsOfData) {
//     var index, values;
//     var array = [];
//     if (data != undefined) {
//       for (var i = 0; i < data.length; i++) {
//         values = data[i].specs[detailsOfData];
//         index = array.indexOf(values);
//         if (index == -1) {
//           array.push(values);
//         }
//       }
//     }
//     return array;
//   }
// })


app.filter('removeDuplicate', function() {
  return function(allData, key) {
    var filteredArr = [];
    if (allData != undefined) {
      for (var i = 0; i < allData.length; i++) {
        var newObj = allData[i];
        var status = false;
        if (i == 0) {
          filteredArr.push(newObj);
        } else {
          for (var j = 0; j < filteredArr.length; j++) {
            var filtereditem = filteredArr[j];
            if (newObj.specs[key] == filtereditem.specs[key]) {
              status = true;
            }
          }
          if (!status) {
            filteredArr.push(newObj);
          }
        }

      }

    }
    return filteredArr;
  };
});
