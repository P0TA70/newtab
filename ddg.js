let searchForm = document.querySelector('form[action="https://duckduckgo.com/"]');
let searchField = searchForm.querySelector('[name="q"]');
searchField.value = '';
searchForm.addEventListener('submit', function(e) {
    e.preventDefault();
    let url = `${searchForm.action}?q=${encodeURI(searchField.value)}`;
    window.open(url, '_blank');
    win.focus();
});
