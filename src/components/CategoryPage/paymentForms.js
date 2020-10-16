import React from "react";

export default function PaymentFormComp() {
  return (
    <div>
      <form
        action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSeSuIImMlXGMwGQRTYaczf8I7AhEB8Fwoq9CRGNQyHX520kdw/formResponse"
        target="_self"
        method="POST"
      >
        <input type="text" placeholder="Name" name="entry.1137561673" />
        <input
          type="text"
          placeholder="Shipping Address"
          name="entry.19477808"
        />
        <input
          type="email"
          placeholder="Email Address"
          name="entry.162490665"
        />
        <input
          type="phone"
          placeholder="Phone Number"
          name="entry.1391732984"
        />
        <br />
        Preferred method(s) of contact?
        <input
          type="checkbox"
          id="Phone"
          name="entry.290145198_sentinel"
          value="phone"
        />
        <label for="Phone"> Phone Call </label>
        <input
          type="checkbox"
          id="Email"
          name="entry.290145198_sentinel"
          value="Email"
        />
        <label for="Email"> Email </label>
        <input
          type="checkbox"
          id="Text"
          name="entry.290145198_sentinel"
          value="Text msg"
        />
        <label for="Text"> Text Message </label>
        <input
          type="checkbox"
          id="Whatsapp"
          name="entry.290145198_sentinel"
          value="Whatsapp"
        />
        <label for="Text"> Whatsapp </label>
        Preferred method(s) of payment?
        <input
          type="checkbox"
          id="Cash App"
          name="entry.1645028048_sentinel"
          value="Cash App"
        />
        <label for="Cash App"> Cash App </label>
        <input
          type="checkbox"
          id="Venmo"
          name="entry.1645028048_sentinel"
          value="Venmo"
        />
        <label for="Venmo"> Venmo </label>
        <input
          type="checkbox"
          id="Online"
          name="entry.1645028048_sentinel"
          value="Online Payment"
        />
        <label for="Online"> Online Payment </label>
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
