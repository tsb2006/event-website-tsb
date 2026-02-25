//document.getElementById('event-form').addEventListener('submit', function(e) {
 //   e.preventDefault();

   // const name      = document.getElementById('name').value.trim();
    //const phone     = document.getElementById('phone').value.trim();
   // const eventType = document.getElementById('eventType').value;
   // const date      = document.getElementById('date').value;
    //const guests    = document.getElementById('guests').value.trim();
    //const message   = document.getElementById('message').value.trim();

  //  const lines = [
   //     "*New Event Request*",
    //    "",
     //   `👤 Name: ${name}`,
      //  `📱 WhatsApp: ${phone}`,
       // `🎉 Event: ${eventType}`,
       // date   ? `📅 Date: ${date}` : "",
       // guests ? `👥 Guests: ${guests}` : "",
        //message ? `💬 Message:\n${message}` : ""
    //];

    // Use normal line break
   // const text = lines
     //   .filter(line => line !== "")
       // .join("\n");

   // const yourNumber = "9042463806";
    //const url = `https://wa.me/${yourNumber}?text=${encodeURIComponent(text)}`;

    //window.open(url, '_blank');
    //this.reset();
//});

document.addEventListener("DOMContentLoaded", function () {

  const form = document.getElementById("wedding-form");
  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name    = document.getElementById("name")?.value.trim() || "";
    const phone   = document.getElementById("phone")?.value.trim() || "";
    const date    = document.getElementById("weddingDate")?.value || "";
    const venue   = document.getElementById("venue")?.value.trim() || "";
    const guests  = document.getElementById("guests")?.value.trim() || "";
    const message = document.getElementById("message")?.value.trim() || "";

    if (!name || !phone) {
      alert("Please fill Name and Phone Number.");
      return;
    }

    const lines = [
      "*New Wedding Inquiry* 💍",
      "",
      `👤 Name: ${name}`,
      `📱 Phone: ${phone}`,
      date ? `📅 Wedding Date: ${date}` : "",
      venue ? `📍 Venue: ${venue}` : "",
      guests ? `👥 Guests: ${guests}` : "",
      message ? `💬 Details:\n${message}` : ""
    ];

    const text = lines.filter(Boolean).join("\n");

    const yourNumber = "919042463806"; // Your WhatsApp number

    const url = `https://wa.me/${yourNumber}?text=${encodeURIComponent(text)}`;

    window.open(url, "_blank");

    form.reset();
  });

});
