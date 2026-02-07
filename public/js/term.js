function showList(type) {
  document.getElementById('list-alpha').style.display = (type === 'alpha') ? 'block' : 'none';
  document.getElementById('list-count').style.display = (type === 'count') ? 'block' : 'none';
  document.querySelectorAll('.taxonomy-controls .btn').forEach(btn => btn.classList.remove('active'));
  document.querySelector(`.taxonomy-controls .btn[onclick="showList('${type}')"]`).classList.add('active');
}