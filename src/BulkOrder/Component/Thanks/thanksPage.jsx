import Navbar from "../../../Navbar/navbar";
import "./thanks.css";
const ThanksPage = () => {
  return (
    <thankspage>
      <Navbar></Navbar>
      <message>
        <heading>Thank You</heading>
        <sub-head>for choosing us for your merch order</sub-head>
        <thanks-body>
          <next>
            <next-heading>What Happens Next?</next-heading>
            <br />
            We have received your order request and we are on it!
            <br />
            Expect to hear from us soon to confirm your order details.
            <br />
            Stay tuned! One of our team members will be reaching out to you
            shortly!
          </next>

          <assistance>
            <assistance-heading>Need Assistance?</assistance-heading>
            <br />
            If you have any questions or need to make changes to your order,
            feel free to reach out to us at{" "}
            <span className="email">thewalkincloset23@gmail.com</span>.
          </assistance>
          <greetings>
            <greeting-heading>Thanks a Bunch!</greeting-heading>
            <br />
            Once again, thanks a bunch for choosing us. We are pumped to be a
            part of your college journey!
          </greetings>
        </thanks-body>
      </message>
    </thankspage>
  );
};

export default ThanksPage;
