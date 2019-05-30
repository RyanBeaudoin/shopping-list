$(()=>{

  // listen for submit event
  $('#js-shopping-list-form').submit(function(e) {
    e.preventDefault();
    const newItem = $('#shopping-list-entry').val();
    $('#shopping-list-entry').val('');

    // add new item
    $('.shopping-list').append(
      `<li>
        <span class="shopping-item">${newItem}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>`);
    });

    //remove shopping list item
  $('.shopping-list').on('click', '.shopping-item-delete', function(e) {
    $(this).closest('li').remove();
  });

    //set style for checked/unchecked items
  $('.shopping-list').on('click', '.shopping-item-toggle', function(e) {
    $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
  });
});