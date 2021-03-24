let a = ["r", "p", "s"],
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
    let e = s,
      t = a[Math.floor(Math.random() * a.length)];
    rpsResult(e, t);
  }),
  (rpsResult = (s, e) => {
    s == e
      ? tie++
      : (s == a[0] && e == a[2]) ||
        (s == a[2] && e == a[1]) ||
        (s == a[1] && e == a[0])
      ? win++
      : loss++,
      showCase(s, e);
  }),
  (showCase = (s, e) => {
    let t = `<div class="container"><div class="row py-2"><div class="col"><p>User Choice:</p><img src="assets/images/rps/rock_paper_scissors__2x-0${a.indexOf(s) + 1}.svg" height="70px" width="70px" border="0" style="top: 0" /><div class="m-2"><button type="button" class="btn btn-warning" disabled>User Score:&#160; <span class="badge bg-danger">${win}</span></button></div></div><div class="col"><p>Champ Choice:</p><img src="assets/images/rps/rock_paper_scissors__2x-0${a.indexOf(e) + 1}.svg" height="70px" width="70px" border="0" style="top: 0" /><div class="m-2"><button type="button" class="btn btn-warning" disabled>Champ Score:&#160; <span class="badge bg-danger">${loss}</span></button></div></div></div></div>`;
    $("#game").html(t);
  });

/*  
        ╥╥  DESIGNED AND DEVELOPED BY...
        ║║ 
        ║║ ╓╓──╖╖ ╓╓──── ────╖╖ ╓╖ ╓╓──╖╖ ╓╓──╖╖ TM
        ║║ ║║  ║║ ║║         ║║ ╙╜ ║║  ║║ ║║  ║║
    ╓╓──╫╫ ╫╫──╜╜ ╙╙──╖╖ ╓╓──╫╫ ╖╖ ║║  ║║ ║║  ║║
    ║║  ║║ ║║         ║║ ║║  ║║ ║║ ║║  ║║ ║║  ║║
    ║║  ║║ ║║         ║║ ║║  ║║ ║║ ║║  ║║ ║║  ║║
    ║║  ║║ ╙╙──── ────╜╜ ╙╙──╜╜ ║║ ╙╙──╫╫ ╜╜  ║║
    ║║  ║║  HTTPS://DESAIGN.APP ║║     ║║     ╙╙ LLC
    ╙╙──╜╜  SINCE TWENTYELEVEN  ╙╙─ ───╜╜
            Copyright © 2021
            ALL RIGHTS RESERVED
            --
            Call: 1-860-DESAIGN
            Mail: MEET@DESAIGN.STUDIO
            Post: PO BOX 200001, AUSTIN TX 78720
            --
            Book an appointment with us at
            https://calendly.com/desaignstudio
            --
            Follow us: #desaignstudio
*/