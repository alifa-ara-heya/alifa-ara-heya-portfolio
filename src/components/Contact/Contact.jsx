import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import Swal from "sweetalert2";

const Contact = () => {
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Get form data
        const form = e.target;
        const formData = new FormData(form);

        // Submit form data to Formspree
        try {
            const response = await fetch("https://formspree.io/f/xqaagqgl", {
                method: "POST",
                body: formData,
                headers: {
                    Accept: "application/json",
                },
            });

            if (response.ok) {
                // Show success alert
                Swal.fire({
                    title: "Message Sent!",
                    text: "Thank you for reaching out. I'll get back to you soon.",
                    icon: "success",
                    confirmButtonColor: "#3085d6",
                    confirmButtonText: "OK",
                });

                // Reset the form
                form.reset();
            } else {
                // Show error alert
                Swal.fire({
                    title: "Oops!",
                    text: "Something went wrong. Please try again.",
                    icon: "error",
                    confirmButtonColor: "#d33",
                    confirmButtonText: "OK",
                });
            }
        } catch (error) {
            // Show error alert for network issues
            Swal.fire({
                title: "Error!",
                text: `Unable to send the message. Please check your internet connection.${error}`,
                icon: "error",
                confirmButtonColor: "#d33",
                confirmButtonText: "OK",
            });
        }
    };

    return (
        <section className="bg-gray-900 py-16 px-6" id="contact">
            <div className="container mx-auto max-w-6xl">
                <h2 className="text-4xl font-bold text-center mb-8 text-white">Contact Information</h2>

                {/* Contact Details */}
                <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-12">
                    {/* Email */}
                    <div className="flex items-center gap-4">
                        <FaEnvelope />
                        <p className="text-lg">
                            <a href="mailto:alifaaraheya@gmail.com" className="hover:underline">
                                alifaaraheya@gmail.com
                            </a>
                        </p>
                    </div>

                    {/* Phone */}
                    <div className="flex items-center gap-4">
                        <FaPhone />
                        <p className="text-lg">
                            <a href="tel:+15183087574" className="hover:underline">
                                +1 518-308-7574
                            </a>
                        </p>
                    </div>


                    {/* Location */}
                    <div className="flex items-center gap-4">
                        <FaMapMarkerAlt className="text-red-500 text-2xl" />
                        <p className="text-lg">
                            Troy, New York, USA
                        </p>
                    </div>

                    {/* WhatsApp */}
                    {/*  <div className="flex items-center gap-4">
                        <FaWhatsapp />
                        <p className="text-lg">
                            <a
                                href="https://wa.me/15183087574"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:underline"
                            >
                                WhatsApp
                            </a>
                        </p>
                    </div> */}
                </div>

                {/* Email Form */}
                <div className="bg-gray-800 rounded-lg shadow-lg p-8 md:p-12 max-w-lg mx-auto">
                    <h3 className="text-2xl font-bold mb-4">Send Me a Message</h3>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-sm font-medium mb-2">
                                Your Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="w-full p-3 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-medium mb-2">
                                Your Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="w-full p-3 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="message" className="block text-sm font-medium mb-2">
                                Your Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows="4"
                                className="w-full p-3 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full btn  py-3 rounded-md transition duration-300"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
