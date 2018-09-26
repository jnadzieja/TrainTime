// Initialize Firebase
var config = {
  apiKey: "AIzaSyC1NrnqB5kQlCXSqDD8stG9F37zqM2X1ZE",
  authDomain: "traintime-96c14.firebaseapp.com",
  databaseURL: "https://traintime-96c14.firebaseio.com",
  projectId: "traintime-96c14",
  storageBucket: "traintime-96c14.appspot.com",
  messagingSenderId: "901734409837"
};
firebase.initializeApp(config);

const db = firebase.database();

$("#sb").on("click", function(event) {
  event.preventDefault();

  let n = $("#tn").val().trim();
  let d = $("#di").val().trim();
  let a = $("#fa").val().trim();
  let f = $("#fq").val().trim();

  let en = {
    n: n,
    d: d,
    a: a,
    f: f
  };

  db.ref().push(en);

  $("#tn").val("");
  $("#di").val("");
  $("#fa").val("");
  $("#fq").val("");
});

db.ref().on("child_added", function(sn) {
  let s = sn.val();
  let r = $("<tr>")

  let n = s.n
  let d = s.d
  let a = s.a
  let f = s.f

  let x = moment().diff(moment(a, "HH:mm"), "minutes");
  let y = x % f
  let z = f - y
  let q = moment().add(z, "minutes");
  let v = moment(q).format("hh:mm A")

  r.append("<td>" + n + "</td>");
  r.append("<td>" + d + "</td>");
  r.append("<td>" + f + " mins" + "</td>");
  r.append("<td>" + v + "</td>")
  r.append("<td>" + z + " mins" + "</td>");

  $("#tb").append(r)

});






