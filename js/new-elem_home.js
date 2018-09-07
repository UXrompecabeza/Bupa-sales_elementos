// Acordion location

$(".ac-label").click(function(){
  let link = $(this).attr('name')
  console.log(link)
  if (typeof link !== typeof undefined && link !== false) {
    window.location.href = link + '.html' ;
  }
})