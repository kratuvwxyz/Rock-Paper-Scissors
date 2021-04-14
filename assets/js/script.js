let aa = ["r", "p", "s"],
  win = 0,
  loss = 0,
  tie = 0;
$(document.body).on("keyup", function (s) {
  ("r" === s.key || "p" === s.key || "s" === s.key) && matchGame(s.key);
}),
  $(document).on("click", "#rock", function (s) {
    matchGame("r");
  }),
  $(document).on("click", "#paper", function (s) {
    matchGame("p");
  }),
  $(document).on("click", "#scissors", function (s) {
    matchGame("s");
  }),
  (matchGame = (s) => {
    let a = s,
      e = aa[Math.floor(Math.random() * aa.length)];
    rpsResult(a, e);
  }),
  (rpsResult = (s, a) => {
    s == a ? tie++ : (s == aa[0] && a == aa[2]) || (s == aa[2] && a == aa[1]) || (s == aa[1] && a == aa[0]) ? win++ : loss++, showCase(s, a);
  }),
  (showCase = (s, a) => {
    let e = `<div class="container"><div class="row py-2"><div class="col"><p>User Choice:</p><img src="assets/images/rps/rock_paper_scissors__2x-0${aa.indexOf(s) + 1}.svg" height="70px" width="70px" border="0" style="top: 0" /><div class="m-2"><button type="button" class="btn btn-warning" disabled>User Score:&#160; <span class="badge bg-danger">${win}</span></button></div></div><div class="col"><p>Champ Choice:</p><img src="assets/images/rps/rock_paper_scissors__2x-0${aa.indexOf(a) + 1}.svg" height="70px" width="70px" border="0" style="top: 0" /><div class="m-2"><button type="button" class="btn btn-warning" disabled>Champ Score:&#160; <span class="badge bg-danger">${loss}</span></button></div></div></div></div>`;
    $("#game").html(e);
  });
