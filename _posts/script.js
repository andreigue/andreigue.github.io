function showTab(lang) {
    // Get all tab buttons and content items
    var tabButtons = document.querySelectorAll('.tab-button');
    var tabContentItems = document.querySelectorAll('.tab-content-item');
  
    // Loop through all content items and hide them
    for (var i = 0; i < tabContentItems.length; i++) {
      tabContentItems[i].classList.remove('active');
    }
  
    // Loop through all tab buttons and deactivate them
    for (var i = 0; i < tabButtons.length; i++) {
      tabButtons[i].classList.remove('active');
    }
  
    // Show the content item with the matching language and activate the corresponding tab button
    var contentItem = document.querySelector('.tab-content-item[data-lang="' + lang + '"]');
    var tabButton = document.querySelector('.tab-button[data-lang="' + lang + '"]');
    contentItem.classList.add('active');
    tabButton.classList.add('active');
  }
  