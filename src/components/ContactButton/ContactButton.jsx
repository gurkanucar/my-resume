import "./ContactButton.css";
const ContactButton = (props) => {
  return (
    <div onClick={props.onClick} className="contact-btn">
      <span className="contact-txt">Contact</span>
    </div>
  );
};

export default ContactButton;
