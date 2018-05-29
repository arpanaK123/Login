app.filter("removeDuplicate",function()
{
  return function(data,detailsOfData)
  {


  var index,values;
  var array=[];
  if(data!=undefined)
  {
    for (var i = 0; i < data.length; i++) {
      values=data[i].specs[detailsOfData];
      index=array.indexOf(values);
      if(index==-1){
        array.push(values);
      }
    }
  }
  return array;
}
}
)
