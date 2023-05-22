//JavaScript code will be written below this comment.

/*
var dataset = [1, 2, 3, 4, 5];

d3.select('body')
  .selectAll('p')
  .data(dataset)
  .enter()
  .append('p')
  //.text('D3 is cool to learn!')
  .text(function(d) {return d;};*/

  /*Bard, by google fixed the bug!*/
  var dataset = [1, 2, 3, 4, 5];

d3.select('body')
  .selectAll('p')
  .data(dataset)
  .enter()
  .append('p')
  .text(function(d) {
    return d.toString();
  });
