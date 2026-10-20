import React, { useState } from "react";

const Contact = ({
    isDark,
    title,
    subtitle,
    slug,
    phone,
    whatsapp,
    location,
    availability
}) => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: ""
    });

    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState(null); // "success" | "error"

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!form.name || !form.email || !form.message) {
            alert("Please fill all fields");
            return;
        }

        try {
            setLoading(true);
            setStatus(null);

            const res = await fetch(`http://localhost:5000/api/portfolio/${slug}/contact`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(form)
            });

            if (!res.ok) throw new Error("Failed");

            setStatus("success");
            setForm({ name: "", email: "", message: "" });
        } catch (err) {
            setStatus("error");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            {/* ================= INLINE CSS ================= */}
            <style>
                {`
        .contact-section {
          padding: 160px 20px;
          position: relative;
          z-index: 1;
          text-align: center;
           background-color: #000; 
        }

        .contact-section.dark {
          --card: rgba(255,255,255,0.06);
          --text: #ffffff;
          --muted: #94a3b8;
          --border: rgba(255,255,255,0.14);
          --accent: linear-gradient(90deg, #FFB900, #FFB900, #FFB900);
        }

        .contact-section.light {
          --card: rgba(255,255,255,0.75);
          --text: #020617;
          --muted: #475569;
          --border: rgba(0,0,0,0.12);
          --accent: linear-gradient(90deg, #2563eb, #7c3aed, #db2777);
        }

        .contact-header {
          max-width: 800px;
          margin: auto;
          color: var(--text);
        }

        .contact-title {
          font-size: clamp(2.8rem, 6vw, 4rem);
          font-weight: 900;
        }

        .contact-subtitle {
          margin-top: 14px;
          color: var(--muted);
          font-size: 1.1rem;
        }

        .contact-wrapper {
          margin-top: 100px;
          max-width: 1100px;
          margin-left: auto;
          margin-right: auto;
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 40px;
        }

        .contact-card {
          background: var(--card);
          border: 1px solid var(--border);
          border-radius: 28px;
          padding: 40px;
          backdrop-filter: blur(14px);
          text-align: left;
        }

        .contact-card h3 {
          font-size: 1.6rem;
          margin-bottom: 20px;
          background: var(--accent);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .contact-form input,
        .contact-form textarea {
          padding: 14px 16px;
          border-radius: 12px;
          border: 1px solid var(--border);
          background: transparent;
          color: var(--text);
          font-size: 0.95rem;
          outline: none;
        }

        .contact-form textarea {
          resize: vertical;
          min-height: 120px;
        }

        .contact-submit {
          margin-top: 10px;
          padding: 14px;
          border-radius: 12px;
          border: none;
          cursor: pointer;
          font-weight: 700;
          background: var(--accent);
          color: white;
        }

        .contact-submit:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .contact-status {
          margin-top: 12px;
          font-size: 0.9rem;
        }

        .contact-status.success {
          color: #22c55e;
        }

        .contact-status.error {
          color: #ef4444;
        }

        /* ================= RIGHT SIDE ================= */

        .contact-side {
          display: flex;
          flex-direction: column;
          gap: 24px;
          justify-content: center;
        }

        .contact-action {
          background: var(--card);
          border: 1px solid var(--border);
          border-radius: 22px;
          padding: 28px;
          backdrop-filter: blur(12px);
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .contact-action:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 50px rgba(0,0,0,0.2);
        }

        .contact-action h4 {
          margin-bottom: 8px;
          font-size: 1.2rem;
          color: var(--text);
        }

        .contact-action p {
          color: var(--muted);
          font-size: 0.95rem;
        }

        /* ================= RESPONSIVE ================= */

        @media (max-width: 900px) {
          .contact-wrapper {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 600px) {
          .contact-section {
            padding: 120px 16px;
          }
        }
        
        `}
            </style>

            {/* ================= SECTION ================= */}
            <section id="contact" className={`contact-section ${isDark ? "dark" : "light"}`}>
                <div className="contact-header">
                    <h2 className="contact-title">{title}</h2>
                    <p className="contact-subtitle">{subtitle}</p>
                </div>

                <div className="contact-wrapper">
                    {/* ================= FORM ================= */}
                    <div className="contact-card">
                        <h3>Send a Message</h3>

                        <form className="contact-form" onSubmit={handleSubmit}>
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                value={form.name}
                                onChange={handleChange}
                            />

                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                value={form.email}
                                onChange={handleChange}
                            />

                            <textarea
                                name="message"
                                placeholder="Your Message"
                                value={form.message}
                                onChange={handleChange}
                            />

                            <button className="contact-submit" disabled={loading}>
                                {loading ? "Sending..." : "Send Message"}
                            </button>

                            {status === "success" && (
                                <div className="contact-status success">
                                    ✅ Message sent successfully!
                                </div>
                            )}

                            {status === "error" && (
                                <div className="contact-status error">
                                    ❌ Can't send message during preview mode.
                                </div>
                            )}
                        </form>
                    </div>

                    {/* ================= SIDE ACTIONS ================= */}
                    <div className="contact-side">



                        {/* Location */}
                        <div
                            className="contact-action"
                            onClick={() =>
                                window.open(
                                    `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location)}`,
                                    "_blank"
                                )
                            }
                        >
                            <h4>📍 Location</h4>
                            <p className="location">{location}</p>
                        </div>

                        {/* Availability */}
                        <div className="contact-action">
                            <h4>⏰ Availability</h4>
                            <p dangerouslySetInnerHTML={{ __html: availability }} />
                        </div>


                        {/* Call */}
                        <div
                            className="contact-action"
                            onClick={() => window.open(`tel:${phone}`)}
                        >
                            <h4>📞 Call Me</h4>
                            <p>{phone}</p>
                        </div>

                        {/* WhatsApp */}
                        <div
                            className="contact-action"
                            onClick={() => window.open(`https://wa.me/${whatsapp}`, "_blank")}
                        >
                            <h4>💬 WhatsApp</h4>
                            <p>Chat with me instantly</p>
                        </div>

                    </div>

                </div>
            </section>
        </>
    );
};

export default Contact;
