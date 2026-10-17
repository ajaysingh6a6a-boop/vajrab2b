(function () {
  var s = document.createElement("style");
  s.textContent = 'body[data-l="hi"] .en{display:none!important}body[data-l="en"] .hi{display:none!important}.lt{display:flex;gap:4px}.lt button{border:1.5px solid #1e3a8a;background:#fff;color:#1e3a8a;border-radius:99px;padding:5px 11px;font-weight:800;font-size:.75rem;cursor:pointer}.lt button.on{background:#1e3a8a;color:#fff}';
  document.head.appendChild(s);
  function setL(l) {
    document.body.setAttribute("data-l", l);
    document.documentElement.lang = l;
    try { localStorage.setItem("vl", l); } catch (e) {}
    document.querySelectorAll(".lt button").forEach(function (b) { b.classList.toggle("on", b.dataset.l === l); });
    document.querySelectorAll("[data-wa-hi]").forEach(function (a) {
      a.href = "https://wa.me/919510401971?text=" + encodeURIComponent(l === "hi" ? a.dataset.waHi : a.dataset.waEn);
    });
  }
  document.addEventListener("DOMContentLoaded", function () {
    var h = document.querySelector("header");
    var d = document.createElement("div");
    d.className = "lt";
    d.innerHTML = '<button data-l="hi">हिन्दी</button><button data-l="en">English</button>';
    d.onclick = function (e) { if (e.target.dataset.l) setL(e.target.dataset.l); };
    h.appendChild(d);
    var l = "hi";
    try { l = localStorage.getItem("vl") || "hi"; } catch (e) {}
    setL(l);
  });
})();