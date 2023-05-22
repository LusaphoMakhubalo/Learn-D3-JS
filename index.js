//JavaScript code will be written below this comment. 

d3.select;
d3.selectAll();

d3.select('h1').style('color','red')
.attr('class','heading')
.text('This is so cool');

d3.select('body').append('p').text('First Paragraph')
d3.select('body').append('p').text('Second Paragraph')
d3.select('body').append('p').text('Third Paragraph')

d3.selectAll('p').style('color','blue');