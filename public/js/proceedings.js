document.addEventListener('DOMContentLoaded', function () {
  const sessionFilter = document.getElementById('session-filter');
  const dayFilter = document.getElementById('day-filter');
  const searchBox = document.getElementById('search-query');
  const papers = document.querySelectorAll('.paper-item');

  function filterPapers() {
    const session = sessionFilter.value.toLowerCase();
    const day = dayFilter.value.toLowerCase();
    const keyword = searchBox.value.trim().toLowerCase();

    papers.forEach(p => {
      const title = (p.dataset.title || "").toLowerCase();
      const authors = (p.dataset.authors || "").toLowerCase();
      const sessionVal = (p.dataset.session || "").toLowerCase();
      const dayVal = (p.dataset.day || "").toLowerCase();

      const matchesSession = !session || sessionVal === session;
      const matchesDay = !day || dayVal === day;
      const matchesKeyword = !keyword || title.includes(keyword) || authors.includes(keyword);

      const show = matchesSession && matchesDay && matchesKeyword;
      p.style.display = show ? "" : "none";
    });
  }

  [sessionFilter, dayFilter, searchBox].forEach(el => {
    el.addEventListener('input', filterPapers);
  });

  function populateFilters() {
    const sessions = new Set();
    const days = new Set();
    papers.forEach(p => {
      if (p.dataset.session) sessions.add(p.dataset.session);
      if (p.dataset.day) days.add(p.dataset.day);
    });
    [...sessions].sort().forEach(s => {
      const opt = document.createElement('option');
      opt.value = s;
      opt.textContent = s;
      sessionFilter.appendChild(opt);
    });
    [...days].sort().forEach(d => {
      const opt = document.createElement('option');
      opt.value = d;
      opt.textContent = d;
      dayFilter.appendChild(opt);
    });
  }

  populateFilters();
});
