import { useForm } from "react-hook-form";
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";
import ContactIllust from "../assets/contact-us.svg";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    reset();
  };

  return (
    <section className="contact">
      <div className="contact-details">
        <h2>Let's Connect!</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("name", { required: true })}
            placeholder="Your Name"
          />
          {errors.name && <span className="error">Name is required</span>}

          <input
            {...register("email", { required: true })}
            type="email"
            placeholder="Your Email"
          />
          {errors.email && (
            <span className="error">Valid email is required</span>
          )}

          <textarea
            {...register("message", { required: true })}
            placeholder="Your Message"
          />
          {errors.message && <span className="error">Message is required</span>}

          <button className="cta-button" type="submit">
            Send
          </button>
        </form>

        <div className="contact-info">
          <p>
            Email:{" "}
            <a href="mailto:goudara.pavan.kumar@gmail.com">
              goudara.pavan.kumar@gmail.com
            </a>
          </p>
          <p>
            Phone: <a href="tel:+917406036963">+91 74060 36963</a>
          </p>
          <div className="socials">
            <a
              href="https://github.com/pavan-pani"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/pavan-kumar-goudara/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </a>
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
      <div className="contact-illustration">
        <img src={ContactIllust} alt="Contact us illustration" />
      </div>
    </section>
  );
};

export default Contact;
