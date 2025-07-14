import { useState } from "react";
import emailjs from "@emailjs/browser";
import Alert from "../components/Alert";
import { Particles } from "../components/Particles";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState("success");
  const [alertMessage, setAlertMessage] = useState("");
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const showAlertMessage = (type, message) => {
    setAlertType(type);
    setAlertMessage(message);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 5000);
  };
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setIsLoading(true);

  //   try {
  //     console.log("From submitted:", formData);
  //     await emailjs.send(
  //       "service_38dfnoo",
  //       "template_3ntxkfp",
  //       {
  //         // Sesuai dengan {{from_name}} di body email
  //         from_name: formData.name, 

  //         // DITAMBAHKAN: Sesuai dengan {{from_me}} di subject email
  //         from_me: formData.name, 

  //         // Sesuai dengan {{to_name}} di body email
  //         to_name: "teguh", // Sebaiknya sesuaikan dengan nama di template Anda

  //         // DIUBAH: Menggunakan `reply_to` agar sesuai dengan template {{reply_to}}
  //         reply_to: formData.email, 

  //         // Anda bisa menghapus `to_email` karena sudah di-set di template,
  //         // tapi mengirimnya lagi seperti ini juga tidak masalah (override).
  //         to_email: "zetteaz@gmail.com", 

  //         // Sesuai dengan {{message}} di body email
  //         message: formData.message, 
  //       },
  //       "pn-28skRfbbItZPKCFgV"
  //     );
  //     setIsLoading(false);
  //     setFormData({ name: "", email: "", message: "" });
  //     showAlertMessage("success", "You message has been sent!");
  //   } catch (error) {
  //     setIsLoading(false);
  //     console.log(error);
  //     showAlertMessage("danger", "Somthing went wrong!");
  //   }
  // };
  const handleSubmit = async (e) => {
  e.preventDefault();
  setIsLoading(true);

  console.log("Public Key yang akan dikirim:", import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  // Objek ini adalah bagian terpenting. Pastikan semua nama properti (kiri)
  // cocok dengan variabel {{...}} di template EmailJS Anda.
  const templateParams = {
    from_name: formData.name,
    from_me: formData.name,      // Untuk {{from_me}} di subject
    to_name: "teguh",            // Untuk {{to_name}}
    reply_to: formData.email,    // Untuk {{reply_to}}
    from_email: formData.email,
    message: formData.message,
  };
q
  try {
    await emailjs.send(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, templateParams, import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

    setIsLoading(false);
    setFormData({ name: "", email: "", message: "" });
    showAlertMessage("success", "Pesan Anda telah terkirim!");

  } catch (error) {
    setIsLoading(false);
    console.error("EmailJS error:", error); // Gunakan console.error untuk detail
    showAlertMessage("danger", "Terjadi kesalahan, coba lagi.");
  }
};
  return (
    <section className="relative flex items-center c-space section-spacing">
      <Particles
        className="absolute inset-0 -z-50"
        quantity={100}
        ease={80}
        color={"#ffffff"}
        refresh
      />
      {showAlert && <Alert type={alertType} text={alertMessage} />}
      <div className="flex flex-col items-center justify-center max-w-md p-5 mx-auto border border-white/10 rounded-2xl bg-primary">
        <div className="flex flex-col items-start w-full gap-5 mb-10">
          <h2 className="text-heading">Let's Talk</h2>
          <p className="font-normal text-neutral-400">
            Whether you're loking to build a new website, improve your existing
            platform, or bring a unique project to life, I'm here to help
          </p>
        </div>
        <form className="w-full" onSubmit={handleSubmit}>
          <div className="mb-5">
            <label htmlFor="name" className="feild-label">
              Full Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className="field-input field-input-focus"
              placeholder="John "
              autoComplete="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-5">
            <label htmlFor="email" className="feild-label">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="field-input field-input-focus"
              placeholder="John@email.com"
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-5">
            <label htmlFor="message" className="feild-label">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              type="text"
              rows="4"
              className="field-input field-input-focus"
              placeholder="Share your thoughts..."
              autoComplete="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full px-1 py-3 text-lg text-center rounded-md cursor-pointer bg-radial from-lavender to-royal hover-animation"
          >
            {!isLoading ? "Send" : "Sending..."}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;