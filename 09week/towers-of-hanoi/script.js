
"use strict";

$(document).ready(function(){
  $('.draggable').draggable({
    revert: 'invalid'
  });
  $('.dropArea').droppable({
    drop: function(event, ui){
     let  $dragging = $(ui.draggable).data('block');
     let  $last = ($(this).children().last()).data('block'); 
     if ($(ui.draggable).data('block') >($(this).children().last()).data('block')) {
  $(ui.draggable).draggable({
    revert:'true'
  })
  } else{
      $(ui.draggable).appendTo(this).attr('style', 'position: "relative"');

    }
  }
});
});
